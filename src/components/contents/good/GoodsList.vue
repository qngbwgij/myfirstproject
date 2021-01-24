<template>
    <div class="good-list">
      <component :is="componentna" v-for="(item, index) in cgoods" :key="index" :good-item="item"/>
    </div>
</template>

<script>
  import GoodListItem from "./GoodListItem";
  import ActivityListItem from "./ActivityListItem";
  export default {
    name: "GoodsList",
    props:{
        cgoods:{
            type:Array,
            default() {
                return []
            }
        },
        componentna:{
            type: Object,
/*            default() {
                return {};
            }*/
        }
    },
    components:{
      GoodListItem,
      ActivityListItem
    }
  }
</script>

<style scoped>
  .good-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);

    padding: 2px;
  }

</style>
