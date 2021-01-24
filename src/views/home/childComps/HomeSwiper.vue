<template>
  <swiper class="home-swiper">
    <swiper-item v-for="item in cbanners" :key="item.link_url">
      <a :href="item.link_url">
        <img :src="item.image_link" @load="finishimglo" class="swiperitemimg" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from 'components/common/swiper';
    export default {
        name: "HomeSwiper",
        data(){
           return{
             finishimaload: false
           }
        },
        props: {
            cbanners:{
                type:Array,
                default() {
                    return []
                }
            }
        },
        components:{
            Swiper,SwiperItem
        },
        methods:{
          finishimglo(){
            //console.log("开始finishimglo")
            if (!this.finishimaload){this.$emit("finishfinishimaload")}
            this.finishimaload = true
            //console.log("结束finishimglo");
          }
        }
    }
</script>

<style scoped>
.swiperitemimg{
  height: 180px;
}

</style>
