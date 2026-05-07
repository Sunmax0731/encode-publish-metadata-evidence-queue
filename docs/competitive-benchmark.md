# Competitive Benchmark

## 比較対象

- HandBrake queue
- Adobe Media Encoder
- YouTube Studio upload checklist

## 採用する評価基準

- 入力から検証、証跡、再実行までが1つの流れであること。
- 手動確認が必要な項目を warning として残せること。
- 公開前に docs、release checklist、security/privacy を確認できること。
- 編集ツール由来のメタデータを使って、公開前確認と再実行可能な処理キューをつなぐ。

## 差別化

この repo は Windows-first CLI + queue manifest に閉じた最小実装だけでなく、QCDS、traceability、manual test、docs ZIP を含めた公開前の運用品質を製品の一部として扱う。
