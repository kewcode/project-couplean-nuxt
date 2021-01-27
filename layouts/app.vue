<template>
<div :class="settings" class="font-sans">
    <app-header />
    <cart />
    <main class="pt-16">
        <transition
          name="slide-fade"
        >
            <Nuxt />
        </transition>
    </main>
</div>        
</template>

<script>
export default {
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
