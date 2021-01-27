<template>
<div :class="settings" class="min-h-screen font-sans">
    <seller-header />
    <settings />
    <div class="w-full  py-16 lg:pt-20 bg-theme_primary_light flex justify-center lg:px-40 p-2">
      <nav class="w-full lg:w-1/5 lg:p-4 fixed lg:relative bg-theme_primary_light rounded-xl bottom-0 z-40">
              <seller-menu />
        </nav>
        <div class="w-full lg:w-4/5 bg-theme_primary rounded-xl ">
          <transition
            name="slide-fade"
          >
              <Nuxt />
            </transition>
        </div>
    </div>
      
</div>        
</template>

<script>
export default {
  middleware: 'auth',
  created(){
    this.$axios.setHeader('Authorization', 'Bearer '+localStorage.getItem("_token"))
  },
  computed:{
    settings(){
      return this.$store.state.theme+" "+ this.$store.state.primaryColor;
    }
  },
}
</script>
