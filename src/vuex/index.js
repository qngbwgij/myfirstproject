import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)

const store= new Vuex.Store({
    state:{
        globalconfig: {},
        currentActivityplateformindex: 0,
        plateforms: []
    },
    getters:{
        showcount1:  state =>{
             return parseInt(state.globalconfig.activitycount1)
        },
        showcount2: state => {
            return  parseInt(state.globalconfig.activitycount2)
        },
        showcount2end: (state, getters) => {
            return getters.showcount1 + getters.showcount2
        }
    },
    mutations:{
        addglobalconfig(state, payload){
            //console.log("第二次" + payload);

            this.state.globalconfig=payload;

            //console.log("第三次" + this.state.globalconfig);
        },
        changeCurrentActivityPlat(state, payload){
           state.currentActivityplateformindex=payload;
        },
        initialplateforms(state, payload){
            state.plateforms=payload;
        }
/*        initialplateforms1(state, payload){
            state.plateforms1=payload;
        }*/

    }
})

export default store





