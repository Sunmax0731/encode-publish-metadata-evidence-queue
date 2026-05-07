# 要件定義

## 目的

エンコード・公開前メタデータ・証跡・処理キュー は、動画公開前の書き出し、説明文、証跡、再実行処理が分かれ、ミスややり直しが発生しやすい。 という課題を、Windows-first CLI + queue manifest で解決する。

## 利用者

- GitHub Release / BOOTH に向けて成果物を公開する制作者
- 手作業の確認を減らし、証跡を残したい開発者または運用者

## 必須要件

- publish queue job を JSON 入力で受け取り、必須項目を検証できる。
- 正常、必須項目不足、warning、混在バッチを自動テストできる。
- 検証結果を Markdown と JSON で出力できる。
- UI または配布面の骨格を持ち、手動テストで実際の利用導線を確認できる。
- QCDS metrics、回帰 baseline、release checklist、security/privacy、traceability を保持する。

## 対象外

- 外部サービスへの大量アクセス自動化。
- 認証情報や個人情報をリポジトリへ保存する運用。
- 手動テストを Codex 側で実施済みと見なすこと。
