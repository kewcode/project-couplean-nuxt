<template>
  <div class="w-full bg-theme_primary_light flex  flex-wrap p-2 lg:px-40 ">
        <h1 class="w-full text-center">
            CheckOut
        </h1>
         <ul class="w-full lg:w-2/3 p-3">
             <li v-for="(i,index) in $store.state.cart" :key="i.varian_product_id" class="flex w-full flex-wrap justify-left bg-theme_primary_light my-2 rounded-xl p-2">
                 
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
                            <input type="number" v-model="i.total" class="w-full rounded-xl p-2 bg-theme_primary">
                        </span>
                        <span class="w-full lg:w-1/2 p-2 flex flex-wrap">
                            <label for="note" class="w-full p-1 px-3">Note :</label>
                            <input type="text" placeholder="Notes" class="w-full rounded-xl p-2 bg-theme_primary">
                        </span>
                    <button class="ml-auto text-danger px-3 text-sm" @click="$store.commit('removeItemCart',i)">remove</button>
                    </div>

             </li>
         </ul>

         <div class="w-full lg:w-1/3 bg-theme_primary rounded-xl p-2">
            <h1 class="text-center w-full py-2">Shipping Address :</h1>

            <h1 class="text-center w-full py-2 text-primary">FREE ONGKIR</h1>        
         
            <ul>
                <li v-for="ad in myAddress" :key="ad.id" class="w-full flex flex-wrap">
                    <span class="w-full px-2 pt-1">Name : {{ ad.name }}</span>
                    <span class="w-full px-2 pt-1">Address : {{ ad.address }}</span>
                    <span class="w-full px-2 pt-1">Phone : {{ ad.phone }}</span>
                </li>
            </ul>
            <br>

               <h2 class="p-2">
                Payment :
                <br>
                1. Ovo Ari Bahtiar | 085157740850
                <br>
                1. Dana Ari Bahtiar | 085157740850
                <br>
                1. LinkAja Ari Bahtiar | 085157740850
            </h2>


          <br>
            <h1 class="p-2 text-xl text-primary">
                Total : {{ total }}
            </h1>

           
               <div v-if="myAddress.length > 0" @click="checkOut" class="my-3 text-center cursor-pointer w-full bg-primary text-white p-2 px-5 w-full rounded-full">
                    Check Out
                </div>
                  <div v-if="myAddress.length == 0" class="my-3 text-center cursor-pointer w-full bg-theme_primary_light text-theme_primary_dark p-2 px-5 w-full rounded-full">
                    Check Out
                </div>

                 <div class="text-warning w-full text-center" v-if="myAddress.length == 0">
                Please Add Shipping Address (Edit Profile)
            </div>
            
                
                
                   <nuxt-link to="/u/user" v-if="myAddress.length == 0" class="flex justify-center my-3 text-center cursor-pointer w-full bg-primary text-white p-2 px-5 w-full rounded-full">
                    Edit Profile
                </nuxt-link>
            
        </div>

      


  </div>
</template>

<script>
export default {
  middleware: 'auth',
  scrollToTop: true,
  layout: 'app',
  data(){
    return{
        myAddress: ''
    }
  },
  computed:{
      total(){
          let to = 0;

          for (let index = 0; index < this.$store.state.cart.length; index++) {
              to += this.$store.state.cart[index].varian.price*this.$store.state.cart[index].total
          }
          return "Rp." + to;
      }
  },
  created(){
      this.$axios.get("/my-address")
        .then(res => {
            this.myAddress = res.data
        })
  },
  methods:{
      checkOut(){
        
        let product = [];
        for (let index = 0; index < this.$store.state.cart.length; index++) {
            product.push({
                varian_product_id: this.$store.state.cart[index].varian_product_id,
                total: this.$store.state.cart[index].total,
                notes: this.$store.state.cart[index].notes,
            })
        }
        let data = {
            address_id : this.myAddress[0].id,
            payment_ref: "OVO",
            shipping: 0,
            product: product
        }
        
        this.$axios.post("/order",data)
            .then(res => {
                this.$store.state.cart = []
                this.$router.push("/u/order")
            })

      }
  }
}
</script>

    