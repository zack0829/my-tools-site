# my-tools

A free, privacy-first online toolkit built with [Astro](https://astro.build) and Tailwind CSS. All file processing happens **entirely in your browser** — nothing is ever uploaded to a server.

[中文說明](#中文說明) | [English](#english)

---

## English

### Features

- **Privacy First** — files never leave your device
- **100% Free** — no subscriptions, no usage limits, no account required
- **Bilingual UI** — switch between Traditional Chinese and English
- **9 Tools** across 4 categories

### Tools

| Category | Tool |
|----------|------|
| Images | PNG to JPG, JPG to PNG, Image Compressor, WebP Converter |
| PDF | PDF Merge, PDF Split |
| Developer | JSON Formatter, Base64 Encoder/Decoder |
| Utilities | QR Code Generator |

### Tech Stack

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first CSS
- Vanilla JavaScript — no runtime framework

### Getting Started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build → ./dist/
npm run preview   # preview production build
```

### Project Structure

```
src/
├── components/       # Shared UI components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── ToolCard.astro
│   └── LangSwitcher.astro
├── data/
│   └── tools.ts      # Tool definitions (bilingual)
├── i18n/
│   └── translations.ts  # UI translation strings
├── layouts/
│   ├── BaseLayout.astro
│   └── ToolLayout.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── privacy.astro
│   └── tools/        # Individual tool pages
└── styles/
    └── global.css
```

---

## 中文說明

### 功能特色

- **隱私優先** — 所有檔案處理完全在瀏覽器進行，絕不上傳伺服器
- **完全免費** — 無訂閱、無次數限制、無需帳號
- **中英雙語介面** — 支援繁體中文與英文切換
- **9 種工具** 涵蓋 4 大分類

### 工具列表

| 分類 | 工具 |
|------|------|
| 圖片 | PNG 轉 JPG、JPG 轉 PNG、圖片壓縮、WebP 轉換器 |
| PDF | PDF 合併、PDF 分割 |
| 開發者 | JSON 格式化、Base64 編解碼 |
| 實用 | QR Code 產生器 |

### 技術架構

- [Astro](https://astro.build) — 靜態網站框架
- [Tailwind CSS v4](https://tailwindcss.com) — 原子化 CSS
- 原生 JavaScript — 無前端框架依賴

### 本地開發

```bash
npm install
npm run dev       # 開啟 http://localhost:4321
npm run build     # 建置生產版本 → ./dist/
npm run preview   # 預覽生產版本
```

---

## License

MIT
