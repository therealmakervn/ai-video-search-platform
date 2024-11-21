# 🛠 Hướng Dẫn Phát Triển

## 📋 Môi Trường Phát Triển

### Yêu Cầu
- Node.js: v16.0.0 trở lên
- npm: v8.0.0 trở lên
- macOS Intel / Apple Silicon
- Trình duyệt hiện đại (Chrome, Firefox, Safari)

### Cài Đặt Môi Trường

1. Clone repository:
```bash
git clone https://github.com/[username]/social-media-platform.git
cd social-media-platform
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Cấu hình môi trường:
```bash
cp .env.example .env.local
```

4. Điền các API key:
- TWELVE_LABS_API_KEY
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- NEXT_PUBLIC_OPENAI_API_KEY

## 🚀 Lệnh Phát Triển

- Chế độ phát triển: `npm run dev`
- Build sản phẩm: `npm run build`
- Chạy sản phẩm: `npm start`
- Kiểm tra lint: `npm run lint`

## 🔍 Cấu Trúc Dự Án

```
/src
├── app/           # Các trang Next.js
├── components/    # Thành phần React
├── hooks/         # Custom React hooks
├── lib/           # Thư viện và tiện ích
└── styles/        # Stylesheet
```

## 🧪 Kiểm Thử

- Chạy kiểm thử: `npm test`
- Phủ sóng kiểm thử: `npm run test:coverage`

## 🌐 Triển Khai

- Vercel
- Netlify
- Docker

## 🔧 Giải Quyết Vấn Đề

### Các Lỗi Thường Gặp
- API key không hợp lệ
- Kết nối mạng không ổn định
- Vượt quá giới hạn request

### Logging
- Sử dụng console.error() cho các lỗi
- Ghi log chi tiết vào file

## 📋 Quy Trình Phát Triển

1. Tạo branch mới từ `main`
2. Phát triển tính năng
3. Kiểm tra lint và test
4. Tạo Pull Request
5. Review code
6. Merge vào `main`

## 🔒 Bảo Mật

- Không commit API keys
- Sử dụng biến môi trường
- Hạn chế quyền truy cập

## 📚 Tài Liệu Tham Khảo

- [Next.js Docs](https://nextjs.org/docs)
- [TwelveLabs API](https://docs.twelvelabs.io)
- [Supabase Docs](https://supabase.com/docs)
