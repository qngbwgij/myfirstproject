<template>
    <scroll ref="sc" class="leftlistscroll">
        <div v-for="(item, index) in platefs"
             class="divitem"
             :class="{hotitem: Currentplateforminx===index, platefsitem: Currentplateforminx!=index}"
             @click="itemclick(index)"
        >
            {{item}}
        </div>
    </scroll>
</template>

<script>
    import Scroll from "components/common/scroller/Scroller.vue"
    export default {
        name: "Leftlist",
/*        data(){
            return {
                platefs: 0
            }
        },*/
/*        props:{
            platefs:{
                type: Array,
                default(){
                    return []
                }
            }
        },*/
        methods:{
            itemclick(index){
                console.log("触发点击1")
                this.$emit("clickoneplateform", index)

              //this.currentindex = index
                //    this.$store.commit("addglobalconfig", res);
            }
        },
        computed: {
            currenindex(){
                return this.$store.state.currentActivityplateformindex;
            },
            Currentplateforminx(){
               return this.$store.state.currentActivityplateformindex;
            },
            platefs(){
                return this.$store.state.plateforms;
            }
/*           test(){
/!*               var testarray = [];
               testarray.push(...this.platefs);
               testarray.push(...this.platefs);
               testarray.push(...this.platefs);
               return testarray;*!/
               return this.platefs;
           }*/

        },
        components: {
            Scroll
        },
        mounted() {
            console.log("第一次开始left")
            console.log(this.platefs)
            console.log(this.currenindex)
            console.log("第一次结束left")

            this.$nextTick(()=>{
                console.log("第二次开始left")
                console.log(this.platefs)
                console.log(this.currenindex)
                console.log("第二次结束left")

                this.$nextTick(()=>{
                    console.log("第三次开始left")
                    console.log(this.platefs)
                    console.log(this.currenindex)
                    console.log("第三次结束left")

                    this.$nextTick(()=>{
                        console.log("第四次开始left")
                        console.log(this.platefs)
                        console.log(this.currenindex)
                        console.log(this.$store.state.globalconfig)
                        console.log(this.$store.state.plateforms)
                        console.log("第四次结束left")
                    })
                })
            })
        },
        updated() {
            this.$nextTick(()=>
                this.$nextTick(()=>
                    this.$nextTick(()=>
                        this.$nextTick(()=>{
                            this.$refs.sc.scroller.refresh()
                            console.log("updated2")
                        })
                    )
                )
            );
            console.log("updated1")
        }
    }
</script>

<style scoped>
    .leftlistscroll{
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
    }
    .divitem{
        text-align: center;
        line-height: 50px;
    }
    .platefsitem{

        background-color: #eeeeee;
    }
    .hotitem{
        height: 50px;
        background-color: white;
        color: #ff5777;
    }
</style>