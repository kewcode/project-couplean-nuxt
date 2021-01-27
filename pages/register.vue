<template>
<div class="w-full lg:w-1/3 mx-auto flex items-center p-4 h-screen">

  <div class="flex w-full flex-wrap p-1">
         <h1 class="w-full text-center text-3xl pb-2 -mt-20">Register</h1>
        <input type="text" v-model="name" placeholder="name" class="p-2 w-full rounded-xl mb-3 px-4" />
        <input type="text" v-model="email" placeholder="email" class="p-2 w-full rounded-xl mb-3 px-4" />
      
        <input type="text" v-model="password" placeholder="password" class="p-2 w-full rounded-xl mb-3 px-4" />
       
        <button @click="newUser" class="bg-primary text-white p-2 w-full rounded-full">
          Register
        </button>
  </div>
</div>
</template>

<script>
export default {
  scrollToTop: true,
  layout: 'app',
  data(){
    return{
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    newUser(){
      if(this.name !== '' && this.email !== '' && this.password !== ''){
        this.$store.commit('register', {
          name: this.name,
          email: this.email,
          password: this.password,
          ref: this.$route.query.ref,
        })
      }
    }
  }
}
</script>

    