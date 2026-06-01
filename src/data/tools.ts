export type ToolCategory = '圖片' | 'PDF' | '開發者' | '實用';

export const categoryTranslations: Record<ToolCategory, string> = {
  '圖片': 'Images',
  'PDF': 'PDF',
  '開發者': 'Developer',
  '實用': 'Utilities',
};

export interface Tool {
  name: string;
  nameEn: string;
  slug: string;
  description: string;
  descriptionEn: string;
  category: ToolCategory;
  icon: string;
  keywords: string[];
}

export const tools: Tool[] = [
  {
    name: 'PNG 轉 JPG',
    nameEn: 'PNG to JPG',
    slug: 'png-to-jpg',
    description: '免費將 PNG 圖片轉換為 JPG 格式，支援批次處理，完全在瀏覽器執行。',
    descriptionEn: 'Convert PNG images to JPG format for free, with batch support, running entirely in your browser.',
    category: '圖片',
    icon: '🖼️',
    keywords: ['png', 'jpg', 'jpeg', '圖片轉換', '格式轉換', 'convert'],
  },
  {
    name: 'JPG 轉 PNG',
    nameEn: 'JPG to PNG',
    slug: 'jpg-to-png',
    description: '將 JPG/JPEG 圖片轉換為透明背景支援的 PNG 格式。',
    descriptionEn: 'Convert JPG/JPEG images to PNG format with full transparency support.',
    category: '圖片',
    icon: '🖼️',
    keywords: ['jpg', 'jpeg', 'png', '圖片轉換', '格式轉換', 'convert'],
  },
  {
    name: '圖片壓縮',
    nameEn: 'Image Compressor',
    slug: 'image-compressor',
    description: '在瀏覽器中壓縮 JPG、PNG 圖片，大幅縮小檔案大小而不明顯失真。',
    descriptionEn: 'Compress JPG and PNG images in your browser, reducing file size without obvious quality loss.',
    category: '圖片',
    icon: '🗜️',
    keywords: ['壓縮', 'compress', '縮小', '圖片', 'jpg', 'png', 'optimize'],
  },
  {
    name: 'WebP 轉換器',
    nameEn: 'WebP Converter',
    slug: 'webp-converter',
    description: '將圖片轉換為現代 WebP 格式，或將 WebP 轉回 JPG/PNG。',
    descriptionEn: 'Convert images to the modern WebP format, or convert WebP back to JPG/PNG.',
    category: '圖片',
    icon: '🔄',
    keywords: ['webp', '圖片', '轉換', 'convert', 'jpg', 'png'],
  },
  {
    name: 'PDF 合併',
    nameEn: 'PDF Merge',
    slug: 'pdf-merge',
    description: '將多個 PDF 檔案合併為一份，拖曳排序後下載，不上傳伺服器。',
    descriptionEn: 'Merge multiple PDF files into one. Drag to reorder, then download. No server upload.',
    category: 'PDF',
    icon: '📄',
    keywords: ['pdf', '合併', 'merge', '結合', '文件'],
  },
  {
    name: 'PDF 分割',
    nameEn: 'PDF Split',
    slug: 'pdf-split',
    description: '從 PDF 中擷取特定頁面或將 PDF 分割為多個獨立檔案。',
    descriptionEn: 'Extract specific pages from a PDF or split it into multiple separate files.',
    category: 'PDF',
    icon: '✂️',
    keywords: ['pdf', '分割', 'split', '頁面', '擷取', '文件'],
  },
  {
    name: 'JSON 格式化',
    nameEn: 'JSON Formatter',
    slug: 'json-formatter',
    description: '將壓縮或雜亂的 JSON 格式化、美化並驗證語法正確性。',
    descriptionEn: 'Format, prettify, and validate the syntax of compressed or messy JSON.',
    category: '開發者',
    icon: '{ }',
    keywords: ['json', '格式化', 'format', '美化', 'beautify', '驗證', 'validate'],
  },
  {
    name: 'Base64 編解碼',
    nameEn: 'Base64 Encoder/Decoder',
    slug: 'base64',
    description: '文字、圖片或檔案的 Base64 編碼與解碼，即時轉換。',
    descriptionEn: 'Encode and decode text, images, or files in Base64 format. Real-time conversion.',
    category: '開發者',
    icon: '🔐',
    keywords: ['base64', '編碼', '解碼', 'encode', 'decode', '加密'],
  },
  {
    name: 'QR Code 產生器',
    nameEn: 'QR Code Generator',
    slug: 'qr-code-generator',
    description: '輸入網址或文字，立即產生可下載的 QR Code 圖片。',
    descriptionEn: 'Enter a URL or text and instantly generate a downloadable QR Code image.',
    category: '實用',
    icon: '📱',
    keywords: ['qr code', 'qrcode', '二維碼', '條碼', '掃描', 'scan'],
  },
];

/** 取得所有不重複的分類 */
export const categories: ToolCategory[] = [...new Set(tools.map((t) => t.category))];

/** 依分類篩選工具 */
export function getToolsByCategory(category: ToolCategory): Tool[] {
  return tools.filter((t) => t.category === category);
}

/** 依關鍵字搜尋工具（名稱 + 描述 + keywords，同時搜尋中英文） */
export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase().trim();
  if (!q) return tools;
  return tools.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.nameEn.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.descriptionEn.toLowerCase().includes(q) ||
      t.keywords.some((k) => k.toLowerCase().includes(q))
  );
}
