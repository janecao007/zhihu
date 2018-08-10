import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)
 
export default new Vuex.Store({
  state:{
    listDate:{
      url: '../../static/list2.json',
      name: '',
      excerpt: '',
      list:[]
    }
  },
  mutations:{
    listcontent(state,contentdata){
      state.listDate.list = contentdata
    }
  },
  actions:{
    saveDate({commit, state}, url){
       axios.get(url).then(res=>{
        commit('listcontent',res.data.data)
      })
     }
  }
})