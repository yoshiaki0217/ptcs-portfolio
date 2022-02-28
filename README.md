## 環境構築
```
# プロジェクトをcloneする
$ git clone https://github.com/yoshiaki0217/ptcs-portfolio.git

# ディレクトリ移動
$ cd ptcs-portfolio/backend

# dockerビルド
$ docker-compose build

# コンテナの中に入ってcomposerをインストール
$ make serve
$ make login
$ cd example-app
$ composer install

# envファイル作成とkeyを作成
$ cp .env.example .env
$ php artisan key:generate

# example-app内の.envファイルを以下に書き換え
 
 ~略
 DB_CONNECTION=mysql
 DB_HOST=mysql
 DB_PORT=3306
 DB_DATABASE=ptcs
 DB_USERNAME=ptcs
 DB_PASSWORD=ptcs

# マイグレ実行(うまくいかない場合はdockerを再起動して、再度試してみてください。)
$ php artisan migrate

# reactを立ち上げる
$ cd ptcs-portfolio/frontend/node/react-portfolio
$ npm install
```

## サイトに関して
初期画面は何も表示されてないと思います。
投稿ボタンから投稿ページへ飛んでください。

<img width="1431" alt="スクリーンショット 2022-02-28 20 29 33" src="https://user-images.githubusercontent.com/71176308/155976156-75604ed5-be9d-4033-bf5a-524179d10e14.png">

ニックネームと川柳を入力したら、投稿するボタンを押してください。  
一覧へのボタンを押すと投稿した川柳が表示されます。  
*表示されない場合はリロードしてみてください。  

<img width="1429" alt="スクリーンショット 2022-02-28 20 29 41" src="https://user-images.githubusercontent.com/71176308/155976536-5378e030-c910-4480-bdc8-5dd7b554bd54.png">

