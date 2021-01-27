<template>
  <div class="flex w-full flex-wrap lg:p-4 text-center p-2 justify-center">
    Halo {{ $store.state.user.name}}
    <br>
    <div class="text-danger cursor-pointer" @click="$store.commit('logout')">Logout</div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  layout: 'seller',
  fetch(){

  }
}
</script>

    