//composables ディレクトリ
//composable な関数を含むファイルを保存すると
//コンポーネントから import することなく(Auto imports)利用でる。
//composables な関数は reactive な変数とロジックを
//コンポーネントから切り離して再利用できるようにした関数

//composables な関数には ref 関数で定義された reactive な変数と
//ロジックのみが含まれる
export function useCounter(initialValue: number) {
  const count = ref(initialValue);
  const inc = () => (count.value = count.value + 1);
  const dec = () => (count.value = count.value - 1);
  return {
    count,
    inc,
    dec,
  };
}