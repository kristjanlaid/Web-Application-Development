import { createStore } from 'vuex'
import axios from 'axios'
import { VueElement } from 'vue'
export default createStore( {
    state: {
        json_data: [],
        counter: 0
    },
    //cant do async
    //use this to change data in state
    mutations: {
        setData(state, data) {
            state.json_data = data 
        },
        increment(state, data) {
            console.log(state.counter)
            state.counter++
        },
        reset(state, data) {
            state.counter = 0
        }
    },
    //async func here
    actions: {
        async getData({ commit }) {
            const res = await fetch('https://raw.githubusercontent.com/capnarchie/capnarchie.github.io/main/data.json')
            const data = await res.json()
            console.log(data)
            this.json_data = data
            // axios('https://raw.githubusercontent.com/capnarchie/capnarchie.github.io/main/data.json').then(response => {
            //     commit('setData', response)
            // });
        }
    }
})


