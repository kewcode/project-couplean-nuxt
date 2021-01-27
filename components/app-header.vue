<template>
    <div >
           <!-- Header -->
            <nav class="w-full p-4 flex flex-wrap fixed bg-theme_primary_light z-50 lg:px-40" >
                
                    <nuxt-link to="/" class="mr-auto flex p-2 ">
                        <div class="w-6 h-6 mt-1" >
                            <img src="/icon.png" alt="avatar" >
                        </div>
                         <span class=" font-bold text-xl text-primary px-1"> 
                            Couplean
                        </span> 

                    </nuxt-link>
                    <div class=" text-primary cursor-pointer ml-auto p-2 flex">
                       <div class="px-2" @click="$store.commit('toggleCart')" >Cart ({{ $store.state.cart.length}})</div>
                       <nuxt-link to="/u/user" class="px-2"> User </nuxt-link>
                    </div>
            </nav>
    </div>
</template>