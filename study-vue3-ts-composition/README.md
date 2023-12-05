# 参考書：Vue3フロントエンド開発の教科書
<img src="images/images01.jpg" alt="attach:cat" title="attach:cat" width="200" height="253">

## 導入編：ViteとVueプロジェクト（chap02）
#### Vueプロジェクトの作成と実行（hello-vue）

## 導入編：Vueプログラミングの基本（chap03）
#### Vueのコンポーネントと基本構文（mustache）
#### リアクティブシステム（reactive-system）
#### リアクティブデータ用意のバリエーション
- 計算結果をリアクティブにする（computed）
- refのオブジェクトをまとめてリアクティブにする（reactive-function）

## 基本編：データとイベントのディレクティブ（chap04）
#### データバインディングのディレクティブ
- 属性にデータバインドする v-bind（directive-bind-basic）
- 属性値のない属性へのバインド（directive-bind-boolean）
- バインドする属性をテンプレート変数として指定（directive-bind-dynamic）
- 複数の属性にまとめてバインドする方法（directive-bind-object）
- style属性へのバインディング（directive-style）
- class属性へのバインディング（directive-class）

#### イベントのディレクティブ
- イベントリスナを設定するディレクティブ v-on（directive-on-basic）
- メソッドの引数としてイベントオブジェクトを受け取る（directive-on-param-event）
- イベントオブジェクト以外を引数とするイベントハンドラメソッド（directive-on-param-others）
- イベントオブジェクトとその他の引数を併用するイベントハンドラメソッド（directive-on-param-both）
- v-onの装飾子.prevent（directive-on-prevent）
- クリックイベントとキーイベントの装飾子（directive-on-modifiers）

## 基本編：双方向データバインディングとその他のディレクティブ（chap05）
#### 双方向データバインディング
- 双方向データバインディングを実現するv-model（directive-model）
- 片方向のデータバインディング（directive-oneway）
- v-bindとv-on:inputの組み合わせ（directive-twoway）
- 文字入力以外のコントロールでのv-model（directive-model-controls）
- v-modelの装飾子（directive-model-trim）
#### その他のデータバインディングのディレクティブ
- HTML文字列をそのまま表示するv-html（directive-html）
- 静的コンテンツとして表示させるv-pre（directive-pre）
- データバインドを一度だけ行う（directive-once）
- レンダリング終了までマスタッシュ構文を非表示にするv-cloak（directive-cloak）

## 基本編：制御のディレクティブ（chap06）
#### 条件分岐のディレクティブ
- 条件分岐ディレクティブの基本 v-if（directive-conditional-basic）
- 条件分岐ディレクティブをフルセットで利用した場合 v-else-if, v-else（directive-conditional-full）
- ディレクティブ記述のためのタグ template（directive-conditional-template）
- v-ifと似て非なる v-show（directive-show）
#### ループのディレクトリ
- ループのディレクティブである v-for（directive-loop-basic）
- 連想配列のループ（directive-loop-associative）
- Mapのループ（directive-loop-map）
- オブジェクトのループ（directive-loop-obj）
- オブジェクトの配列のループ（directive-loop-arrayobj）
- Mapとオブジェクトの組み合わせのループ（directive-loop-mapobj）
- カウンタ変数を利用したループ（directive-loop-range）
#### リスト操作
- ループ対象データの絞り込み（listchange-filter）
- 配列データの操作（listchange-array）
- Mapデータの操作（listchange-map）
- オブジェクト内のデータ変更（listchange-obj）
- リストデータ内のオブジェクト変更（listchange-mapobj）

## 基本編：スクリプトブロックのバリエーション（chap07）
#### ウォッチャー
- 算出プロパティの役割（change-cocktail）
- リアクティブ変数の変化を監視する watchEffect（watcheffect）
- 監視対象を明示するwatch（watch）
- 即時実行のwatch()（watch-immediate）
- watch()における変更前後の値の利用（watch-oldnew）
#### ライフサイクルフック
- ライフサイクルフックの具体例（lifecycle-hooks）
#### script setupの本当の姿
- defineComponetとsetup（change-cocktail2）
- setupとreactiveとtoRefs（reactive-function2）
#### Options API
- Options APIの基本構文（optionsapi）
- Options APIでのライフサイクルフック
- Options APIでのウォッチャー（optionsapi-watch）
## 基本編：コンポーネント間連携（chap08）
#### 子コンポーネントの利用
- コンポーネントの作り方（components-basics）
- 子コンポーネントの利用方法
#### コンポーネントの独立性とcssの扱い
- 処理が含まれたコンポーネントを埋め込む（components-vmodel）
- コンポーネント内の処理はコンポーネント内で完結
- スタイルブロックを独立させるscoped属性
- scoped　CSSのカラクリ
