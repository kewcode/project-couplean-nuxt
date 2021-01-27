<template>
  <div class="flex w-full flex-wrap lg:p-4 text-center p-2 justify-center">
    Halo {{ $store.state.user.name}}
    <br>
    
    {{ $store.state.user.email }}

    <br>
    <br>

    <div class="text-danger cursor-pointer pr-5" @click="$store.commit('logout')">Logout</div>

    <div class="flex w-full flex-wrap" >
        <h1>Shipping Address :</h1>
        <div class="w-full flex flex-wrap">
            <span>Name : </span>
            <input v-model="myAddress.name" type="text" class="w-full p-3 px-5 rounded-xl my-2">
        </div>
         <div class="w-full flex flex-wrap">
            <span>Address : </span>
            <textarea v-model="myAddress.address" class="w-full p-3 px-5 rounded-xl my-2"></textarea>
        </div>
        <div class="w-full flex flex-wrap">
            <span>Phone : </span>
            <input v-model="myAddress.phone" type="text" class="w-full p-3 px-5 rounded-xl my-2">
        </div>
        <button @click="update" class="w-full p-3 px-5 rounded-xl my-2 bg-primary text-white ">
          Update
        </button>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  layout: 'user',
  data(){
    return {
      myAddress: {
        id: '',
        phone: '',
        address: '',
        name: ''
      }
    }
  },
  fetch(){
    this.$axios.get("/my-address")
        .then(res => {
          if(res.data[0]){
            this.myAddress = res.data[0]
          }
        })
  },
  methods:{
    update(){
      if(!this.myAddress.id){
        this.myAddress.districts_id = 0
        this.$axios.post('user-address',this.myAddress)
          .then(res => {
            console.log(res)
          })
      }else{
         this.$axios.patch('user-address/'+this.myAddress.id,this.myAddress)
          .then(res => {
            console.log(res)
          })
      }
    }
  }
}
</script>

    