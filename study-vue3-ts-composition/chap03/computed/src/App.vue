<script setup lang="ts">
import {ref, computed} from "vue";

// 半径の初期値を乱数で取得。
const radiusInit = Math.round(Math.random() * 10);
// 円周率のテンプレート変数を用意。
const PI = ref(3.14);
// 半径のテンプレート変数を用意。
const radius = ref(radiusInit);
// 円の面積の算出プロパティを用意。
const area = computed(
	(): number => {
		return radius.value * radius.value * PI.value;
	}
);
//アロー関数の省略系（可読性が悪いため非推奨）
// const area = computed(
// 	(): number => radius.value * radius.value * PI.value
// );

//無名関数ver.（thisの扱いが変化するため非推奨）
// const area = computed(
// 	function(): number {
// 		return radius.value * radius.value * PI.value;
// 	}
// );
// 半径のテンプレート変数に新しい乱数を1秒ごとに格納。
setInterval(
	():void => {
		radius.value = Math.round(Math.random() * 10);
	},
	1000
);
// area.value = 300; ← computedは読み取り専用。値を代入しようとするとエラーになる
</script>

<template>
	<p>半径{{radius}}の円の面積を円周率{{PI}}で計算すると、{{area}}</p>
</template>
