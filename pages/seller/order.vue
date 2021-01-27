<template>
  <div class="flex w-full flex-wrap p-2">
      <div class="w-full flex flex-wrap p-2">
      
          <button class="px-5 py-2 rounded-full bg-theme_primary_dark ml-auto ">
            Filter
          </button>
      </div>
      <div v-for="i in res" :key="i.id" class="w-full mt-2 flex  items-center  text-lg bg-theme_primary_light p-4 rounded-xl my-2 flex flex-wrap items-center justify-center ">
          <div class="w-full lg:w-2/3 flex flex-wrap text-center lg:text-left">
            <b class="text-xl w-full">ID : {{ i.id }} | {{ i.user.name }}</b> 
            <b class="text-xs w-full">{{ i.created_at }}</b> 
          </div>
         <div class="w-full lg:w-1/3 flex items-center justify-center lg:justify-right text-sm my-2">
            <button v-if="i.status == 1" class=" bg-danger text-white rounded-full p-2 px-5 mx-2 w-1/2 text-center">
            List
          </button>
          <button v-if="i.status == 2" class=" bg-primary text-white rounded-full p-2 px-5 mx-2 w-1/2 text-center">
            Verified
          </button>
          <button v-if="i.status == 3" class=" bg-warning text-white rounded-full p-2 px-5 mx-2 w-1/2 text-center">
            Shipping
          </button>

          <button v-if="i.status == 4" class=" bg-success text-white rounded-full p-2 px-5 mx-2 w-1/2 text-center">
            Success
          </button>
           <nuxt-link :to="'/order/?id='+i.id" class=" bg-success text-white rounded-full p-2 px-5 mx-2 w-1/2 text-center">
            Show
          </nuxt-link>
         </div>
      </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  layout: 'seller',
  data(){
    return{
      res : ''
    }
  },
  fetch(){
    this.$axios.get("/order")
      .then(r => {
        this.res = r.data
      })
  }
}
</script>

    