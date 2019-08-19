<script>
import { mapActions, mapState,mapGetters } from "vuex";
import FilmItem from "../shared/FilmItem";
import Loading from "../shared/Loading";
import * as constants from "../../store/constants";

export default {
  name: "Home",
  components: {
    "film-item": FilmItem,
    Loading
  },
  data() {
    return {
      isLoading: false,
      term: ''
    };
  },
  computed: {
    ...mapGetters(['searchFilm']),
  },
  methods: {
    ...mapActions(['fetchFilms','setTerm']),
    fetch() {
      this.isLoading = true;

      this.fetchFilms().then(resp => {
        this.isLoading = false;
      })
    },
    write(){
      console.log(this.term)
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<template>
  <div class="container mt-5 mb-5">
    <div class="row mb-5 d-flex align-content-center">
      <div class="col-md-12">
        <input type="text" class="form-control" placeholder="film ismi..." v-model="term" @keyup="setTerm(term)"/>
      </div>
    </div>
    <loading v-if="isLoading" />
    <div class="row" v-else-if="searchFilm.length">
      <film-item v-for="film in searchFilm" :key="film.id" :film="film"></film-item>
    </div>
    <div class="row">
      <button @click="write" class="btn btn-info mx-auto">Daha Fazla...</button>
    </div>
  </div>
</template>



















