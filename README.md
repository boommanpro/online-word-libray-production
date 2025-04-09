# Online Vocabulary Generator

## Features
- Real-time English article processing
- Automatic word filtering and deduplication
- 支持导出JSON/txt格式的分析结果
- English interface with element-plus

## Usage
1. Paste English article in left panel
2. Click 'Generate Dictionary' button
3. View/Sort/Export vocabulary list in right panel

## Configuration
```javascript
// vite.config.js
export default {
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()]
    }
  }
}
```

## Development Setup
```bash
npm install
npm run dev
```

## Customization
- Modify common words list: `/src/assets/common-words.json`
- Adjust UI styles: `/src/style.css`

---
*Based on Vue 3 + Vite template*
