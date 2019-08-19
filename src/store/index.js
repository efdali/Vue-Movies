import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import * as constants from "./constants"

Vue.use(Vuex);

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie"
})

const params = {
  api_key: constants.API_KEY,
  language: "tr"
};

const store = new Vuex.Store({
  state: {
    films: [],
    term : ''
  },
  mutations: {
    [constants.SET_FILMS](state, films) {
      state.films = films
    },
    setTerm(state,term){
      state.term=term
    }
  },
  actions: {
    fetchFilms({ commit }) {
      return instance
        .get("/popular", {
          params
        })
        .then(res => {
          commit(constants.SET_FILMS, res.data.results)
        })
    },
    fetchFilmById(_, id) {
      return instance.get(`/${id}`, { params }).then(res => {
        return res.data
      })
    },
    setTerm({commit},term){
      commit('setTerm',term)
    }
  },
  getters:{
    searchFilm(state){
       return state.films.filter(f => f.title.includes(state.term));
    }
  }
})

export default store;
