<template>
  <div class="goods-item">
    <a :href="goodItem.link_url">
    <img :src="goodItem.image_link" @load="activityimgfinishload" alt="">
    <div class="goods-info">
      <p >{{goodItem.activity_name}}</p>
 <!--     <span class="price">{{goodItem.zk_final_price}}元</span>-->
      <img v-if="goodItem.isofficialRecom==='1'"
           :src="goodItem.isofficialRecomimgurl"
      >
      <span class="collect">{{goodItem.whichplateform}}</span>
    </div>
    </a>
  </div>

</template>

<script>
    export default {
        name: "ActivityListItem",
        props:{
            goodItem: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods:{
          activityimgfinishload(){
            this.$bus.$emit("activityimgfinishload")
          }
        }
    }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
    border:3px solid var(--color-tint);
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
  }

</style>
