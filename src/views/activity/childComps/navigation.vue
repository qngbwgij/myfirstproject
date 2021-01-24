<template>
    <form @submit="submitevent" action="searchresults">

    <nav-bar>

        <div slot="left" class="leftglass">

        </div>


        <input  ref="searchcon"
                type="search"
               slot="center"
               class="searchtext"
               style="border:0.5px solid #378888"
                name="searchba"

                :value="searchcontent"
               @input="searchchange"

               placeholder="请输入活动名称"
        />

        <input  type="submit"
                value="搜索"
                slot="right"
                class="searchbutton"
                v-show="showbutton"
                @click="buttonclick"

        >

    </nav-bar>

    </form>


</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "navigation",
        data(){
            return{
                showbutton: false,
                searchcontent: ""
            }
        },
        props: {
          isemitsubmit: {
              type: Boolean,
              default: false

          }
        },
        computed:{
            searchresults_url(){
                // return {
                //     path: "/searchresults",
                //     query: {
                //         searchba: this.searchcontent
                //     }
                // }
                let passurl="searchresults/" + this.searchcontent;
                console.log("passurl:" + passurl)
                return passurl
           }
        },
        methods: {
            submitevent(e) {
                //e.preventDefault()
                e.stopPropagation()
                console.log("submitevent");
            },
            searchchange(event) {
                this.searchcontent = event.target.value

                // console.log("searchchange");
                // console.log(this.$refs.searchcon);
                //console.log(this.$refs.searchcon.$el);
                // console.log(this.$refs.searchcon.nodeValue);
                // console.log(this.$refs.searchcon.values);
                //console.log(this.$refs.searchcon.textContent);

                //let ele=this.$refs.searchcon.getElementsByClassName("searchtext")

                // let ele = document.getElementById("navigation-search-input").value;
                // console.log(ele);

                if (this.searchcontent.trim() === "") {
                    this.showbutton = false
                    console.log("searchchange false");
                } else {
                    this.showbutton = true
                    console.log("searchchange true");
                }
            },


            buttonclick() {

                console.log("开始buttonclick");

                this.showbutton = false

                this.$router.push({
                    path: "/searchresults",
                    query: {
                        searchba: this.searchcontent
                    }
                })

                //this.$router.push(this.searchresults_url)

                if (this.isemitsubmit) {
                    this.$emit("isemitsubmit")
                    // }

                    console.log("结束buttonclick");
                }

            }
        },
        created() {
            this.searchcontent=this.$route.query.searchba
            //this.searchcontent=this.$route.params.searchba
        },
        components: {
            NavBar
        }
    }
</script>

<style scoped>
    .leftglass{
        background:url(~assets/images/common/magnifier.jpg) no-repeat;
        background-size:50% 40%;
        background-position: center;
        width: 40px;
        height: 44px;
        margin:0 auto; /*设置div居中显bai示*/
    }

    .searchtext{
        width: 100%;
        height: 100%;
    }

    .searchbutton{
        background-color: #d43e2e;
        color: white;
    }


</style>