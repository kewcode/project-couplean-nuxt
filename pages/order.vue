<template>
  <div class="w-full bg-theme_primary_light flex  flex-wrap p-2 lg:px-40 " v-if="res">

        <update-status @reload="getData" :order="res" @updateStatus="updateStatusOnly" @update="showStatus = !showStatus" v-if="showStatus && $store.state.user.id == 1" />

        <h1 class="w-full text-center mb-3">
            Order ID : {{ res.id }}
        </h1>

          
        <div class="w-full lg:w-1/3 bg-theme_primary rounded-xl p-2 text-center">

            <h2 class="p-2 w-full text-center" v-if="$store.state.user.id !== 1">
                Payment :
                <br>
                <br>
                1. Ovo Ari Bahtiar | 085157740850
                <br>
                1. Dana Ari Bahtiar | 085157740850
                <br>
                1. LinkAja Ari Bahtiar | 085157740850

                <br>
                
            
            </h2>
             <a v-if="$store.state.user.id !== 1" :href="'https://wa.me/6285157740850?text=PaymentConfirmation Order Id : '+this.res.id" target="_BLANK" class="flex justify-center bg-success w-full py-3 my-3 rounded-full font-bold my-3 text-white px-5 my-3">
                    Payment Confirmation
                </a>


        
            <h1 class="text-center w-full py-2">Shipping :</h1>

 <h1 class="text-center w-full py-2 text-primary" v-if="res.shipping == 0">FREE ONGKIR</h1>

                     <span class="w-full px-2 pt-1">Name : {{ res.address.name }}</span>
                     <br>
                    <span class="w-full px-2 pt-1">Address : {{ res.address.address }}</span>
                    <br>
                    <span class="w-full px-2 pt-1">Phone : {{ res.address.phone }}</span>
      
          <br>
           
            <h1 class="p-2 text-xl text-primary">
                Total : {{ res.total}}
            </h1>
           
        <p class="w-full text-center">
            No Resi : {{res.resi}}
        <br>
            Status :
        </p>
          <button v-if="res.status == 1" class="bg-success w-full py-3 rounded-full font-bold my-3 text-white">
            List
          </button>
          <button v-if="res.status == 2" class="bg-success w-full py-3 rounded-full font-bold my-3 text-white">
            Verified
          </button>
          <button v-if="res.status == 3" class="bg-success w-full py-3 rounded-full font-bold my-3 text-white">
            Shipping
          </button>

          <button v-if="res.status == 4" class="bg-success w-full py-3 rounded-full font-bold my-3 text-white">
            Success 
          </button>

            <button v-if="$store.state.user.id == 1" @click="showStatus = true" class="w-full bg-theme_primary_light text-theme_secondary px-5 py-3 rounded-full font-bold my-3 text-white">
                Edit Status
            </button>

        </div>

         <ul class="w-full lg:w-2/3 p-3">
             <li v-for="(i,index) in res.items" :key="i.varian_product_id" class="flex w-full flex-wrap justify-left bg-theme_primary_light my-2 rounded-xl p-2">
                 
                <div class="w-full flex justify-left items-center bg-theme_primary rounded-xl p-2">
                    <img :src="$store.state.storage_url+ i.varian.img" class="w-1/4 rounded-xl">
                    <div class="w-3/4 text-left px-2 flex flex-wrap">
                        <span class="w-full">
                            {{index+1}} . 
                            {{ i.varian.name }}</span>
                            <span class="text-primary py-2">
                                Rp. {{ i.varian.price}}
                            </span>
                            <span class="w-full text-xs font-normal py-2">
                                {{ i.varian.description }}
                            </span>
                    </div>
                   
                </div>
                 <div class="w-full flex flex-wrap">
                        <span class="w-full lg:w-1/2 p-2 flex flex-wrap">
                            <label for="total" class="w-full p-1 px-3">Quantity :</label>
                            <input disabled type="number" v-model="i.total" class="w-full rounded-xl p-2 bg-theme_primary">
                        </span>
                        <span class="w-full lg:w-1/2 p-2 flex flex-wrap">
                            <label for="note" class="w-full p-1 px-3">Note :</label>
                            <input disabled type="text" placeholder="Notes" class="w-full rounded-xl p-2 bg-theme_primary">
                        </span>
                    </div>
             </li>
         </ul>

         

      


  </div>
</template>

<script>
import updateStatus from '../components/update-status.vue'
export default {
  components: { updateStatus },
  scrollToTop: true,
  middleware: 'auth',
  layout: 'app',
  data(){
    return{
        res: '',
        showStatus: false
    }
  },
  methods:{
      getData(){
            this.$axios.get("/detail-order/"+this.$route.query.id)
                .then(r => {
                    this.res = r.data
                })
      },
      updateStatus(){
          this.showStatus = true
      },
      updateStatusOnly(value){
          this.res.status = value
      }
  },
  created(){
    this.getData()
  }
}
</script>

    