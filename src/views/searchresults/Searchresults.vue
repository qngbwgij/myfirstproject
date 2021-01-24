<template>

    <div id="searchresults">
        <div class="search-title">

            <img src="~assets/images/common/back.svg" @click="backactivity" alt="">

            <span>{{searchba}}-活动搜索结果  </span>


<!--            <span><button @click="testtoast">测试toast </button></span>-->
            <!--<div class="divtofill"></div>-->

        </div>

        <Navigation class="activity-bar" :isemitsubmit="isemitsubmitornot" @isemitsubmit="isemitsubmitex"/>

    <scroller class="activity-scroller"
              ref="searchscroller"
              :probe-type="3"
              @scroll="getPostion"
              @pullingUptobottom="pullingUptobottom"

    >
        <goods-list :cgoods="passdata"
                    :componentna="ActivityListItemCom"
        />

    </scroller>


    </div>
</template>

<script>
    import Navigation from "views/activity/childComps/navigation.vue"
    import ActivityListItem from "components/contents/good/ActivityListItem";
    import Scroller from "components/common/scroller/Scroller";
    import GoodsList from "components/contents/good/GoodsList";
    import {getPlateformData} from "../../network/activity";

    export default {
        name: "Searchresults",
        data(){
            return{
                /*                goods: {
                                    nvzhuang: {page: 0, list: []},
                                    chaoliufang: {page: 0, list: []},
                                    tehui: {page: 0, list: []}
                                },*/
                ActivityListItemCom: ActivityListItem,
                searchress: {},
                searchba:"",
                passdata: [],
                isemitsubmitornot: true


            }
        },
        methods:{
            // testtoast(){
            //     console.log("开始测试");
            //     this.$toast.show("测试结果", 3000)
            // },
            backactivity(){
                this.$router.replace("/activity")
            },
            isemitsubmitex(){
                console.log(this.$route.query.searchba)
                this.searchba = this.$route.query.searchba
                console.log("收到子组件发射过来的事件: this.searchba: " + this.searchba)
                this.getoneplateformdata(this.searchba)
            },
            getPostion(iposition){
                console.log("getPostion: " + iposition)
            },
            pullingUptobottom(){
                console.log("pullingUptobottom")
                this.getoneplateformdata(this.searchba, true)
                //this.$emit("rightpulldown")
            },
            getoneplateformdata(serachba, ispulldown=false){
                console.log("进入getoneplateformdata")
                if (Object.keys(this.searchress).indexOf(serachba) != -1) {
                    console.log("有该平台")

                    if (ispulldown) {

                        let page = this.searchress[serachba].page + 1;

                        getPlateformData(page, "", serachba).then(res => {
                            console.log("下拉时后台传来的数据");
                            console.log(res.data);


                            this.searchress[serachba].list.push(...res.data)
                            this.searchress[serachba].page = page
                            //console.log("有该平台结束")
                        })

                    }

                    this.passdata = this.searchress[serachba].list;





                }else {
                    console.log("无该平台")

                    let page = 1//this.goods[type].page + 1
                    getPlateformData(page, "", serachba).then(res => {
                         console.log("serachba为"+ serachba);
                         console.log("后台传来的数据1：" + res.data);
                        // console.log("后台传来的数据2：" + res.data.activity_name);
                        //
                        // console.log("platformn：" + platformn);


                        /*                Object.defineProperty(this.activities, platformn, {
                                          value: {
                                            page: 1,
                                            list: res.data
                                          }
                                        })*/

                        this.searchress[serachba]={
                            page: 1,
                            list: res.data
                        }


                        this.passdata=this.searchress[serachba].list;
                        // console.log(platformn)
                        // console.log(this.passdata)

                        // let abcd=this.activities;
                        // this.activities=abcd;
                        // this.$refs.rightlist.$forceUpdate()
                        //
                        // console.log(this.activities)
                        // console.log("结果为：" + this.activities)
                        //
                        // console.log("无该平台结束")
                        //
                        // this.$nextTick(()=>{
                        //   this.$nextTick(()=>{
                        //     this.$nextTick(()=>{
                        //       this.$nextTick(()=>{
                        //         this.$nextTick(()=>{
                        //           this.$forceUpdate()
                        //
                        //
                        //
                        //
                        //           console.log(this.$refs.rightlist.oneplateformdata)
                        //           console.log(Object.keys(this.$refs.rightlist.showGoods).length)
                        //           //this.$refs.rightlist.$forceUpdate()
                        //
                        //           setTimeout(()=>{
                        //             console.log("若干时间后")
                        //             console.log(this.activities)
                        //             console.log(this.$refs.rightlist.showGoods)
                        //
                        //             let abc=this.$refs.rightlist.showGoods["淘宝"].list
                        //             console.log("abc：")
                        //             console.log(abc)
                        //
                        //
                        //             // this.activities={
                        //             //   淘宝:{
                        //             //     page: 1,
                        //             //     list: abc
                        //             //   }
                        //             // }
                        //             console.log(this.$refs.rightlist.oneplateformdata)
                        //             console.log(Object.keys(this.$refs.rightlist.showGoods).length)
                        //             //this.$refs.rightlist.$forceUpdate()
                        //
                        //           },5000)
                        //
                        //         })
                        //
                        //       })
                        //
                        //     })
                        //
                        //   })
                        //
                        // })





                        // this.goods[type].list.push(...res.tbk_dg_optimus_material_response.result_list.map_data)
                        // this.goods[type].page = page
                    })

                }
            }
        },
        activated() {
            console.log("activated")

            // this.searchba = this.$route.query.searchba
            //
            // //this.searchba = this.$route.params.searchba
            // console.log("activated: this.searchba: " + this.searchba)
            // this.getoneplateformdata(this.searchba)
        },
        deactivated() {
            console.log("deactivated")
        },
        created() {

            //console.log(this.$route.query.searchba)
            this.searchba = this.$route.query.searchba

            //this.searchba = this.$route.params.searchba
            console.log("created: this.searchba: " + this.searchba)
            this.getoneplateformdata(this.searchba)



        },
        destroyed() {
            console.log("destroyed")
        },
        mounted() {
            this.$bus.$on("activityimgfinishload", ()=>{
                /*                console.log("收到消息：activityimgfinishload")
                                console.log(this.$refs.scroller)
                                console.log(this.$refs.scroller.scroller)
                                console.log(this.$refs.scroller.scroller.refresh)*/
                this.$refs&&this.$refs.searchscroller&&this.$refs.searchscroller.scroller&&this.$refs.searchscroller.scroller.refresh()

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
            GoodsList,
            Navigation
        }
    }
</script>

<style scoped>
    .search-title{
       /* line-height: 44px;*/
        align-items: center;
        margin: 0px auto;
        height: 44px;
    }

    .search-title span{
        position: absolute;
        padding: 0;
        margin: 0px auto;
        top: 0;
        left: 30vw;
        font-size: 20px;
        top: 10px;
    }

    .search-title img{
        position: relative;
        width: 20px;
        top: 10px;
        padding: 0;
        border: 0px;
        margin: 0px auto;
    }

/*
    .search-title div{
        position: relative;
        height: 44px;
    }
*/

    .activity-scroller{
        /*height:300px;*/
        overflow: hidden;
        position: absolute;
        top: 88px;

        /*bottom: 49px;*/
        bottom: 0;
        right: 0;
        z-index: 9999;
        background-color: white;
    }

    /*    .leftlistscroll{
            overflow: hidden;
            position: absolute;
            top: 44px;
            bottom: 49px;
            left: 0;
        }*/

</style>