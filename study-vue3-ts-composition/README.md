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
#### 親から子へのコンポーネント間通信
- 親からデータをもらうProps（components-props-basics）
- 親からPropsにデータを渡す方法
- 親のテンプレート変数をPropsに渡す方法（components-props-bind）
- v-forとPropsとの組み合わせ（components-props-vfor）
#### Propsの応用
- スクリプトブロックでのPropsの値の利用（components-props-indepth）
- Propsの値の利用の注意点
- Propsのデフォルト値（components-props-indepth2）
#### 子から親へのコンポーネント間通信
- 子から親への通信はイベント処理（components-emit-basics）
- 親コンポーネントにデータを渡す方法（components-emit-value）
- v-modelによる子から親への通信（components-emit-model）
- ProvideとInject（components-provinje）
- Provideの利用方法
- Injectの利用方法
- 孫コンポーネントでもInjectは同様
## 基本編：子コンポーネント利用のバリエーション（chap09）
#### 子コンポーネントをカスタマイズするSlot
- Slotとは
- Slotの基本的な記述方法（slot-basic）
- Slotのフォールバックコンテンツ（slot-fallback）
- テンプレート変数の所属先（slot-datascope）
- 親でのレンダリング結果のSlot（slot-dynamic）
#### 複数のSlotを実現する名前付きSlot
- slotタグの追加
- 名前付きslot（slot-named）
- 名前付きSlotにHTML要素を渡すv-slot
#### データの受け渡しを逆転させるスコープ付きSlot
- スコープ付きslotとは（slot-scoped）
- 子から親へデータを渡すslot Props
- slot Propsの受け取り方法
#### 動的コンポーネント
- 動的コンポーネントとは（components-dynamic）
- componentタグとv-bind:is
- KeepAliveの役割
- コンポーネントの待機
- ※書籍該当不明：コードをpropsにて子に渡し{{tag}}で表示する（components-props-tag）
## 基本編：Vue Router（chap10）
#### シングルページアプリケーション
- ルーティングとは
- サーバー再度Webアプリケーションでの処理の流れ
#### Vue Routerの基本
- Vue Routerのプロジェクト（router-basic）（初期状態：router-basic-test）
- 画面用コンポーネントを入れるviewsフォルダ
- ルーティング表示領域の設定
- ルーティング設定の基本構文
- コンポーネントの動的インポート設定
- ルーティングリンクの設定
#### ルートパラメータ
- ルートパラメータの設定
- ルートパラメータの埋め込み
- ルートパラメータをPropsとして取得
#### スクリプトブロックでのルーティング制御
- 会員情報追加画面の作成
- ルーティングを制御するRouterオブジェクト
- Routerオブジェクトの他のメソッド
#### Vue Routerのその他の機能
- スクリプトブロックでのルーティング情報の取得
- さまざまなルートパラメータ[複数パラメータ、省略可能パラメータ、可変長パラメータ、値のチェック、404 Not Found]（router-params）
- ネストされたルーティング（router-nested）
- マルチビュー（router-multiple）
- ナビゲーションカード（router-guards）
- リダイレクト（参照：router-params）
## 基本編：Pinia（chap11）
#### Piniaの基本
- Provide / Injectの問題とPinia
- Piniaプロジェクト作成（pinia-basic）
- ストアファイル内記述の基本構造
- ステートとのそのインターフェイス
- ゲッタとアクション
- コンポーネントからのストア利用
- コンポーネントからのステートとゲッタの利用
- コンポーネントからのアクションの利用
#### 引数を使う一歩進んだPiniaの利用方法
- プロジェクトの作成とファイルの複製（pinia-fundamental）
- Provideの代わりの初期リストの用意
- Injectの代わりにリストデータをストアから取得
- 引数付きのゲッタの利用
- 引数付きのゲッタの定義
- 引数付きのアクションの利用
#### アクションの応用
- 外部連携もアクションの役割
- セッションストレージからデータの取得
- セッションストレージを操作するsessitonStoregeオブジェクト
- MemberList.vueの変更
- Mapオブジェクトをセッションストレージに格納する方法
## 応用編：非同期処理（chap12）
#### 非同期処理の基本
- IndexedDBと非同期処理
- 同期処理と非同期処理の基本
- 非同期処理の基本となるasyncとpromise
- async関数でpromiseをnewしてリターンする構文
#### IndexedDB
- IndexedDBを利用したプロジェクトの準備（async-db）
- データベースオブジェクト取得処理
- オブジェクトストアの生成処理
- 「データ取得中」表示の追加
- 非同期処理を同期処理のように扱える await
- IndexedDBからデータを取得する処理
- IndexedDBへのデータ登録処理
- asyncアクション関数のコンポーネントでの利用
#### WEBアクセス
- サンプルプロジェクトの概要とWeb APIの準備
- Current Weather Dataの利用方法
- プロジェクトと第１画面の作成（async-web）
- Webアクセス以外のコードの作成
- Webアクセスコードの記述
- Webアクセスの基本はfetch()関数
- fetch()関数は async関数
- レスポンスデータの取得は Responseのメソッドを利用
- fetch()を使いやすくしたライブラリのAxios
## 応用編：ユニットテスト（chap13）
#### ユニットテストとVitest
- ユニットテストとは
- ユニットテスト対応プロジェクトの作成とVitest（utest-basic）
- ユニットテストの作成と実行
- テストスイートとテストケースの定義
- テスト可否の基本は入出力の一致
- テストを継続実行できるコマンド
- テストケースの追加
#### コンポーネントのテストの基本
- コンポーネントテスト専用ライブラリ
- コンポーネントテストの入出力
- コンポーネントテストはマウントから
- Vitestのオプション設定
- Vue Wrapperのメソッド
#### コンポーネントのテストの応用
- 要素取得のための属性（utest-input）
- 入力値の変更
- 要素が存在するかどうかのテスト（utest-trigger）
- イベントの発生
#### コンポーネント間通信のテスト
- コンポーネント間通信テストの例（utest-components）
- propsを渡す方法
- Emit実行の検証
- 子コンポーネントのスタブ利用
- 子コンポーネントからのEmitのテスト