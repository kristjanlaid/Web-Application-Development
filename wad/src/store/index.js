import { createStore } from 'vuex'
import axios from 'axios'
import { VueElement } from 'vue'
export default createStore( {
    state: {
        json_data: "",
        counter: 0
    },
    //cant do async
    //use this to change data in state
    mutations: {
        setData(state, data) {
            state.json_data = data
        },
        increment(state, data) {
            state.counter++
            console.log(state.counter)
        }
    },
    //async func here
    actions: {
        getData({ commit }) {
            axios('https://raw.githubusercontent.com/capnarchie/capnarchie.github.io/main/data.json').then(response => {
                commit('setData', response)
            });
        }
    }
})


