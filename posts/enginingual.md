---
title: "エンジニンガル"
date: "2020-02-21"
order: 14
framework: "/icons/ruby.png"
thumbnail: "/images/enginingual.png"
---

# 概要

難しい専門用語、カタカナ語、英語の略称などエンジニアと話をしていたら頻繁に出てくるものの、非エンジニアにとっては難しい単語を翻訳することで円滑にコミュニケーションをとれるようになることを狙ったアプリ

エンジニンガルという言葉からも薄々感じ取れる通り、このアプリは 2000 年代初頭に流行した某翻訳機のように音声認識を行っており、音声から文字起こし → 専門用語を翻訳 → 表示するというものとなっています。（下の gif 画像参照）

![eiginigual-demo.gif](/images/enginingual/eiginigual-demo.gif)

# 機能

![enginingual-layout.png](/images/enginingual/enginingual-layout.png)

このアプリのメイン機能は**音声認識によって得られた文字列を翻訳して表示する**
ということに尽きます。メインページの録音開始ボタンを押すと録音が開始され、実際に録音されたままの文章を画面下部に、録音された文章の中に専門用語が含まれていた場合は専門用語を事前に登録した文章に差し替えて画面上部に表示します。また、専門用語がどのような文脈で使用されたかが分かるように、オプションとして右下の SAVE ボタンを押すとテキストファイルが出力され、今までの会話の内容を保存できるようになっています。

![enginingual-text.png](/images/enginingual/enginingual-text.png)

# システム構成

![ennginingual-system.png](/images/enginingual/ennginingual-system.png)

# 翻訳方法

冒頭のデモ動画でも触れていましたが、このアプリの機能のほとんどは javascript で記述されています。javascript では、音声認識を行う Web Speech API、形態素解析を行う kuromoji.js、バックエンドの Ruby on Rails とつなぐ axios が動いています。 Web Speech API によって取得したテキストデータを kuromoji.js によって単語レベルまで分割し、

その中に事前に登録されている専門用語があれば Ruby on Rails を介して MySQL に接続してその専門用語に対する翻訳テキストを取得して元の単語と置換する、というフローによって翻訳を実現しています。

web サーバの役割を持つコンテナには nginx を使用し、Web Speech API を使用する際に必要となる SSL 通信は自動的に Let’s Encrypt を介して証明書を取得できる https-portal という Docker コンテナを使用しました。また、このアプリは専門用語を事前にデータベースに登録しておく必要があり、専門用語をまとめた CSV ファイルを MySQL へそのまま登録するために、Adminer と呼ばれるブラウザ上でデータベースを管理することができるツールを使用しています。

このような仕組みでエンジニンガルは動作しています。（※なお、現在は稼働していないためアクセスはできません。ご了承ください。）

# ソース

- [フロントエンド](https://github.com/kaity-kaity/Enginingual.Web)
- [バックエンド](https://github.com/kaity-kaity/Enginingual.Server)
