<template>
    <div id="toast" v-show="showmess">
        <div >{{message}}</div>
    </div>
</template>

<script>
    export default {
        name: "Toast",
        data(){
            return{
                message: "默认值",
                showmess: false
            }
        },
        methods:
            {
                show(passmessage, duration=2000){
                    console.log("进入到组件内的show方法");
                    this.showmess=true;
                    this.message=passmessage;
                    setTimeout(()=>{
                        this.showmess=false;
                    }, duration)
                }
            }
    }
</script>

<style scoped>
    #toast{
        position: fixed;
        background-color: #2c3e50;
        color: white;
        left: 50%;
        top: 50%;
        z-index: 9999;
        transform: translate(-50%, 50%);
        padding: 10px 10px;
    }

</style>