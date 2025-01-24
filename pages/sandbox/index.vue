<script lang="ts" setup>
const editor = useEditor({
    extensions: [VLibTiptapStarterKit],
});

onBeforeUnmount(() => {
    unref(editor)?.destroy();
});
</script>

<template>
    <section class="container">
        <div
            v-if="editor"
            class="flex flex-wrap items-center gap-x-6"
        >
            <button
                class="border border-red-500"
                :disabled="!editor.can().chain().focus().toggleBold().run()"
                :class="{ 'bg-gray-400': editor.isActive('bold') }"
                @click="editor.chain().focus().toggleBold().run()"
            >
                bold
            </button>
            <button
                class="border border-red-500"
                :disabled="!editor.can().chain().focus().toggleItalic().run()"
                :class="{ 'bg-gray-400': editor.isActive('italic') }"
                @click="editor.chain().focus().toggleItalic().run()"
            >
                italic
            </button>
            <button
                class="border border-red-500"
                :disabled="!editor.can().chain().focus().toggleStrike().run()"
                :class="{ 'bg-gray-400': editor.isActive('strike') }"
                @click="editor.chain().focus().toggleStrike().run()"
            >
                strike
            </button>
            <button
                class="border border-red-500"
                :disabled="!editor.can().chain().focus().toggleCode().run()"
                :class="{ 'bg-gray-400': editor.isActive('code') }"
                @click="editor.chain().focus().toggleCode().run()"
            >
                code
            </button>
            <button
                class="border border-red-500"
                @click="editor.chain().focus().unsetAllMarks().run()"
            >
                clear marks
            </button>
            <button
                class="border border-red-500"
                @click="editor.chain().focus().clearNodes().run()"
            >
                clear nodes
            </button>
            <button
                class="border border-red-500"
                :class="{ 'bg-gray-400': editor.isActive('paragraph') }"
                @click="editor.chain().focus().setParagraph().run()"
            >
                paragraph
            </button>
            <button
                class="border border-red-500"
                :class="{ 'bg-gray-400': editor.isActive('heading', { level: 1 }) }"
                @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            >
                h1
            </button>
            <button
                class="border border-red-500"
                :class="{ 'bg-gray-400': editor.isActive('heading', { level: 2 }) }"
                @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            >
                h2
            </button>
            <button
                class="border border-red-500"
                :class="{ 'bg-gray-400': editor.isActive('heading', { level: 3 }) }"
                @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
            >
                h3
            </button>
            <button
                class="border border-red-500"
                :class="{ 'bg-gray-400': editor.isActive('heading', { level: 4 }) }"
                @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
            >
                h4
            </button>
            <button
                class="border border-red-500"
                :class="{ 'bg-gray-400': editor.isActive('heading', { level: 5 }) }"
                @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
            >
                h5
            </button>
            <button
                class="border border-red-500"
                :class="{ 'bg-gray-400': editor.isActive('heading', { level: 6 }) }"
                @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
            >
                h6
            </button>
            <button
                class="border border-red-500"
                :class="{ 'bg-gray-400': editor.isActive('bulletList') }"
                @click="editor.chain().focus().toggleBulletList().run()"
            >
                bullet list
            </button>
            <button
                class="border border-red-500"
                :class="{ 'bg-gray-400': editor.isActive('orderedList') }"
                @click="editor.chain().focus().toggleOrderedList().run()"
            >
                ordered list
            </button>
            <button
                class="border border-red-500"
                :class="{ 'bg-gray-400': editor.isActive('codeBlock') }"
                @click="editor.chain().focus().toggleCodeBlock().run()"
            >
                code block
            </button>
            <button
                class="border border-red-500"
                :class="{ 'bg-gray-400': editor.isActive('blockquote') }"
                @click="editor.chain().focus().toggleBlockquote().run()"
            >
                blockquote
            </button>
            <button
                class="border border-red-500"
                @click="editor.chain().focus().setHorizontalRule().run()"
            >
                horizontal rule
            </button>
            <button
                class="border border-red-500"
                @click="editor.chain().focus().setHardBreak().run()"
            >
                hard break
            </button>
            <button
                class="border border-red-500"
                :disabled="!editor.can().chain().focus().undo().run()"
                @click="editor.chain().focus().undo().run()"
            >
                undo
            </button>
            <button
                class="border border-red-500"
                :disabled="!editor.can().chain().focus().redo().run()"
                @click="editor.chain().focus().redo().run()"
            >
                redo
            </button>
        </div>

        <VLibTiptapEditorContent
            :editor="editor"
            class="prose"
        />

        <strong>strong</strong>

        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
    </section>
</template>
