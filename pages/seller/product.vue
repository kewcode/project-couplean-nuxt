<template>
  <div class="flex w-full flex-wrap p-1 ">
      <div class="w-full flex flex-wrap p-2 bg-theme_primary_dark rounded-xl mb-2">
          <button @click="createNew()" class="bg-theme_primary_light px-5 py-2 rounded-full ">
            New Product
          </button>
          <button @click="formActive = false" class="bg-danger text-white px-5 py-2 rounded-full ml-auto "
          v-if="formActive">
            Cancel
          </button>
          <button v-if="!formActive" class="px-5 py-2 rounded-full bg-theme_primary ml-auto">
            Filter
          </button>
      </div>

       <!-- Form -->
       <div v-if="formActive" class="w-full flex flex-wrap p-4 flex flex-wrap items-center bg-theme_primary_light rounded-xl">
        
         <div class="w-full lg:w-1/2 flex justify-center">
            <croppa v-model="myCroppa" 

             :width="300"
             :height="200"
            >
            </croppa>
          
         </div>
         <div class="w-full lg:w-1/2">

           
          
            <label for="name">Name</label>
            <input v-model="d.name" type="text" class="px-5 py-2 w-full rounded-xl bg-theme_primary">
      
           <label for="category">Category </label>
            <v-select v-model="d.category_id" :options="category" label="name" :reduce="it =>it.name" multiple />

            <label for="weight">Weight(Gram)</label>
            <input v-model="d.weight" type="number" class="px-5 py-2 w-full rounded-xl bg-theme_primary">
           
     

         </div>
         <div class="w-full border border-theme_primary mt-2 rounded-xl p-2 flex flex-wrap justify-center" v-for="(v,index) in d.varian" :key="'v'+index" >

           <h1 class="w-full text-center font-bold text-xl mt-3">Varian {{ index+1}}</h1>
            
            <croppa v-model="d.varian[index].imgSrc" > </croppa>

          <div class="w-full">
              <label for="name">Name</label>
              <input v-model="d.varian[index].name" type="text" class="px-5 py-2 w-full rounded-xl bg-theme_primary">
          </div>
           <div class="w-full lg:w-1/2">
              <label for="name">Price</label>
              <input v-model="d.varian[index].price" type="text" class="px-5 py-2 w-full rounded-xl bg-theme_primary">
          </div>
          <div class="w-full lg:w-1/2">
              <label for="name">Stock</label>
              <input v-model="d.varian[index].stock" type="text" class="px-5 py-2 w-full rounded-xl bg-theme_primary">
          </div>
          <div class="w-full lg:w-1/3">
              <label for="name">Size</label>
              <input v-model="d.varian[index].size" type="text" class="px-5 py-2 w-full rounded-xl bg-theme_primary">
          </div>
          <div class="w-full lg:w-1/3">
              <label for="name">Color</label>
              <input v-model="d.varian[index].color" type="text" class="px-5 py-2 w-full rounded-xl bg-theme_primary">
          </div>
           <div class="w-full lg:w-1/3">
              <label for="name">Status</label>
              <input v-model="d.varian[index].status" type="text" class="px-5 py-2 w-full rounded-xl bg-theme_primary">
          </div>
            <div class="w-full">
              <label for="name">Desc</label>
              <textarea class="px-5 py-2 w-full rounded-xl bg-theme_primary"
              v-model="d.varian[index].description"
               cols="2" rows="3"></textarea>
          </div>
           <div class="w-full">
              <label for="name">Seller Price</label>
              <input v-model="d.varian[index].seller_price" type="text" class="px-5 py-2 w-full rounded-xl bg-theme_primary">
          </div>

           <div class="w-full">
              <label for="name">Seller Contact</label>
              <input v-model="d.varian[index].seller_contact" type="text" class="px-5 py-2 w-full rounded-xl bg-theme_primary">
          </div>
            
          </div>

          <button  @click="createNewVarian" class="ml-auto bg-theme_primary text-primary px-5 py-2 rounded-xl mt-5">
            Create Varian
         </button>


         <button v-if="!d.id" @click="create" class="w-full  bg-primary text-white px-5 py-2 rounded-xl mt-5">
            Create 
         </button>
           <button v-else @click="update" class="w-full  bg-primary text-white px-5 py-2 rounded-xl mt-5">
            Update
         </button>

         
         
      </div>

      <!-- End Form -->
      
      <div class="w-full flex flex-wrap" v-if="!formActive">
        <div v-for="i in res" :key="i.id" class="w-full lg:w-1/2 p-3 text-center text-lg hover:bg-theme_primary_dark rounded-xl">
          <img :src="$store.state.storage_url+i.img" class="w-full my-2 rounded-xl">
            {{ i.name }} 
            <ul> 
              <li v-for="v in i.varian" :key="v.id" class="flex items-center bg-theme_primary_light rounded-xl justify-left my-2">
              <img :src="$store.state.storage_url+v.img" width="50px" class="border border-theme_primary m-2 rounded-xl">
                  {{ v.name}} <span class="ml-auto px-2">({{ v.stock }}) </span>
              </li>
            </ul>

            <span class="text-sm text-primary cursor-pointer" @click="editData(i)">edit</span>
            <nuxt-link class="text-sm text-success cursor-pointer" 
            :to="'/p/'+i.slug"
            >show</nuxt-link>

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
      d: '',
      myCroppa: {},
      category: []
    }
  },
  created(){
    this.getData()

    this.$axios.get("seller/category")
      .then(r => {
        this.category = r.data
      })

  },
  methods:{
    getData(){
      this.$axios.get("seller/product")
      .then(r => {
        this.res = r.data
      })
    },
    createNew(){
      this.formActive = true
      this.d = {
          name: "",
          category_id: [],
          weight: "",
          img: "",
          varian: [
              {
                name: "",
                stock: 0,
                price: 0,
                discount: 0,
                size: "",
                color: "",
                description: "",
                seller_price: 0,
                seller_contact: "",
                status: 1,
                imgSrc: {}
              }
            ]
        }
    },
    createNewVarian(){
      this.d.varian.push(
              {
                name: "",
                stock: 0,
                price: 0,
                discount: 0,
                size: "",
                color: "",
                description: "",
                seller_price: 0,
                seller_contact: "",
                status: 1,
                imgSrc: {}
              }
      )
    },
    editData(data){
      this.formActive = true
      this.d = data
    },
    create() {
      this.d.img = this.myCroppa.generateDataUrl('image/jpeg', 0.8)

      for (let index = 0; index < this.d.varian.length; index++) {
        this.d.varian[index].img = this.d.varian[index].imgSrc.generateDataUrl('image/jpeg', 0.8);
        this.d.varian[index].imgSrc = {}
      }

      this.$axios.post('seller/product',this.d)
        .then(res => {
          console.log(res)
          this.getData()
          this.formActive = false
        })

    },
    update() {
      this.d.img = this.myCroppa.generateDataUrl('image/jpeg', 0.8)

      for (let index = 0; index < this.d.varian.length; index++) {
        this.d.varian[index].img = this.d.varian[index].imgSrc.generateDataUrl('image/jpeg', 0.8);
        this.d.varian[index].imgSrc = {}
      }

      this.$axios.patch('seller/product/'+this.d.id,this.d)
        .then(res => {
          console.log(res)
          this.getData()
          this.formActive = false
        })
    }
  }
}
</script>

    

    