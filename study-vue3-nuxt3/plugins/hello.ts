//plugins ディレクトリ
//プラグインファイルを作成するとアプケーションの起動時に
//Nuxt が作成したプラグインを自動で登録を行ってくれる(登録作業が不要)
//コンポーネントから利用できる

//引数 msg を受け取り、Hello と受け取った引数を表示する
export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello(msg: string) {
        return `Hello ${msg}!`;
      },
    },
  };
});