<template>
  <div class="home-recommend">
    <div class="home-recommend-item" v-for="item in Adjust" :key="item.link_url">
      <a :href="item.link_url">
        <div v-if="item.image_link==='kong'" >
          更多活动
        </div>
        <img v-else :src="item.image_link" @load="finsihhomerecommendimgload" alt="">
      </a>
    </div>
  </div>


</template>

<script>
    export default {
        name: "HomeRecommend",
        data(){
          return{
            finishimgload: false
          }
        },
        props:{
            cproducts:{
                type:Array,
                default() {
                    return []
                }
            }
        },
        computed:{
             Adjust(){
               if (this.cproducts.find(item=>item.image_link==="kong")===undefined)
               {
                 this.cproducts.push({
                   image_link: "kong",
                   link_url: "javascript:;"
                 })
               }
               return this.cproducts
             }
        },
        methods:{
            // filterT4() {
            //     return this.cproducst.slice(0,4)
            // },
            finsihhomerecommendimgload(){
              if (!this.finishimgload){this.$emit("finsihhomerecommendimgload")}
              this.finishimgload = true
            }
        }
    }
</script>

<style scoped>
  .home-recommend{
    display: flex;
    width: 100%;
    text-align: center;
    padding: 5px;
    border-bottom: 10px solid #eee;
    align-items: center;
  }

  .home-recommend-item{
    flex: 1;
   /* text-align: center;*/
  }

  .home-recommend-item img{
    width: 100%;
    height: 100%;

    /*border-radius: 100%;*/

  }

  .home-recommend-item div {
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 100%;
    font-weight: bolder;
  }

    /*

    font-size: 15px;
    margin-left: 5px;
    margin-right: 5px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    background: #fff;
    transform: translateX(1%);
    height: 15px;
    width: 70px;
    white-space: pre-line;

  font-size: 2rem;
  text-transform: uppercase;
  color: line;
  font-weight: 600;
  font-size: 1.8rem;
  font-family: Arial;
  line-height: 0.833;
  letter-spacing: 10px;


    border-radius: 100%;*/

  @keyframes move {
    0% {background-position: 0 0;}
    100% {
      /*宽度固定，如果为百分比背景不会滚动*/
      background-position: -300px 0;
    }
  }


  .home-recommend-item div{

    /*设置背景渐变色*/
    background-image: linear-gradient(to right, red, orange, yellow, green, yellow, orange, red, orange,yellow, green, yellow, orange, red);
    /*chrome私有样式，加前缀，文字显示背景图片*/
    -webkit-background-clip: text;
    animation: move 100s infinite;
    /*文字颜色设为透明*/
    color: transparent;
    /*宽度固定*/

  }


</style>
