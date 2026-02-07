import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
    ClassicEditor,
    Bold,
    Essentials,
    Italic,
    Mention,
    Paragraph,
    Undo,
    Heading,
    List,
    Link,
    Image,
    ImageToolbar,
    ImageCaption,
    ImageStyle,
    ImageResize,
    MediaEmbed,
    Table,
    TableToolbar,
    BlockQuote,
    Alignment,
    Font,
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';
import Modal from './Modal';
import MediaManager from './MediaManager';

interface RichTextEditorProps {
    value: string;
    onChange: (data: string) => void;
    label?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
    value,
    onChange,
    label
}) => {
    const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
    const [editor, setEditor] = useState<any>(null);

    const handleMediaSelect = (url: string) => {
        if (editor) {
            editor.model.change((writer: any) => {
                const imageElement = writer.createElement('imageBlock', {
                    src: url
                });
                editor.model.insertContent(imageElement, editor.model.document.selection);
            });
        }
        setIsMediaModalOpen(false);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                {label && (
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                        {label}
                    </label>
                )}
                <button
                    type="button"
                    onClick={() => setIsMediaModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:border-admin-primary hover:text-admin-primary transition-all shadow-sm"
                >
                    <span className="material-symbols-outlined text-base">perm_media</span>
                    Chèn Media
                </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 focus-within:border-admin-primary/50 transition-all ck-editor-custom">
                <CKEditor
                    editor={ClassicEditor}
                    data={value}
                    config={{
                        toolbar: {
                            items: [
                                'undo', 'redo', '|',
                                'heading', '|',
                                'fontFamily', 'fontSize', 'fontColor', 'fontBackgroundColor', '|',
                                'bold', 'italic', '|',
                                'link', 'blockQuote', '|',
                                'alignment', '|',
                                'bulletedList', 'numberedList', '|',
                                'insertTable', 'mediaEmbed', '|',
                            ]
                        },
                        plugins: [
                            Essentials, Undo, Heading, Bold, Italic, Mention, Paragraph, List,
                            Link, Image, ImageToolbar, ImageCaption, ImageStyle, ImageResize,
                            MediaEmbed, Table, TableToolbar, BlockQuote, Alignment, Font
                        ],
                        image: {
                            toolbar: [
                                'imageStyle:inline',
                                'imageStyle:block',
                                'imageStyle:side',
                                '|',
                                'toggleImageCaption',
                                'imageTextAlternative'
                            ]
                        }
                    }}
                    onReady={(editor) => {
                        setEditor(editor);
                    }}
                    onChange={(_event, editor) => {
                        const data = editor.getData();
                        onChange(data);
                    }}
                />
            </div>

            <Modal isOpen={isMediaModalOpen} onClose={() => setIsMediaModalOpen(false)}>
                <MediaManager
                    onSelect={handleMediaSelect}
                    onClose={() => setIsMediaModalOpen(false)}
                />
            </Modal>

            <style dangerouslySetInnerHTML={{
                __html: `
                .ck-editor__editable {
                    min-height: 400px;
                    border: none !important;
                    padding: 1rem 2rem !important;
                    font-family: 'Inter', sans-serif;
                }
                .ck.ck-editor__top .ck-sticky-panel .ck-toolbar {
                    border: none;
                    border-bottom: 1px solid #f1f5f9;
                    background: #f8fafc;
                    padding: 0.5rem 1rem;
                }
                .ck.ck-reset_all, .ck.ck-reset_all * {
                    font-family: 'Inter', sans-serif;
                }
            `}} />
        </div>
    );
};

export default RichTextEditor;
