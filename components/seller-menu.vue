<template>
    <div class=" lg:min-h-screen sticky lg:top-0 lg:pt-20">
        <ul class="text-sm text-center lg:text-left lg:text-xl flex lg:block">
                <!-- <li class="p-2 py-4 lg:p-4 w-1/5 lg:w-full"> 
                    <nuxt-link to="/seller" class="hover:text-primary" :class="($route.path == '/seller') ? 'text-primary' : ''" > 
                    Dashboard
                     </nuxt-link>
                </li> -->
                <li class="p-2 py-4 lg:p-4 w-1/4 lg:w-full">
                    <nuxt-link to="/seller/order" class="hover:text-primary" :class="($route.path == '/seller/order') ? 'text-primary' : ''"> 
                    Order  </nuxt-link>
                </li>
                <li class="p-2 py-4 lg:p-4 w-1/4 lg:w-full">
                    <nuxt-link to="/seller/product" class="hover:text-primary" :class="($route.path == '/seller/product') ? 'text-primary' : ''"> 
                    Product </nuxt-link>
                </li>
                 <li class="p-2 py-4 lg:p-4 w-1/4 lg:w-full">
                    <nuxt-link to="/seller/category" class="hover:text-primary" :class="($route.path == '/seller/category') ? 'text-primary' : ''"> 
                    Category </nuxt-link>
                </li>
                <li class="p-2 py-4 lg:p-4 w-1/4 lg:w-full">
                    <nuxt-link to="/seller/profile" class="hover:text-primary" :class="($route.path == '/seller/profile') ? 'text-primary' : ''"> 
                    Profile </nuxt-link>
                </li>
               
            </ul>
    </div>
</template>

<script>
export default {
}
</script>