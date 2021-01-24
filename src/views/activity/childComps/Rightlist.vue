<template>

    <scroller class="activity-scroller"
              ref="scroller"
              :probe-type="3"
              @scroll="getPostion"
              @pullingUptobottom="pullingUptobottom"

    >
        <goods-list :cgoods="showGoods"
                    :componentna="ActivityListItemCom"
        />
    </scroller>

<!--    <div>
        <div v-for="(item, index) in platefs">
            {{item}}-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;{{index}}
        </div>
    </div>-->

</template>

<script>
    import ActivityListItem from "components/contents/good/ActivityListItem";
    import Scroller from "components/common/scroller/Scroller";
    import GoodsList from "components/contents/good/GoodsList";
    export default {
        name: "Rightlist",
        data(){
            return{
/*                goods: {
                    nvzhuang: {page: 0, list: []},
                    chaoliufang: {page: 0, list: []},
                    tehui: {page: 0, list: []}
                },*/
                ActivityListItemCom: ActivityListItem,


            }
        },

        computed:{
            /*platefs(){
                return this.$store.state.plateforms;
            },
            currenindex(){
                return this.$store.state.currentActivityplateformindex;
            },
            oneplateformdata(){
                console.log("开始oneplateformdata")
                console.log(this.showGoods)
                console.log(Object.keys(this.showGoods).length)
                console.log(this.platefs)
                console.log(this.platefs.length)
                console.log(this.currenindex)

                console.log("结束oneplateformdata")

                let a=this.currenindex
                console.log(a)
                let b=this.platefs[a]
                console.log(b + typeof b)


                let c=this.showGoods[b]
                console.log(c)

/!*                let d=this.showGoods(b)
                console.log(d)*!/

                let e=this.showGoods.b
                console.log(e)

                let tete={
                    taobao:{
                        page: 1,
                        list: {}
                    }

                }
                let f=tete["taobao"]
                console.log("特殊开始")
                console.log(f + Object.keys(tete).length)


                let tete1={
                    淘宝:{
                        page: 1,
                        list: {}
                    }

                }
                let g=tete1["淘宝"]
                console.log(g + Object.keys(tete1).length)
                console.log("特殊结束")





                let cgoodsarrayobj=this.showGoods[this.platefs[this.currenindex]];

                console.log(cgoodsarrayobj)

                if (cgoodsarrayobj!=undefined){
                    console.log(cgoodsarrayobj.list)
                    return cgoodsarrayobj.list;
                }else {
                    console.log("cgoodsarrayobj.list不存在")
                    return [];
                }

            }*/
        },
        props: {
            showGoods: {
                type: Array,
                default(){
                    return []
                }
            },

        },
        methods:{
            getPostion(iposition){
                console.log("getPostion: " + iposition)
            },
            pullingUptobottom(){
                console.log("pullingUptobottom")
                this.$emit("rightpulldown")
            }
        },
        mounted() {
            this.$bus.$on("activityimgfinishload", ()=>{
/*                console.log("收到消息：activityimgfinishload")
                console.log(this.$refs.scroller)
                console.log(this.$refs.scroller.scroller)
                console.log(this.$refs.scroller.scroller.refresh)*/
                this.$refs&&this.$refs.scroller&&this.$refs.scroller.scroller&&this.$refs.scroller.scroller.refresh()

            })


            //this.$bus.$on("activityimgfinishload", this.$refs.scroller.scroller.refresh)
            /*console.log("第一次开始")
            console.log(this.platefs)
            console.log(this.currenindex)
            console.log("第一次结束")

            this.$nextTick(()=>{
                console.log("第二次开始")
                console.log(this.platefs)
                console.log(this.currenindex)
                console.log("第二次结束")

                this.$nextTick(()=>{
                    console.log("第三次开始")
                    console.log(this.platefs)
                    console.log(this.currenindex)
                    console.log("第三次结束")

                    this.$nextTick(()=>{
                        console.log("第四次开始")
                        console.log(this.platefs)
                        console.log(this.currenindex)
                        console.log(this.$store.state.globalconfig)
                        console.log(this.$store.state.plateforms)
                        console.log("第四次结束")
                    })
                })
            })*/
            //this.$bus.$emit("activityimgfinishload")
        },
        components:{
            ActivityListItem,
            Scroller,
            GoodsList
        }
    }
</script>

<style scoped>

    .activity-scroller{
        /*height:300px;*/
        overflow: hidden;
        position: fixed;
        top: 44px;
        left: 64px;
        bottom: 49px;
        right: 0;
    }

/*    .leftlistscroll{
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
    }*/
</style>