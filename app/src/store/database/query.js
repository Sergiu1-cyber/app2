import axios from 'axios'

export default {
  state: {
    operatii: []
  },
  getters: {
    allOperatii(state) {
      return state.operatii
    }
  },
  mutations: {
    updateData(state, dt) {
      state.operatii = dt
    }
  },
  actions: {
    citescData({commit}) {
      axios.post('http://localhost:3000/dataBaza/all')
      .then(response => {
        commit('updateData', response.data)
      })
      .catch(err => alert(err))
    }
  }
}