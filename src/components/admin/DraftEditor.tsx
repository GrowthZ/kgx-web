import React, { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { uploadToR2 } from '../../lib/r2Service';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface DraftEditorProps {
    value: string;
    onChange: (html: string) => void;
    label?: string;
}

const DraftEditor: React.FC<DraftEditorProps> = ({ value, onChange, label }) => {
    const [editorState, setEditorState] = useState<EditorState>(() => EditorState.createEmpty());
    const [initialized, setInitialized] = useState(false);

    // Initialize editor from HTML value (on mount or when value changes externally)
    useEffect(() => {
        if (initialized) return;
        if (value) {
            const blocksFromHtml = htmlToDraft(value);
            if (blocksFromHtml) {
                const contentState = ContentState.createFromBlockArray(
                    blocksFromHtml.contentBlocks,
                    blocksFromHtml.entityMap
                );
                setEditorState(EditorState.createWithContent(contentState));
            }
        }
        setInitialized(true);
    }, [value, initialized]);

    const handleEditorChange = (state: EditorState) => {
        setEditorState(state);
        const html = draftToHtml(convertToRaw(state.getCurrentContent()));
        onChange(html);
    };

    // Upload image to R2 and return URL for draft.js image plugin
    const uploadImageCallback = async (file: File): Promise<{ data: { link: string } }> => {
        const url = await uploadToR2(file);
        return { data: { link: url } };
    };

    return (
        <div className="space-y-3">
            {label && (
                <label className="text-xs font-bold text-slate-400 tracking-widest ml-1">
                    {label}
                </label>
            )}
            <div className="rounded-2xl overflow-hidden border border-slate-200 focus-within:border-admin-primary/50 transition-all draft-editor-custom">
                <Editor
                    editorState={editorState}
                    onEditorStateChange={handleEditorChange}
                    wrapperClassName="draft-wrapper"
                    toolbarClassName="draft-toolbar"
                    editorClassName="draft-editor"
                    toolbar={{
                        options: [
                            'inline', 'blockType', 'fontSize',
                            'list', 'textAlign', 'colorPicker',
                            'link', 'image', 'remove', 'history'
                        ],
                        inline: {
                            options: ['bold', 'italic', 'underline', 'strikethrough'],
                        },
                        blockType: {
                            inDropdown: false,
                            options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'Blockquote'],
                        },
                        fontSize: {
                            inDropdown: false,
                            options: [12, 14, 16, 18, 20, 24, 28, 32],
                        },
                        list: {
                            options: ['unordered', 'ordered'],
                        },
                        textAlign: {
                            options: ['left', 'center', 'right', 'justify'],
                        },
                        image: {
                            uploadCallback: uploadImageCallback,
                            previewImage: true,
                            alt: { present: true, mandatory: false },
                            defaultSize: { height: 'auto', width: '100%' },
                        },
                        colorPicker: {
                            colors: [
                                'rgb(97,189,109)', 'rgb(26,188,156)', 'rgb(84,172,210)',
                                'rgb(44,130,201)', 'rgb(147,101,184)', 'rgb(71,85,119)',
                                'rgb(204,204,204)', 'rgb(65,168,95)', 'rgb(0,168,133)',
                                'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)',
                                'rgb(40,50,78)', 'rgb(0,0,0)', 'rgb(247,218,100)',
                                'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)',
                                'rgb(163,143,132)', 'rgb(255,255,255)',
                            ],
                        },
                    }}
                    localization={{
                        locale: 'en',
                        translations: {
                            'components.controls.blocktype.h1': 'Tiêu đề 1',
                            'components.controls.blocktype.h2': 'Tiêu đề 2',
                            'components.controls.blocktype.h3': 'Tiêu đề 3',
                            'components.controls.blocktype.h4': 'Tiêu đề 4',
                            'components.controls.blocktype.blockquote': 'Trích dẫn',
                            'components.controls.blocktype.normal': 'Bình thường',
                        },
                    }}
                    placeholder="Nhập mô tả dự án..."
                />
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .draft-wrapper {
                    font-family: 'Inter', sans-serif;
                }
                .draft-toolbar {
                    border: none !important;
                    border-bottom: 1px solid #f1f5f9 !important;
                    background: #f8fafc !important;
                    padding: 8px 16px !important;
                    margin-bottom: 0 !important;
                    border-radius: 0 !important;
                }
                .draft-toolbar .rdw-option-wrapper {
                    border: 1px solid transparent;
                    border-radius: 6px;
                    min-width: 28px;
                    height: 28px;
                    padding: 3px;
                    transition: all 0.15s;
                }
                .draft-toolbar .rdw-option-wrapper:hover,
                .draft-toolbar .rdw-option-active {
                    background: #e2e8f0;
                    border-color: #cbd5e1;
                    box-shadow: none;
                }
                .draft-toolbar .rdw-dropdown-wrapper {
                    border-radius: 8px;
                    border: 1px solid #e2e8f0;
                    background: white;
                }
                .draft-toolbar .rdw-dropdown-wrapper:hover {
                    box-shadow: none;
                    border-color: #94a3b8;
                }
                .draft-editor {
                    min-height: 350px;
                    padding: 16px 24px;
                    font-family: 'Inter', sans-serif;
                    font-size: 15px;
                    line-height: 1.7;
                    color: #1e293b;
                }
                .draft-editor .public-DraftEditorPlaceholder-root {
                    color: #94a3b8;
                }
                .draft-editor .public-DraftStyleDefault-block {
                    margin: 0 0 8px;
                }
                .rdw-image-modal, .rdw-link-modal, .rdw-colorpicker-modal,
                .rdw-dropdown-optionwrapper {
                    border-radius: 12px;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
                    border: 1px solid #e2e8f0;
                }
                .rdw-colorpicker-modal-options span {
                    border-radius: 4px;
                }
            `}} />
        </div>
    );
};

export default DraftEditor;
