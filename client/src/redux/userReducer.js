import produce from 'immer';
import createReducer from "./ReducerUtils";



const initialState = {

    user: {
        id: "",
        name: "",
        email: "",
        city: "",
        phone: "",
        age: "",
        currentUser: "",
        users: []
    },
}



const users = {
    setId(state, action) {
      debugger
      state.user.id = action.payload;
},
    setName(state, action) {
      debugger
      state.user.name = action.payload;
    },
    setEmail(state, action) {
        state.user.email = action.payload;
    },
    setCity(state, action) {
        state.user.password = action.payload;
    },
    setPhone(state, action) {
        state.user.phone = action.payload;
    },
    setAge(state, action) {
        state.user.age = action.payload;
    },
    setUser(state, action) {
        state.user.currentUser = action.payload;
      },
      allUsers(state, action) {
        state.user = action.payload;
      },
    
  };
  
  
  export default produce((state, action) => createReducer(state, action, users), initialState);

