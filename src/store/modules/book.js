const book = {
  state: {
    test: '北京'
  },
  mutations: {
    SET_TEST: (state, newTest) => {
      state.test = newTest
    }
  },
  actions: {
    setTest({ commit, state }, newTest) {
      commit('SET_TEST', newTest)
    }
  }
}

export default book
