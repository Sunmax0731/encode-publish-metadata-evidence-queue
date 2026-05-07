export const productProfile = {
  "repository": "encode-publish-metadata-evidence-queue",
  "title": "エンコード・公開前メタデータ・証跡・処理キュー",
  "domain": "WindowsApp",
  "hostApp": null,
  "rank": 27,
  "ideaNo": 15,
  "overview": "エンコード設定、公開前メタデータ、編集・書き出しレポート、変換、字幕焼き込み、サムネイル生成を処理キュー化する。",
  "problem": "動画公開前の書き出し、説明文、証跡、再実行処理が分かれ、ミスややり直しが発生しやすい。",
  "differentiation": "編集ツール由来のメタデータを使って、公開前確認と再実行可能な処理キューをつなぐ。",
  "publish": "GitHub Release / BOOTH",
  "surface": "Windows-first CLI + queue manifest",
  "entity": "publish queue job",
  "requiredFields": [
    "id",
    "title",
    "source",
    "encodePreset",
    "metadata",
    "owner",
    "acceptance"
  ],
  "warningField": "thumbnail",
  "benchmarkRepos": [
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/git-release-publish-assistant",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
