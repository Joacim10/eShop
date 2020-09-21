// 
// modul för store funktioner för användare "user"
//
// importera axios
import axios from '../../helpers/helperAxios';

// exporterar "store" funktioner för användare "user"

export default {

  // data för användare/kund
  state: {

    // firstName: "",
    //   lastName: "",
    //   email: "",
    //   passWord: ""
    user: {},

    userToken: "",

    isUserLoggedIn: false,

    messages: "",

    submittedSuccessfully: false

  },

  //  ändrar på data
  mutations: {

    UPPDATE_MESSAGE(state, newMessage) {
      state.messages = newMessage
    },

    UPPDATE_SUBMITTED(state, submitted) {
      state.submittedSuccessfully = submitted
    },

    IS_USER_LOGGED_IN(state, loggedIn) {
      state.isUserLoggedIn = loggedIn
    },

    SET_USER_TOKEN(state, token) {
      state.userToken = token
    },

    SET_USER_DATA(state, userdata) {

      state.user = userdata
    },

    GET_USER_DATA(state) {
      let userdata = JSON.parse(sessionStorage.getItem('currentUser'))
      if (userdata) {
        state.user = userdata
      }
    }


  },

  // utför anrop från componenter
  actions: {

    // registrera en ny användare/kund
    // { commit },
    async registerUser({ commit }, newUser) {

      // console.log(newUser)

      try {
        const response = await axios.post('/users/register', newUser)
        // skicka user till mongodb med axios http://localhost:9999/api/v1
        // console.log(response.data)

        if (response.status === 201) {
          // spara till state
          commit('UPPDATE_SUBMITTED', true);
        }

        return response.data;

      } catch (error) {
        console.log(error)
        return error;
      }
    },

    // logga in en användare
    async loginUser({ commit }, user) {
      try {
        // skicka user till mongodb med axios http://localhost:9999/api/v1
        const response = await axios.post('/users/login', user)

        // console.log(response.data.token)

        if (response.status === 200) {
          // sparar till lokal storage där vi kan hämta data senare
          //
          sessionStorage.setItem("currentUser", JSON.stringify(response.data.user));

          // spara till state
          commit('IS_USER_LOGGED_IN', true);
          commit('SET_USER_TOKEN', response.data.token);
          commit('SET_USER_DATA', response.data.user);

        }
        // skickar tillbaka data till Login.vue
        return response.data;

      } catch (error) {
        console.log(error)
      }


    },

    getCurrentUser({ commit }) {
      commit('GET_USER_DATA')
    },

    // logga ut användare
    logOutUser({ commit }) {

      // rensar sessionstorage
      sessionStorage.clear()

      // spara till state
      commit('IS_USER_LOGGED_IN', false);
      commit('SET_USER_TOKEN', "");
      commit('SET_USER_DATA', {});

      return;
    }



  },

  // hämtar data från state xx
  getters: {

    user(state) {

      return state.user

    },

    //  { commit },
    userToken(state) {

      return state.userToken

    },

    isUserLoggedIn(state) {

      return state.isUserLoggedIn

    },

    messages(state) {
      return state.messages;
    }

  }



}
// slut på exports







