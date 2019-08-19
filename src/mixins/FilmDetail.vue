<script>
export default {
  props: {
    film: {
      type: Object,
      required: true
    }
  },
  computed: {
    imgSrc() {
      return `https://image.tmdb.org/t/p/w500/${this.film.poster_path}`;
    }
  }
}
</script>