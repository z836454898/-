const state = {
  accountList: [
    {
      username: 'aaaaaaaaaa',
      id: '00001',
      disable: '否',
    },
  ]
}

const mutations = {
  ACCOUNT_RELEASE: (state, account) => {
    state.accountList.splice(1, 0, account)
  },

  ACCOUNT_DELETE: (state, account) => {
    state.accountList.forEach(value => {
      if (value.name === account.name) {
        state.accountList.splice(
          state.accountList.indexOf(value), 1
        )
      }
    })
  },

  ACCOUNT_DISABLE(state, {account, disable}) {
    state.accountList.forEach(value => {
      if (
        value.username === account.username
      ) {
        value.disable = disable
      }
    })
  },
}

export default {
  namespace: true,
  state,
  mutations,
}
