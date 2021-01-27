<template>
    <div class="font-bold z-50  text-center w-full h-screen fixed top-0 right-0 p-3 rounded-lg flex justify-center items-center flex-wrap" style="overflow:scroll">
    
    <div @click="$emit('update', false)" class=" opacity-75 w-full h-screen bg-theme_primary_light absolute top-0 right-0  z-10"></div>
    
    <div class="z-50 w-full bg-theme_primary p-5 shadow-lg rounded-xl neu-out" style="max-width:600px">
         <ul>
             <li class="flex flex-wrap w-full">
                <span class="w-full text-center my-2 text-xl">
                    No Resi :
                </span>
                <input v-model="d.resi" placeholder="JNE,Sicepat dll | 101010 " type="text" class="w-full bg-theme_primary_light rounded-xl py-3 px-2">
             </li>
               <li class="flex flex-wrap w-full">
                <span class="w-full text-center my-2 text-xl">
                    Payment Ref :
                </span>
                <input v-model="d.payment_ref" placeholder="Ovo,Dana,LinkAja,Bank dll" type="text" class="w-full bg-theme_primary_light rounded-xl py-3 px-2">
             </li>
            <li class="flex w-full my-3 flex-wrap">
                <span class="w-full text-center p-2 text-xl">Status</span>
                <button @click="updateStatus(1)" class="w-1/2 lg:w-1/4 my-2 bg-theme_primary_light border-2 border-primary rounded-xl p-2 px-5" :class="(order.status == 1) ? 'bg-primary text-white' : 'text-primary'">
                    List
                </button>
                <button @click="updateStatus(2)" class="w-1/2 lg:w-1/4 my-2 bg-theme_primary_light  border-2 border-primary rounded-xl p-2 px-5" :class="(order.status == 2) ? 'bg-primary text-white' : 'text-primary'">
                    Verified
                </button>
                <button @click="updateStatus(3)" class="w-1/2 lg:w-1/4 my-2 bg-theme_primary_light border-2 border-primary rounded-xl p-2 px-5" :class="(order.status == 3) ? 'bg-primary text-white' : 'text-primary'">
                    Shipping
                </button>

                <button @click="updateStatus(4)" class="w-1/2 lg:w-1/4 my-2 bg-theme_primary_light  border-2 border-primary rounded-xl p-2 px-5" :class="(order.status == 4) ? 'bg-primary text-white' : 'text-primary'">
                    Success
                </button>

            </li>
             <li class="w-full flex pt-3">
                 <div @click="update" class="text-center cursor-pointer w-full bg-primary text-white p-3 px-5 w-full rounded-full">
                     Update
                 </div>
             </li>
               <li>
                 <button @click="$emit('update', false)" class="bg-theme_primary_dark mt-2 text-primary p-3 px-5 w-full rounded-full">
                     Close
                 </button>
             </li>
         </ul>
    </div>
    </div>
</template>
<script>
export default {
    props: ['order'],
    data(){
        return{
            d:{
                resi: '',
                payment_ref: '',
                status: ''
            }
        }
    },
    mounted(){
        this.d.status = this.$props.order.status
    },
    methods:{
        updateStatus(to){
            this.d.status = to
            this.$emit("updateStatus", to)
        },
        update(){
            this.$axios.post("seller/update-status/"+this.$props.order.id,this.d)
                .then(res => {
                    this.$emit('update', false)
                    this.$emit('reload', true)
                    console.log(res)
                })
        }
    }
}
</script>