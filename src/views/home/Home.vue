<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
<!-- ref 是用于定位元素和取到组件的内容，:是绑定属性 @是绑定方法-->


    <tab-control
            ref="tbcontrol0"
            class="home-tab-control1"
            v-show="showtype"
            :ctitles="['女装', '潮流范', '特惠']"
            @tabClick="pTabClick"/>

    <scroller class="home-scroller"
              ref="scroller"
              :probe-type="3"
              @scroll="getPostion"
              @pullingUptobottom="pullingUptobottom">

      <home-swiper :cbanners="filterT1" @finishfinishimaload="finisfinishimaload"/>
      <home-recommend :cproducts="filterT2" @finsihhomerecommendimgload="finsihhomerecommendimgload" />
      <home-feature-view/>
      <tab-control
              ref="tbcontrol"
              class="home-tab-control"
              v-show="!showtype"
              :ctitles="['女装', '潮流范', '特惠']"
              @tabClick="pTabClick"/>
      <goods-list :cgoods="showGoods"
                  :componentna="GoodListItemCom"
      />

    </scroller>

    <back-top @click.native="backTopClick" v-show="isShowBackTop" />

  </div>
</template>

<script>
   import {mixin} from "@/mixin/Mixin.js";


    //此处必须加{}，因为这里想导入的并不是default打头的类，而一个真实名字也叫mapState的函数
    import {mapState} from "vuex";

    import {mapGetters} from "vuex";
    import GoodListItem from "components/contents/good/GoodListItem";
    import NavBar from "components/common/navbar/NavBar";
    import HomeSwiper from "./childComps/HomeSwiper";
    import HomeRecommend from "./childComps/HomeRecommend";
    import HomeFeatureView from "./childComps/HomeFeatureView";
    import TabControl from "components/contents/tabControl/TabControl";
    import GoodsList from "components/contents/good/GoodsList";
    import Scroller from "components/common/scroller/Scroller";
    import BackTop from "components/contents/backTop/BackTop";

    import {getHomeMultiData, getGoodsData} from "network/home";
    import {getBkDgOptimusMaterial, getGoodsData1} from "../../network/home";

    export default {
        name: "Home",
      mixins: [mixin],
      components:{
            NavBar,
            HomeSwiper,
            HomeRecommend,
            HomeFeatureView,
            TabControl,
            GoodsList,
            Scroller,
            BackTop,
            GoodListItem
        },

        data() {
          return {
            GoodListItemCom: GoodListItem,
            wholeactivities: [],
            banners: [],
            products: [],
            goods:{
              nvzhuang:{page:0, list:[]},
              chaoliufang:{page:0, list:[]},
              tehui:{page:0, list:[]}
            },
            currentType:"nvzhuang",
            isShowBackTop: false,
            typemaps:{
              nvzhuang: "13367",
              chaoliufang: "4093",
              tehui: "4094"
            },
            showtype: false,
            tabctroffsetTop: 0
          }
        },
    //这样也是可以的，不过会被后面的computed覆盖，这里定义的计算属性就全变为undefined
      computed: mapState({
        'allplatefwwww': 'plateforms',
                   allwwst(state){
      return state.globalconfig + this.showtype
    }
    }),



        computed: {
          //...叫做对象展开运算符,mapState函数返回的是一个对象，不使用展开运算符就要像上面那样定义
          ...mapState({
            'allplatef': 'plateforms',
            'currtindex': 'currentActivityplateformindex',
            allst(state){
              return state.globalconfig + this.showtype
            }
          }),


          ...mapState([
            'plateforms',
            'currentActivityplateformindex'
          ]),

          ...mapGetters({
            'testmapgetters': 'showcount2'
          }),

          showGoods() {
                return this.goods[this.currentType].list
            },
          filterT1() {
            return this.wholeactivities.slice(0, this.$store.getters.showcount1)
          },
          filterT2() {
            return this.wholeactivities.slice(this.$store.getters.showcount1, this.$store.getters.showcount2end)
          },
        },


        created() {
            console.log("home初始化时" + this.allwwst)
          console.log("home初始化时" + this.allst)
          console.log("home初始化时" + this.plateforms)//testmapgetters
          console.log("home初始化时testmapgetters：")//testmapgetters
          console.log(this.testmapgetters)//testmapgetters

            this.getHomeData()
            this.getJinRiBaoKData()

            this.getHomeGoodsData('nvzhuang')
            this.getHomeGoodsData('chaoliufang')
            this.getHomeGoodsData('tehui')
        },
        mounted() {
          console.log("mounted初始化时")
          this.$bus.$on("imgfinishload", ()=>this.$refs.scroller.scroller.refresh())
          console.log("mounted结束时")
        },
      methods:{
            finsihhomerecommendimgload(){
              this.tabctroffsetTop = this.$refs.tbcontrol.$el.offsetTop
            },
            finisfinishimaload(){
              //console.log("开始传过来的finishimglo");
              this.tabctroffsetTop = this.$refs.tbcontrol.$el.offsetTop
              //console.log("开始传过来的finishimglo");
            },
            pTabClick(index) {
                //console.log(this.currentType + "索引为" + index);
                switch (index) {
                  case 0:
                      this.currentType = 'nvzhuang'
                      break
                  case 1:
                      this.currentType = 'chaoliufang'
                      break
                  case 2:
                      this.currentType = 'tehui'
                      break
                }
                //console.log(this.currentType + "索引为" + index);
                this.$refs.tbcontrol.currentIndex = index;
                this.$refs.tbcontrol0.currentIndex = index;
            },
            getHomeData() {
                getHomeMultiData().then(res => {
                    this.wholeactivities = res.data
                    //console.log(typeof this.banners  + res)
                    //this.products = res.data.products
               })
            },
           getJinRiBaoKData() {
             getBkDgOptimusMaterial().then(res => {
               //this.banners = res.data
               //console.log(typeof this.banners  + res)
               this.products = res.tbk_dg_optimus_material_response.result_list.map_data
             })
           },
            getHomeGoodsData(type) {
                let page = this.goods[type].page + 1
                getGoodsData1(this.typemaps[type], page).then(res => {
                    this.goods[type].list.push(...res.tbk_dg_optimus_material_response.result_list.map_data)
                    this.goods[type].page = page
                })
            },
            backTopClick() {
                // 通过$refs拿到组件中的对象
                this.$refs.scroller.scrollTo(0, 0, 500)
            },
            getPostion(postion) {
                //console.log(this.showtype + "offsetTop为"+this.tabctroffsetTop)
                this.isShowBackTop = -postion.y > 300
                this.showtype = -postion.y > this.tabctroffsetTop
            },
            pullingUptobottom(){
                //.log("传过来的pullingUp开始" + this.currentType);
                this.getHomeGoodsData(this.currentType)
                //console.log("传过来的pullingUp开始" + this.currentType);
            }
        }
    }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  .home-nav-bar {
    background-color: var(--color-tint);
    color:#fff;


    position: absolute;
    left: 0;
    right:0;
    top: 0;
    z-index: 9;

  }

  .home-tab-control{
    /*两个要混合使用*/
    position: sticky;
    top: 43px;/*顶部navbar的高度*/
    z-index: 9;
  }
  .home-tab-control1{
    /*两个要混合使用*/
    position: fixed;
    left: 0;
    top: 44px;
    right: 0;
    z-index: 9;
  }

  .home-scroller{
    /*height:300px;*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }



</style>
