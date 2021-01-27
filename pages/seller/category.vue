<template>
  <div class="flex w-full flex-wrap p-3 items-center">
      <div class="w-full flex flex-wrap py-2">
          <button @click="createNew()" class="bg-theme_primary_light px-5 py-2 rounded-full ">
            New Category
          </button>
          <button @click="formActive = false" class="bg-danger text-white px-5 py-2 rounded-full ml-auto "
          v-if="formActive">
            Cancel
          </button>
      </div>
      <!-- Form -->
       <div v-if="formActive" class="w-full flex flex-wrap p-4 flex flex-wrap items-center bg-theme_primary_light rounded-xl">
        
         <div class="w-full lg:w-1/2 flex">
           <img :src="$store.state.storage_url+d.img" v-if="d.img" width="200px" alt="">
            <croppa v-model="myCroppa" 
            >
            </croppa>
          
         </div>

         <div class="w-full lg:w-1/2">
          <label for="sub">Sub </label>
          <v-select v-model="d.sub" :options="res" label="name" :reduce="it =>it.id" />

          <div class="w-full ">
          <label for="name">Name</label>
          <input v-model="d.name" type="text" class="px-5 py-2 w-full rounded-xl bg-theme_primary">
         </div>

         <button v-if="!d.id" @click="create" class="w-full  bg-primary text-white px-5 py-2 rounded-xl mt-5">
            Create 
         </button>
           <button v-else @click="update" class="w-full  bg-primary text-white px-5 py-2 rounded-xl mt-5">
            Update
         </button>


         </div>
         
         
      </div>

      <!-- End Form -->

       <div class="w-full flex flex-wrap" v-if="!formActive">
      <h1 class="w-full py-3 font-bold text-lg text-center">
        List Category
      </h1>
      <div v-for="i in res" :key="i.id" class="bg-theme_primary_light my-1 shadow-sm w-1/2 lg:w-1/4 p-3 text-center text-lg hover:bg-theme_primary_dark rounded-xl">
      <img v-if="i.img" 
      :src="$store.state.storage_url+i.img" 
      class="w-full m-2 rounded-lg">
          {{ i.name }} 

          <div>
            <span class="text-sm text-primary cursor-pointer" @click="editData(i)">edit</span>
            <!-- <span class="text-sm text-danger  cursor-pointer">delete</span> -->
          </div>
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
      formActive: false,
      res: '',
      d:{
        name: '',
        img: '',
        sub: ''
      },
      myCroppa: {}
    }
  },
  created(){
    this.getData()
  },
  methods:{
    getData(){
      this.$axios.get("seller/category")
      .then(r => {
        this.res = r.data
      })
    },
    createNew(){
      this.formActive = true
      this.d = {
          img: '',
          name: '',
          sub: ''
        }
    },
    editData(data){
      this.formActive = true
      this.d = data
      this.d.sub = data.sub_id
      
    },
    create() {
      
      this.d.img = this.myCroppa.generateDataUrl('image/jpeg', 0.8)

      this.$axios.post('seller/category',this.d)
        .then(res => {
          this.getData()
          this.d = {
            img: '',
            name: '',
            sub: ''
          }
        })
    },
    update() {
      this.d.img = this.myCroppa.generateDataUrl('image/jpeg', 0.8)
      this.$axios.patch('seller/category/'+this.d.id,this.d)
        .then(res => {
          this.getData()
          this.d = {
            img: '',
            name: '',
            sub: ''
          }
        })
    }
  }
}
</script>

    