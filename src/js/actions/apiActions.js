import axios from "axios";

export function fetchUsersAPI() {
  return function(dispatch) {
    dispatch({type: "FETCH_TWEETS"});
    /* 
      http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
      If you get console errors due to bad data:
      - change "reacttest" below to any other username
      - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
    */
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({type: "FETCH_USER_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_REJECTED", payload: err})
      })
  }
}
