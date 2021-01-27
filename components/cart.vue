<template>
    <div v-if="$store.state.showcart" class="font-bold z-50  text-center w-full h-screen fixed top-0 right-0 p-3 rounded-lg flex justify-center items-center flex-wrap" style="overflow:scroll">
    
    <div @click="$store.commit('toggleCart')" class=" opacity-75 w-full h-screen bg-theme_primary_light absolute top-0 right-0  z-10"></div>
    
    <div class="z-50 w-full bg-theme_primary p-5 shadow-lg rounded-xl neu-out" style="max-width:600px">
         
         

         <ul>
             <li v-for="(i,index) in $store.state.cart" :key="i.varian_product_id" class="flex w-full flex-wrap justify-left bg-theme_primary_light my-2 rounded-xl p-2">
                 
                <div class="w-full flex justify-left items-center">
                    <img :src="$store.state.storage_url+ i.varian.img" class="w-1/4 rounded-xl">
                    <div class="w-3/4 text-left px-2 flex flex-wrap">
                        <span class="w-full">
                            {{index+1}} . 
                            {{ i.varian.name }}</span>
                            <span class="w-full text-xs font-normal p-2">
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
                    <button class="ml-auto text-danger" @click="$store.commit('removeItemCart',i)">remove</button>
                    </div>

             </li>
             <li class="w-full flex">
                 <div @click="checkOut"  class="text-center cursor-pointer w-full bg-primary text-white p-3 px-5 w-full rounded-full">
                     CheckOut
                 </div>
             </li>
               <li>
                 <button @click="$store.commit('toggleCart')" class="bg-theme_primary_dark mt-2 text-primary p-3 px-5 w-full rounded-full">
                     Close
                 </button>
             </li>
         </ul>
    </div>
    </div>
</template>
<script>
export default {
    methods:{
        checkOut(){
            this.$store.commit('toggleCart')
            this.$router.push("/checkout")
        }
    }
}
</script>