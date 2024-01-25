import Vue from 'vue'
import Vuex from 'vuex'
import {reqAllArticle, reqAllUser} from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allArticle: [],
    allUser: [],
  },
  mutations: {
    GETALLARTICLE(state, article) {
      state.allArticle = article
      // console.log(state.allArticle)
    },
    GETALLUSER(state, user) {
      state.allUser = user
      // console.log(state.allUser)
    },
  },
  actions: {
    async getAllArticle({commit, state}) {
      let result = await reqAllArticle()
      // console.log(result)
      if(result.status == 200) {
        commit("GETALLARTICLE", result.data)
      }
    },
    async getAllUser({commit, state}) {
      let result = await reqAllUser()
      // console.log(result)
      if(result.status == 200) {
        commit("GETALLUSER", result.data)
      }
    },
  },
  getters: {
  },
  modules: {
  }
})
