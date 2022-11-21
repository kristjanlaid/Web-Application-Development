import { createStore } from 'vuex'
import * as asd from 'vuex'
import axios from 'axios'
export default createStore( {
    state: {
        json_data: ""
    },
    //cant do async
    //use this to change data in state
    mutations: {
        setData(state, data) {
            state.json_data = data
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

