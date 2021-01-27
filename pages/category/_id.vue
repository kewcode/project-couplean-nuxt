<template>
  <div class="w-full bg-theme_primary_light flex justify-center items-center flex-wrap flex lg:px-40">
    <h1 class="text-3xl font-bold text-center w-full my-3 ">
      {{  cat.name}}
    </h1>
    <div class="flex w-full flex-wrap items-center justify-center">
      <nuxt-link v-for="i in Product" :key="i.id" :to="'/p/'+i.slug" class="w-full bg-theme_primary rounded-xl p-4 lg:w-1/3 flex flex-wrap p-2 ">
          <img :src="$store.state.storage_url+i.img" :alt="i.name" class="w-full rounded-xl">
          <h1 class="text-2xl text-center w-full">{{ i.name}}</h1>
      </nuxt-link>
    </div>
    <h1 class="text-2xl text-center w-full mt-3">
       Category
    </h1>
    <div class="flex w-full flex-wrap justify-center">
      <nuxt-link v-for="i in Category" :key="i.id" :to="'/category/'+i.slug" class="w-1/3 lg:w-1/6 flex flex-wrap p-2 ">
          <img :src="$store.state.storage_url+i.img" :alt="i.name" class="w-full rounded-xl">
          <h1 class="text-2xl text-center w-full">{{ i.name}}</h1>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  layout: 'app',
  data(){
    return{
      Product: '',
      Category: '',
      cat: ''
    }
  },
  created(){
    this.$axios.get("/product/category/"+this.$route.params.id)
      .then(res => {
        this.Product = res.data
      })

      this.$axios.get("/category")
      .then(res => {
        this.Category = res.data
      })

       this.$axios.get("/category/"+this.$route.params.id)
      .then(res => {
        this.cat = res.data
      })
  }
}
</script>

    