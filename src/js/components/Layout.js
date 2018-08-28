import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"
import { fetchUsersAPI } from "../actions/apiActions"

@connect((store) => {
  return {
    user: store.user.user,
    tweets: store.tweets.tweets,
    api : store.api.apiData
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    // this.props.dispatch(fetchUser())
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }

  getData(){
    this.props.dispatch(fetchUsersAPI())
  }

  render() {
    const { user, tweets, api } = this.props;
    const mappedData = api.map(d => <li key={d.id}>{d.title}</li>)
    return <div>
      <button onClick={this.getData.bind(this)}>load Users</button>
      <h1>{user.name}</h1>
      <ul>{mappedData}</ul>
    </div>
  }
}
