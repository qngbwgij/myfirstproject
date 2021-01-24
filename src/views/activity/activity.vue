<template>
    <div id="activity">
      <Navigation class="activity-bar"/>

      <div class="wholediv">
        <div class="leftdiv">
          <Leftlist  @clickoneplateform="clickoneplateformex"/>
        </div>

        <div class="rightdiv">
          <rightlist :showGoods="passdata" ref="rightlist" @rightpulldown="rightpulldownex"/>
        </div>

      </div>


    </div>
</template>

<script>
    import {getAllplateform, getPlateformData} from "../../network/activity"
    import Navigation from "views/activity/childComps/navigation.vue"
    import Leftlist from "./childComps/Leftlist";
    import Rightlist from "./childComps/Rightlist";
    import {getGoodsData1} from "../../network/home";


    export default {
        name: "activity",
        data(){
            return{
              /*                goods: {
                    nvzhuang: {page: 0, list: []},
                    chaoliufang: {page: 0, list: []},
                    tehui: {page: 0, list: []}
                },*/
               //plateforms: [],
               activities: {},
               passdata: []
            }
        },
        components:{
            Navigation,
            Leftlist,
            Rightlist
        },
        methods: {
          clickoneplateformex(index){
            console.log("触发点击2")
            this.$store.commit("changeCurrentActivityPlat", index);
            this.getoneplateformdata(this.$store.state.plateforms[index])


          },
          rightpulldownex(){
            this.getoneplateformdata(this.$store.state.plateforms[this.$store.state.currentActivityplateformindex], true)
          },
          getoneplateformdata(platformn, ispulldown=false){
            console.log("触发点击3")
            if (Object.keys(this.activities).indexOf(platformn) != -1) {
              console.log("有该平台")

              if (ispulldown) {

                let page = this.activities[platformn].page + 1;

                getPlateformData(page, platformn).then(res => {

                  console.log(res.data);


                  this.activities[platformn].list.push(...res.data)
                  this.activities[platformn].page = page
                  console.log("有该平台结束")
                })

              }

               this.passdata = this.activities[platformn].list;





            }else {
              console.log("无该平台")

              let page = 1//this.goods[type].page + 1
              getPlateformData(page, platformn).then(res => {
                console.log(res.data);
                console.log("后台传来的数据1：" + res.data);
                console.log("后台传来的数据2：" + res.data.activity_name);

                console.log("platformn：" + platformn);


/*                Object.defineProperty(this.activities, platformn, {
                  value: {
                    page: 1,
                    list: res.data
                  }
                })*/

                this.activities[platformn]={
                  page: 1,
                  list: res.data
                }


                this.passdata=this.activities[platformn].list;
                console.log(platformn)
                console.log(this.passdata)

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
        created() {
            getAllplateform().then(res=>
            {
                console.log(res)
                //this.plateforms = res

              this.$store.commit("initialplateforms", res)
              //this.$store.commit("changeCurrentActivityPlat", 2)

              this.getoneplateformdata(this.$store.state.plateforms[0]);
            });

        },

    }
</script>

<style scoped>
    #activity {
        padding-top: 44px;
        height: 100vh;
        position: relative;
    }

    .activity-bar {
        background-color: var(--color-tint);
        color:#fff;


        position: absolute;
        left: 0;
        right:0;
        top: 0;
        z-index: 9;

    }


    .wholediv {
        display: flex;
/*        line-height:  calc(100% - 49px);   44px;
        height: calc(100% - 49px);*/
        /*height: 574px;*/
        text-align: center;
       /* box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);*/
        align-items: self-start;
    }

    .leftdiv {
   /*     width: 90px;*/
        flex: 1;
       /* height: calc(100%);*/
    }

    .rightdiv {
        flex: 1;
/*        height: calc(100%);
        width: calc(100%);*/
    }
</style>