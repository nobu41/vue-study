//ボイス一覧およびお気に入り処理
var app = new Vue({
    el: '#app',
    data() {
        return {
            isLs: false,
            favs: [],
            data: [{
                    id: 1,
                    name: 'youseinokaze',
                    ganame: 'newm-youseinokaze',
                    detail: 'ようせいのかぜ！',
                    newflag: 0
                },
                {
                    id: 2,
                    name: 'serenayo',
                    ganame: 'newm-',
                    detail: '私はセレナ！',
                    newflag: 0
                },
                {
                    id: 3,
                    name: 'sukidana',
                    ganame: 'newm-',
                    detail: '好きだなぁ',
                    newflag: 0
                },
                {
                    id: 4,
                    name: 'doushitano',
                    ganame: 'newm-',
                    detail: 'どうしたの？',
                    newflag: 0
                },
                {
                    id: 5,
                    name: 'wakaranai',
                    ganame: 'newm-',
                    detail: '分からないけど…',
                    newflag: 0
                }, {
                    id: 6,
                    name: 'finish',
                    ganame: 'newm-',
                    detail: 'フィニーッシュ！',
                    newflag: 0
                }, {
                    id: 7,
                    name: 'mochiron',
                    ganame: 'newm-',
                    detail: 'もちろん！',
                    newflag: 0
                }, {
                    id: 8,
                    name: 'zyazyan',
                    ganame: 'newm-',
                    detail: 'じゃじゃ～ん！',
                    newflag: 0
                }, {
                    id: 9,
                    name: 'satoshi',
                    ganame: 'newm-',
                    detail: 'サトシ！',
                    newflag: 0
                },
                {
                    id: 10,
                    name: 'genki',
                    ganame: 'newm-',
                    detail: 'メッチャ元気！',
                    newflag: 0
                },
                {
                    id: 11,
                    name: 'ganbaru',
                    detail: 'がんばる！',
                    newflag: 0
                }
            ]


        }
    },
    computed: {

        //お気に入り登録済みかどうか判定
        isFavs() {
            var vm = this;
            return function (id) {
                var index = vm.favs.findIndex(function (val) {
                    return val.id == id;
                })
                if (index === -1) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    },
    mounted() {
        var vm = this;
        vm.init(); //localStrageが使えるかどうかの判定
        if (vm.isLs) {

            //保存済みのlocalStrageを読み込む
            var current = window.localStorage.getItem('favs');
            if (current) {
                vm.$set(vm, 'favs', JSON.parse(current))
            }
        }
    },

    methods: {
        init() {
            var vm = this;
            if (typeof window.localStorage !== 'undefined') {
                vm.$set(vm, 'isLs', true)
            }
        },
        toggleFavs($event, id) {
            var vm = this;
            //お気に入り対象がどの物件か抽出
            var index = vm.data.findIndex(function (val) {
                return val.id == id;
            });
            var target = vm.data[index];

            //既に登録済みか判定
            var index = vm.favs.findIndex(function (val) {
                return val.id == target.id;
            })
            //見つからなければ新規登録
            if (index === -1) {
                vm.favs.unshift(target)
            } else {
                //見つかれば削除
                vm.favs.splice(index, 1);
            }

            //localStrageに保存
            window.localStorage.setItem('favs', JSON.stringify(vm.favs));
        }
    }
});

var app2 = new Vue({
  el: '#app2',
  data() {
      return {
          isLs: false,
          favs: [],
      }
  },
  mounted() {
      var vm = this;
      vm.init(); //localStrageが使えるかどうかの判定
      if (vm.isLs) {

          //保存済みのlocalStrageを読み込む
          var current = window.localStorage.getItem('favs');
          if (current) {
              vm.$set(vm, 'favs', JSON.parse(current))
          }
      }
  },

  methods: {
      init() {
          var vm = this;
          if (typeof window.localStorage !== 'undefined') {
              vm.$set(vm, 'isLs', true)
          }
      }
  }
})