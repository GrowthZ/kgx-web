import { useState, useCallback, useRef, useEffect, FC, ChangeEvent, DragEvent, ClipboardEvent, ReactNode } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { BubbleMenu } from '@tiptap/extension-bubble-menu';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import Color from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import { uploadToR2 } from '../../lib/r2Service';
import toast from 'react-hot-toast';
import Modal from './Modal';
import MediaManager from './MediaManager';

interface TiptapEditorProps {
    value: string;
    onChange: (data: string) => void;
    label?: string;
}

const MenuButton: FC<{
    onClick: () => void;
    isActive?: boolean;
    disabled?: boolean;
    title?: string;
    children: ReactNode;
}> = ({ onClick, isActive, disabled, title, children }) => (
    <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        title={title}
        className={`size-8 flex items-center justify-center rounded-lg text-sm transition-all ${isActive
            ? 'bg-admin-primary text-white shadow-sm'
            : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
            } ${disabled ? 'opacity-30 cursor-not-allowed' : ''}`}
    >
        {children}
    </button>
);

const Divider = () => <div className="w-px h-5 bg-slate-200 mx-0.5" />;

const TiptapEditor: FC<TiptapEditorProps> = ({ value, onChange, label }) => {
    const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [linkUrl, setLinkUrl] = useState('');
    const [showLinkInput, setShowLinkInput] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const isInternalUpdate = useRef(false);

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: { levels: [1, 2, 3, 4] },
            }),
            Image.configure({
                HTMLAttributes: {
                    class: 'tiptap-image',
                },
                allowBase64: false,
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'tiptap-link',
                },
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Underline,
            Placeholder.configure({
                placeholder: 'Bắt đầu viết nội dung bài viết tại đây...',
            }),
            TextStyle,
            Color,
            Table.configure({
                resizable: true,
            }),
            TableRow,
            TableCell,
            TableHeader,
        ],
        content: value,
        onUpdate: ({ editor }) => {
            isInternalUpdate.current = true;
            onChange(editor.getHTML());
        },
    });

    // Sync external value changes (e.g., when loading existing article)
    useEffect(() => {
        if (editor && !isInternalUpdate.current && value !== editor.getHTML()) {
            editor.commands.setContent(value, { emitUpdate: false });
        }
        isInternalUpdate.current = false;
    }, [value, editor]);

    // Image upload to R2
    const handleImageUpload = useCallback(async (file: File) => {
        if (!editor) return;
        if (!file.type.startsWith('image/')) {
            toast.error('Chỉ hỗ trợ tệp hình ảnh');
            return;
        }
        if (file.size > 10 * 1024 * 1024) {
            toast.error('Kích thước ảnh tối đa 10MB');
            return;
        }

        try {
            setIsUploading(true);
            const url = await uploadToR2(file);
            editor.chain().focus().setImage({ src: url }).run();
            toast.success('Upload ảnh thành công');
        } catch (error) {
            console.error('Image upload error:', error);
            toast.error('Lỗi khi upload ảnh');
        } finally {
            setIsUploading(false);
        }
    }, [editor]);

    // File input change handler
    const handleFileInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) handleImageUpload(file);
        // Reset input so the same file can be selected again
        e.target.value = '';
    }, [handleImageUpload]);

    // MediaManager select handler
    const handleMediaSelect = useCallback((url: string) => {
        if (editor) {
            editor.chain().focus().setImage({ src: url }).run();
        }
        setIsMediaModalOpen(false);
    }, [editor]);

    // Drag & drop images
    const handleDrop = useCallback((e: DragEvent) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files) as File[];
        const imageFile = files.find((f: File) => f.type.startsWith('image/'));
        if (imageFile) handleImageUpload(imageFile);
    }, [handleImageUpload]);

    // Paste images
    const handlePaste = useCallback((e: ClipboardEvent) => {
        const items = Array.from(e.clipboardData.items) as DataTransferItem[];
        const imageItem = items.find((item: DataTransferItem) => item.type.startsWith('image/'));
        if (imageItem) {
            e.preventDefault();
            const file = imageItem.getAsFile();
            if (file) handleImageUpload(file);
        }
    }, [handleImageUpload]);

    // Link handler
    const handleSetLink = useCallback(() => {
        if (!editor) return;
        if (linkUrl === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
        } else {
            editor.chain().focus().extendMarkRange('link').setLink({ href: linkUrl }).run();
        }
        setLinkUrl('');
        setShowLinkInput(false);
    }, [editor, linkUrl]);

    if (!editor) return null;

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                {label && (
                    <label className="text-xs font-bold text-slate-400 tracking-widest ml-1">
                        {label}
                    </label>
                )}
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={isUploading}
                        className="flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:border-admin-primary hover:text-admin-primary transition-all shadow-sm disabled:opacity-50"
                    >
                        <span className="material-symbols-outlined text-base">upload</span>
                        {isUploading ? 'Đang tải...' : 'Upload ảnh'}
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsMediaModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:border-admin-primary hover:text-admin-primary transition-all shadow-sm"
                    >
                        <span className="material-symbols-outlined text-base">perm_media</span>
                        Chèn Media
                    </button>
                </div>
            </div>

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
                className="hidden"
            />

            <div
                className="rounded-2xl overflow-hidden border border-slate-200 focus-within:border-admin-primary/50 transition-all bg-white"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                onPaste={handlePaste}
            >
                {/* Toolbar */}
                <div className="flex flex-wrap items-center gap-0.5 px-3 py-2 border-b border-slate-100 bg-slate-50/80">
                    {/* Undo/Redo */}
                    <MenuButton onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} title="Hoàn tác">
                        <span className="material-symbols-outlined text-[16px]">undo</span>
                    </MenuButton>
                    <MenuButton onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} title="Làm lại">
                        <span className="material-symbols-outlined text-[16px]">redo</span>
                    </MenuButton>

                    <Divider />

                    {/* Headings */}
                    <MenuButton onClick={() => editor.chain().focus().setParagraph().run()} isActive={editor.isActive('paragraph')} title="Đoạn văn">
                        <span className="text-xs font-black">P</span>
                    </MenuButton>
                    {([1, 2, 3, 4] as const).map(level => (
                        <MenuButton key={level} onClick={() => editor.chain().focus().toggleHeading({ level }).run()} isActive={editor.isActive('heading', { level })} title={`Heading ${level}`}>
                            <span className="text-xs font-black">H{level}</span>
                        </MenuButton>
                    ))}

                    <Divider />

                    {/* Text formatting */}
                    <MenuButton onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive('bold')} title="Đậm">
                        <span className="material-symbols-outlined text-[16px]">format_bold</span>
                    </MenuButton>
                    <MenuButton onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive('italic')} title="Nghiêng">
                        <span className="material-symbols-outlined text-[16px]">format_italic</span>
                    </MenuButton>
                    <MenuButton onClick={() => editor.chain().focus().toggleUnderline().run()} isActive={editor.isActive('underline')} title="Gạch chân">
                        <span className="material-symbols-outlined text-[16px]">format_underlined</span>
                    </MenuButton>
                    <MenuButton onClick={() => editor.chain().focus().toggleStrike().run()} isActive={editor.isActive('strike')} title="Gạch ngang">
                        <span className="material-symbols-outlined text-[16px]">strikethrough_s</span>
                    </MenuButton>

                    <Divider />

                    {/* Alignment */}
                    <MenuButton onClick={() => editor.chain().focus().setTextAlign('left').run()} isActive={editor.isActive({ textAlign: 'left' })} title="Căn trái">
                        <span className="material-symbols-outlined text-[16px]">format_align_left</span>
                    </MenuButton>
                    <MenuButton onClick={() => editor.chain().focus().setTextAlign('center').run()} isActive={editor.isActive({ textAlign: 'center' })} title="Căn giữa">
                        <span className="material-symbols-outlined text-[16px]">format_align_center</span>
                    </MenuButton>
                    <MenuButton onClick={() => editor.chain().focus().setTextAlign('right').run()} isActive={editor.isActive({ textAlign: 'right' })} title="Căn phải">
                        <span className="material-symbols-outlined text-[16px]">format_align_right</span>
                    </MenuButton>
                    <MenuButton onClick={() => editor.chain().focus().setTextAlign('justify').run()} isActive={editor.isActive({ textAlign: 'justify' })} title="Căn đều">
                        <span className="material-symbols-outlined text-[16px]">format_align_justify</span>
                    </MenuButton>

                    <Divider />

                    {/* Lists */}
                    <MenuButton onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive('bulletList')} title="Danh sách gạch đầu dòng">
                        <span className="material-symbols-outlined text-[16px]">format_list_bulleted</span>
                    </MenuButton>
                    <MenuButton onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive('orderedList')} title="Danh sách đánh số">
                        <span className="material-symbols-outlined text-[16px]">format_list_numbered</span>
                    </MenuButton>

                    <Divider />

                    {/* Blockquote & Code */}
                    <MenuButton onClick={() => editor.chain().focus().toggleBlockquote().run()} isActive={editor.isActive('blockquote')} title="Trích dẫn">
                        <span className="material-symbols-outlined text-[16px]">format_quote</span>
                    </MenuButton>
                    <MenuButton onClick={() => editor.chain().focus().toggleCodeBlock().run()} isActive={editor.isActive('codeBlock')} title="Code block">
                        <span className="material-symbols-outlined text-[16px]">code</span>
                    </MenuButton>
                    <MenuButton onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Đường kẻ ngang">
                        <span className="material-symbols-outlined text-[16px]">horizontal_rule</span>
                    </MenuButton>

                    <Divider />

                    {/* Link */}
                    <MenuButton
                        onClick={() => {
                            if (editor.isActive('link')) {
                                editor.chain().focus().unsetLink().run();
                            } else {
                                const previousUrl = editor.getAttributes('link').href || '';
                                setLinkUrl(previousUrl);
                                setShowLinkInput(true);
                            }
                        }}
                        isActive={editor.isActive('link')}
                        title="Chèn liên kết"
                    >
                        <span className="material-symbols-outlined text-[16px]">link</span>
                    </MenuButton>

                    {/* Table */}
                    <MenuButton
                        onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
                        title="Chèn bảng 3x3"
                    >
                        <span className="material-symbols-outlined text-[16px]">table_chart</span>
                    </MenuButton>

                    {/* Image Upload */}
                    <MenuButton onClick={() => fileInputRef.current?.click()} disabled={isUploading} title="Upload ảnh">
                        <span className="material-symbols-outlined text-[16px]">add_photo_alternate</span>
                    </MenuButton>
                </div>

                {/* Link Input */}
                {showLinkInput && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border-b border-slate-100">
                        <span className="material-symbols-outlined text-slate-400 text-base">link</span>
                        <input
                            type="url"
                            value={linkUrl}
                            onChange={(e) => setLinkUrl(e.target.value)}
                            placeholder="https://example.com"
                            className="flex-1 px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-admin-primary"
                            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleSetLink(); } }}
                            autoFocus
                        />
                        <button
                            type="button"
                            onClick={handleSetLink}
                            className="px-3 py-1.5 bg-admin-primary text-white rounded-lg text-xs font-bold hover:brightness-110 transition-all"
                        >
                            Áp dụng
                        </button>
                        <button
                            type="button"
                            onClick={() => { setShowLinkInput(false); setLinkUrl(''); }}
                            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-500 hover:bg-slate-50 transition-all"
                        >
                            Hủy
                        </button>
                    </div>
                )}

                {/* Upload overlay */}
                {isUploading && (
                    <div className="flex items-center gap-3 px-4 py-2 bg-blue-50 border-b border-blue-100">
                        <div className="size-4 border-2 border-blue-200 border-t-admin-primary rounded-full animate-spin" />
                        <span className="text-xs font-bold text-blue-600">Đang upload ảnh lên R2...</span>
                    </div>
                )}

                {/* Editor Content */}
                <EditorContent editor={editor} className="tiptap-editor-content" />

                {/* Bubble Menu */}
                {editor && (
                    <BubbleMenu editor={editor}>
                        <div className="flex items-center gap-0.5 bg-slate-900 rounded-xl px-2 py-1 shadow-xl">
                            <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={`size-7 flex items-center justify-center rounded-lg text-xs ${editor.isActive('bold') ? 'bg-white/20 text-white' : 'text-slate-300 hover:text-white'}`}>
                                <span className="material-symbols-outlined text-sm">format_bold</span>
                            </button>
                            <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={`size-7 flex items-center justify-center rounded-lg text-xs ${editor.isActive('italic') ? 'bg-white/20 text-white' : 'text-slate-300 hover:text-white'}`}>
                                <span className="material-symbols-outlined text-sm">format_italic</span>
                            </button>
                            <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()} className={`size-7 flex items-center justify-center rounded-lg text-xs ${editor.isActive('underline') ? 'bg-white/20 text-white' : 'text-slate-300 hover:text-white'}`}>
                                <span className="material-symbols-outlined text-sm">format_underlined</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    if (editor.isActive('link')) {
                                        editor.chain().focus().unsetLink().run();
                                    } else {
                                        const url = window.prompt('Nhập URL:');
                                        if (url) editor.chain().focus().setLink({ href: url }).run();
                                    }
                                }}
                                className={`size-7 flex items-center justify-center rounded-lg text-xs ${editor.isActive('link') ? 'bg-white/20 text-white' : 'text-slate-300 hover:text-white'}`}
                            >
                                <span className="material-symbols-outlined text-sm">link</span>
                            </button>
                        </div>
                    </BubbleMenu>
                )}
            </div>

            {/* Table actions (shown when inside a table) */}
            {editor.isActive('table') && (
                <div className="flex items-center gap-1 flex-wrap">
                    <span className="text-[10px] font-bold text-slate-400 tracking-widest mr-2">BẢNG:</span>
                    <button type="button" onClick={() => editor.chain().focus().addColumnBefore().run()} className="px-2 py-1 bg-slate-50 rounded-lg text-[10px] font-bold text-slate-500 hover:bg-slate-100 transition-all">+ Cột trước</button>
                    <button type="button" onClick={() => editor.chain().focus().addColumnAfter().run()} className="px-2 py-1 bg-slate-50 rounded-lg text-[10px] font-bold text-slate-500 hover:bg-slate-100 transition-all">+ Cột sau</button>
                    <button type="button" onClick={() => editor.chain().focus().addRowBefore().run()} className="px-2 py-1 bg-slate-50 rounded-lg text-[10px] font-bold text-slate-500 hover:bg-slate-100 transition-all">+ Hàng trên</button>
                    <button type="button" onClick={() => editor.chain().focus().addRowAfter().run()} className="px-2 py-1 bg-slate-50 rounded-lg text-[10px] font-bold text-slate-500 hover:bg-slate-100 transition-all">+ Hàng dưới</button>
                    <button type="button" onClick={() => editor.chain().focus().deleteColumn().run()} className="px-2 py-1 bg-rose-50 rounded-lg text-[10px] font-bold text-rose-500 hover:bg-rose-100 transition-all">Xóa cột</button>
                    <button type="button" onClick={() => editor.chain().focus().deleteRow().run()} className="px-2 py-1 bg-rose-50 rounded-lg text-[10px] font-bold text-rose-500 hover:bg-rose-100 transition-all">Xóa hàng</button>
                    <button type="button" onClick={() => editor.chain().focus().deleteTable().run()} className="px-2 py-1 bg-rose-50 rounded-lg text-[10px] font-bold text-rose-500 hover:bg-rose-100 transition-all">Xóa bảng</button>
                </div>
            )}

            {/* Media Manager Modal */}
            <Modal isOpen={isMediaModalOpen} onClose={() => setIsMediaModalOpen(false)}>
                <MediaManager
                    onSelect={handleMediaSelect}
                    onClose={() => setIsMediaModalOpen(false)}
                />
            </Modal>

            {/* Tiptap Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .tiptap-editor-content .tiptap {
                    min-height: 400px;
                    padding: 1.5rem 2rem;
                    font-family: 'Inter', sans-serif;
                    font-size: 15px;
                    line-height: 1.8;
                    color: #1e293b;
                    outline: none;
                }
                .tiptap-editor-content .tiptap:focus {
                    outline: none;
                }
                .tiptap-editor-content .tiptap > *:first-child {
                    margin-top: 0;
                }
                /* Placeholder */
                .tiptap-editor-content .tiptap p.is-editor-empty:first-child::before {
                    content: attr(data-placeholder);
                    float: left;
                    color: #94a3b8;
                    pointer-events: none;
                    height: 0;
                    font-style: italic;
                }
                /* Headings */
                .tiptap-editor-content .tiptap h1 { font-size: 1.8em; font-weight: 800; margin: 1.2em 0 0.6em; color: #0f172a; }
                .tiptap-editor-content .tiptap h2 { font-size: 1.5em; font-weight: 700; margin: 1em 0 0.5em; color: #1e293b; }
                .tiptap-editor-content .tiptap h3 { font-size: 1.25em; font-weight: 700; margin: 0.8em 0 0.4em; color: #334155; }
                .tiptap-editor-content .tiptap h4 { font-size: 1.1em; font-weight: 600; margin: 0.6em 0 0.3em; color: #475569; }
                /* Paragraph */
                .tiptap-editor-content .tiptap p { margin: 0.6em 0; }
                /* Links */
                .tiptap-editor-content .tiptap a,
                .tiptap-editor-content .tiptap .tiptap-link {
                    color: #2563eb;
                    text-decoration: underline;
                    cursor: pointer;
                }
                /* Blockquote */
                .tiptap-editor-content .tiptap blockquote {
                    border-left: 4px solid #e2e8f0;
                    padding: 0.5em 1.5em;
                    margin: 1em 0;
                    color: #64748b;
                    background: #f8fafc;
                    border-radius: 0 0.75rem 0.75rem 0;
                }
                /* Lists */
                .tiptap-editor-content .tiptap ul { list-style: disc; padding-left: 1.5em; margin: 0.5em 0; }
                .tiptap-editor-content .tiptap ol { list-style: decimal; padding-left: 1.5em; margin: 0.5em 0; }
                .tiptap-editor-content .tiptap li { margin: 0.25em 0; }
                /* Code */
                .tiptap-editor-content .tiptap code {
                    background: #f1f5f9;
                    padding: 0.15em 0.4em;
                    border-radius: 0.375rem;
                    font-size: 0.9em;
                    font-family: 'JetBrains Mono', monospace;
                }
                .tiptap-editor-content .tiptap pre {
                    background: #1e293b;
                    color: #e2e8f0;
                    padding: 1em 1.5em;
                    border-radius: 0.75rem;
                    overflow-x: auto;
                    margin: 1em 0;
                }
                .tiptap-editor-content .tiptap pre code {
                    background: none;
                    padding: 0;
                    color: inherit;
                }
                /* Horizontal Rule */
                .tiptap-editor-content .tiptap hr {
                    border: none;
                    border-top: 2px solid #e2e8f0;
                    margin: 1.5em 0;
                }
                /* Images */
                .tiptap-editor-content .tiptap img,
                .tiptap-editor-content .tiptap .tiptap-image {
                    max-width: 100%;
                    height: auto;
                    border-radius: 0.75rem;
                    margin: 1em 0;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
                }
                .tiptap-editor-content .tiptap img.ProseMirror-selectednode {
                    outline: 3px solid #6366f1;
                    outline-offset: 2px;
                }
                /* Table */
                .tiptap-editor-content .tiptap table {
                    border-collapse: collapse;
                    width: 100%;
                    margin: 1em 0;
                    border-radius: 0.5rem;
                    overflow: hidden;
                }
                .tiptap-editor-content .tiptap th,
                .tiptap-editor-content .tiptap td {
                    border: 1px solid #e2e8f0;
                    padding: 0.5em 0.75em;
                    text-align: left;
                    min-width: 80px;
                }
                .tiptap-editor-content .tiptap th {
                    background: #f1f5f9;
                    font-weight: 700;
                    font-size: 0.9em;
                    color: #475569;
                }
                .tiptap-editor-content .tiptap td {
                    vertical-align: top;
                }
                .tiptap-editor-content .tiptap .selectedCell {
                    background: #eef2ff;
                }
            `}} />
        </div>
    );
};

export default TiptapEditor;
