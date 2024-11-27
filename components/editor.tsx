"use client";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
}

export const Editor = ({ onChange, initialContent }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const {edgestore}=useEdgeStore()

  const handleUpload = async (file: File, ) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });
    return response.url
  };

  // Create the editor instance
  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[]) // Parse initial content if provided
      : undefined,
    uploadFile:handleUpload
  });

  // Handle content changes
  const handleChange = () => {
    const content = JSON.stringify(editor.document, null, 2); // Use editor.document to get current content
    onChange(content);
  };

  // Render the editor
  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onChange={handleChange} // Call handleChange on content change
      />
    </div>
  );
};