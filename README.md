## このレポジトリについて

## 使い方
.env ファイルに以下の値を定義してください。
NEXT_PUBLIC_FIREBASE_API_KEY=*******************
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=*******************.firebaseapp.com
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://*******************.firebaseio.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=*******************
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=*******************.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=*******************
NEXT_PUBLIC_FIREBASE_APP_ID=1:*******************:web:edca4c7282fb3d9f071fcf
BASE_URL=http://localhost:3000
STRIPE_KEY=pk_*******************
※ibis-bffに接続する場合は、BASE_URLをibis_docker_main記載のPORTに
修正してください。
https://github.com/IBis-academic/ibis-docker-main

npm ci
npm run dev

#デプロイ先
vercel
https://vercel.com/dashboard

# Author
ishida takuo
