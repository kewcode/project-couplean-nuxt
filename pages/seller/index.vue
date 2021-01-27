<template>
  <div class="flex w-full flex-wrap lg:p-4">
      <div class="w-full flex flex-wrap p-2">
          <button class="px-5 py-2 rounded-full bg-theme_primary_dark ml-auto">
            Filter
          </button>
      </div>

      <h1>
        Dashboard
      </h1>
      <!-- <div  class="w-full lg:w-1/2 mt-2 text-center p-3 text-center text-lg bg-primary rounded-full text-white">
          Income
          <br>
          <span class="text-xl">Rp. 10M</span>
      </div>
      <div  class="w-full lg:w-1/2 mt-2 text-center p-3 text-center text-lg bg-primary rounded-full text-white">
          Income
          <br>
          <span class="text-xl">Rp. 10M</span>
      </div>
      <div  class="w-full lg:w-1/2 mt-2 text-center p-3 text-center text-lg bg-primary rounded-full text-white">
          Income
          <br>
          <span class="text-xl">Rp. 10M</span>
      </div>
      <div  class="w-full lg:w-1/2 mt-2 text-center p-3 text-center text-lg bg-primary rounded-full text-white">
          Income
          <br>
          <span class="text-xl">Rp. 10M</span>
      </div> -->
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  layout: 'seller',
  fetch(){
    this.$router.push("/seller/order")
  }
}
</script>

    