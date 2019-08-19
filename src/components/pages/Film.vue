<template>
    <div class="mt-5">
        <loading v-if='isLoading'/>
        <film-detail v-else :film='film'></film-detail>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Loading from '../shared/Loading'
import FilmDetail from '../shared/FilmDetail'

export default {
    components:{
        Loading,
        FilmDetail
    },
    data(){
        return {
            isLoading:false,
            film:{}
        }
    },
    methods:{
        ...mapActions(['fetchFilmById']),
        fetch(){
            this.isLoading=true
            this.fetchFilmById(this.$route.params.id)
            .then(resp=>{
                this.isLoading=false
                this.film=resp
            })
        }
    },
    created(){
        this.fetch()
    }
}
</script>