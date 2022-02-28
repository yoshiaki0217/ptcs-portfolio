## 環境構築
```
# プロジェクトをcloneする
$ git clone https://github.com/JuriMatsuda/kobushidegun-hp-backend.git

# ディレクトリ移動
$ cd kobushidegun-hp-backend

# dockerビルド
$ docker-compose build

# コンテナ起動(コンテナ停止は Ctrl + c)
$ make serve

# phpコンテナに入る
$ make login-php

# 初回のみ実行
$ make build-local
```
