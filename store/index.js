import Vuex from 'vuex'
import axios from 'axios'
const createStore = () => {
  return new Vuex.Store({
    state: {
        auth: localStorage.getItem("_auth") || false,
        user: (localStorage.getItem("_user")) ? JSON.parse(localStorage.getItem("_user")) : '',
        token: localStorage.getItem("_token") || '',
        theme: localStorage.getItem("theme") || 'theme-light',
        primaryColor: localStorage.getItem("primary-color") || 'primary-red',
        settings: false,
        loading: false,
        storage_url: 'http://localhost:8000/storage',
        showcart: false,
        cart: JSON.parse(localStorage.getItem("_cart")) || []
    },
    mutations: {
        logout(state){
            state.user = ''
            state.auth = false
            state.token = ''
            localStorage.setItem("_token",'')
            localStorage.setItem("_user",'')
            localStorage.setItem("_auth",'')
            this.$router.push("/login")
        },
        login(state,data){
            console.log(data)
            this.$axios.post('login', data)
            .then(res => {
               
                localStorage.setItem("_token",res.data.access_token)
                localStorage.setItem("_user",JSON.stringify(res.data.user))
                localStorage.setItem("_auth",true)

                // Adds header: `Authorization: 123` to all requests
                this.$axios.setHeader('Authorization', 'Bearer '+res.data.access_token)

                if(res.data.user.id){
                    state.auth = true
                    // console.log(data.ref)
                    if(data.ref && data.ref !== 'undefined'){
                        this.$router.push(data.ref)
                    }else{
                        this.$router.push("/")
                    }
                }
            })
        },
        register(state,data){
            console.log(data)
            this.$axios.post('register', data)
            .then(res => {
               
                localStorage.setItem("_token",res.data.access_token)
                localStorage.setItem("_user",JSON.stringify(res.data.user))
                localStorage.setItem("_auth",true)

                // Adds header: `Authorization: 123` to all requests
                this.$axios.setHeader('Authorization', 'Bearer '+res.data.access_token)

                if(res.data.user.id){
                    state.auth = true
                    // console.log(data.ref)
                    if(data.ref && data.ref !== 'undefined'){
                        this.$router.push(data.ref)
                    }else{
                        this.$router.push("/")
                    }
                }
            })
        },
        loading(state,to){
            state.loading = to
        },
        setTheme(state, to) {
            state.theme = to
            localStorage.setItem("theme", to)
        },
        setPrimaryColor(state,to){
            state.primaryColor = to
            localStorage.setItem("primary-color", to)
        },
        toggleSetting(state,to){
            if(state.settings){
                state.settings = false
            }else{
                state.settings = true
            }
        },
        toggleCart(state){
            if(state.showcart){
                state.showcart = false
            }else{
                state.showcart = true
            }
        },
        addToCart(state,data){
            
            state.cart.push({
                varian: data,
                varian_product_id: data.id,
                total: 1,
                notes: "",
             })

             localStorage.setItem("_cart",JSON.stringify(state.cart))

        },
        removeItemCart(state,data){
            const i = state.cart.indexOf(data);
            state.cart.splice(i, 1);
        },
    },
  })
}

export default createStore