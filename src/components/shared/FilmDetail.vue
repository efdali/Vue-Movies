<template>
  <div>
    <h1 class="text-center text-info">{{film.title}}</h1>
    <div class="mt-5">
    <img :src="imgSrc" :alt="film.title" class="img-fluid w-25 float-left" />
    <div class="row">
        <div class="col-md-12 mt-5">
            <h4><span>Orjinal Adı : </span>{{film.original_title}}</h4>
            <p>{{film.overview}}</p>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import FilmDetail from '../../mixins/FilmDetail'
export default {
    name:'film-detail',
    mixins:[FilmDetail],
    created(){
        console.log(this.film)
    }
}
</script>