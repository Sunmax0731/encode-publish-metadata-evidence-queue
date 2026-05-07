# encode-publish-metadata-evidence-queue

エンコード・公開前メタデータ・証跡・処理キュー は、エンコード設定、公開前メタデータ、編集・書き出しレポート、変換、字幕焼き込み、サムネイル生成を処理キュー化する。

## 何を解決するか

動画公開前の書き出し、説明文、証跡、再実行処理が分かれ、ミスややり直しが発生しやすい。

## 差別化

編集ツール由来のメタデータを使って、公開前確認と再実行可能な処理キューをつなぐ。

## 公開先

- GitHub Release / BOOTH

## 現在の到達点

- core / validators / report / review-model / CLI に責務を分割済み
- Windows-first CLI + queue manifest の最小実装または配布用骨格を同梱済み
- 代表シナリオ `samples/representative-suite.json` で正常系、必須項目不足、warning、混在バッチを自動検証済み
- 厳格 QCDS は Quality、Cost、Delivery、Satisfaction の全観点 S+ で評価済み
- docs ZIP は `dist/encode-publish-metadata-evidence-queue-docs.zip`

## 主要コマンド

```powershell
npm test
npm start
```

## 重要ドキュメント

- [要件定義](docs/requirements.md)
- [仕様](docs/specification.md)
- [設計](docs/design.md)
- [手動テスト](docs/manual-test.md)
- [厳格手動テスト追補](docs/strict-manual-test-addendum.md)
- [QCDS評価](docs/qcds-evaluation.md)
- [厳格QCDS metrics](docs/qcds-strict-metrics.json)
- [トレーサビリティ](docs/traceability-matrix.md)

## 参照したアイデアパック

- created_idea: `D:\AI\WindowsApp\created_idea_015_encode-publish-metadata-evidence-queue`
- idea ZIP: `D:\AI\WindowsApp\created_idea_015_encode-publish-metadata-evidence-queue\idea_015_encode-publish-metadata-evidence-queue.zip`
- PICKUP rank: 27
- Domain: WindowsApp
