<template>
    <splitpanes class="h-screen">
        <pane min-size="20">
            <div class="p-4 h-full flex flex-col">
                <h2 class="text-xl font-bold mb-4">Input Article</h2>
                <el-input v-model="inputText" type="textarea" :autosize="{ minRows: 15 }"
                    placeholder="Paste your English article here..." class="flex-1" />
                <el-button type="primary" class="mt-4" @click="processArticle">
                    Generate Dictionary
                </el-button>
            </div>
        </pane>
        <pane>
            <div class="p-4 h-full flex flex-col">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">Word Dictionary</h2>
                    <el-button @click="exportCSV">
                        Export CSV
                    </el-button>
                </div>
                <el-table :data="processedWords" height="calc(100% - 48px)" class="flex-1">
                    <el-table-column prop="word" label="Word" sortable />
                    <el-table-column prop="frequency" label="Frequency" sortable />
                </el-table>
            </div>
        </pane>
    </splitpanes>
</template>

<script setup>
import { ref } from 'vue';
import { Splitpanes, Pane } from 'splitpanes';
import commonWords from '@/assets/common-words.json';

const inputText = ref('');
const processedWords = ref([]);

const processArticle = () => {
    const words = inputText.value
        .toLowerCase()
        .replace(/[^a-z\s]/g, ' ') // 去除非字母字符
        .split(/\s+/)
        .filter(word => word.length > 1);

    const wordMap = words.reduce((acc, word) => {
        if (!commonWords.includes(word)) {
            acc[word] = (acc[word] || 0) + 1;
        }
        return acc;
    }, {});

    processedWords.value = Object.entries(wordMap)
        .map(([word, frequency]) => ({ word, frequency }))
        .sort((a, b) => b.frequency - a.frequency);
};

const exportCSV = () => {
    const csvContent = 'Word,Frequency\n' +
        processedWords.value.map(row =>
            `${row.word},${row.frequency}`
        ).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'vocabulary-list.csv';
    link.click();
};
</script>

<style scoped></style>