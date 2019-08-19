<template>
  <div class="col-md-4 mb-3">
    <router-link :to="filmUrl">
      <div class="card h-100">
        <img :src="imgSrc" :alt="film.title" class="card-img-top" />
        <div class="card-body text-dark mb-2">
          <h5 class="card-title">{{film.title}}</h5>
          <p class="card-text">{{film.overview}}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>


<script>
import FilmDetail from "../../mixins/FilmDetail";
export default {
  name: "FilmItem",
  mixins: [ FilmDetail ],
  computed:{
    filmUrl() {
      return `/film/${this.film.id}`;
    }
  }
};
</script>