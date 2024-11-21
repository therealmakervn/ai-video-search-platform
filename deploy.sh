#!/bin/bash

# Kiểm tra các điều kiện tiên quyết
if ! command -v npm &> /dev/null; then
    echo "npm không được cài đặt. Vui lòng cài đặt Node.js và npm."
    exit 1
fi

if ! command -v vercel &> /dev/null; then
    echo "Vercel CLI chưa được cài đặt. Cài đặt bằng lệnh: npm i -g vercel"
    exit 1
fi

# Xóa các file build cũ
rm -rf .next

# Cài đặt dependencies
echo "🔄 Cài đặt dependencies..."
npm install

# Kiểm tra lint
echo "🕵️ Kiểm tra mã nguồn..."
npm run lint

# Kiểm tra type
echo "✅ Kiểm tra TypeScript..."
npm run type-check

# Build ứng dụng
echo "🏗️ Build ứng dụng..."
npm run build

# Deploy lên Vercel
echo "🚀 Bắt đầu deploy..."
vercel --prod

# Thông báo kết quả
if [ $? -eq 0 ]; then
    echo "✨ Deploy thành công!"
else
    echo "❌ Deploy thất bại. Vui lòng kiểm tra log."
    exit 1
fi
