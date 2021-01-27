<template>
    <div class=" lg:min-h-screen sticky lg:top-0 lg:pt-20">
        <ul class="text-sm text-center lg:text-left lg:text-xl flex lg:block">
                <li class="p-2 py-4 lg:p-4 w-1/3 lg:w-full"> 
                    <nuxt-link to="/" class="hover:text-primary" :class="($route.path == '/') ? 'text-primary' : ''" > 
                    Home
                     </nuxt-link>
                </li>
                <li class="p-2 py-4 lg:p-4 w-1/3 lg:w-full">
                    <nuxt-link to="/u/order" class="hover:text-primary" :class="($route.path == '/u/order') ? 'text-primary' : ''"> 
                    Order  </nuxt-link>
                </li>
                <li class="p-2 py-4 lg:p-4 w-1/3 lg:w-full">
                    <nuxt-link to="/u/user" class="hover:text-primary" :class="($route.path == '/u/user') ? 'text-primary' : ''"> 
                    Profile </nuxt-link>
                </li>
               
            </ul>
    </div>
</template>

<script>
export default {
}
</script>