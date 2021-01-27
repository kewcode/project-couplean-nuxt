<template>

  <div class="w-full p-4 min-h-screen  bg-theme_primary_light flex justify-center items-center lg:px-40 flex-wrap">
     
      <h1 class="w-full text-center text-4xl my-2 font-bold">
          {{ res.name }}
      </h1>
      <div class="w-full flex justify-center">
        <img class="rounded-xl" :src="$store.state.storage_url+res.img" :alt="res.name">
      </div>

      <h1 class="text-center font-bold my-2 w-full">
        Varian
      </h1>
      <div class="w-full lg:w-2/3 flex bg-theme_primary my-2 rounded-xl p-2 relative" v-for="(v,index) in res.varian" :key="v.id">
        <div class="w-full flex items-center" :class="(index % 2 == 0) ? '' : 'flex-row-reverse text-right ' ">
          <img class="w-1/4 rounded-xl" :src="$store.state.storage_url+v.img" :alt="v.name">
          <h1 class="w-3/4 p-4 flex flex-wrap content-start" >
            
              <span class="w-full lg:font-bold text-lg lg:text-3xl">
                {{ v.name}}
              </span>

              <span class="text-primary font-bold lg:text-xl text-danger w-full line-through" v-if="v.discount > 0">
                Rp. {{ v.price+(v.price*v.discount) }}
              </span>
              <span class="text-primary font-bold lg:text-xl w-full">
                Rp. {{ v.price}}
              </span>
              <p class="w-full text-xs lg:text-sm block lg:hidden">
                {{ v.description.substr(0,25)}} ..
              </p>
               <p class="w-full text-xs lg:text-sm hidden lg:block">
                {{ v.description}}
              </p>

              <span class="absolute p-2 flex m-3" :class="(index % 2 == 0) ? 'right-0' : 'left-0'">
               
                <button @click="addToCart(v)" class="bg-primary text-white p-2 px-4 rounded-full">
                  +
                </button>
              </span>
          </h1>
         
        </div>
        
      </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  layout: 'app',
  data(){
    return{
      res: ''
    }
  },
  created(){
      this.$axios.get('product/'+this.$route.params.product)
      .then(r => {
        this.res = r.data
      })
  },
  methods:{
    addToCart(data){
      this.$store.commit('toggleCart')
      this.$store.commit('addToCart',data)
    }
  }
}
</script>

    