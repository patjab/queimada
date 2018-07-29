import React, {Component} from 'react'

export default class SearchFriendList extends Component {
  state = {
    searchTerms: ""
  }

  nameChangeHandler = (e) => {
    this.setState({searchTerms: e.target.value}, ()=>this.props.getSearchByName(this.state.searchTerms))
  }

  render() {
    return (
      <div id="SearchFriendList" style={{"textAlign":"center"}}>
        <br/>
        <input type="text" name="search" placeholder="search your friends" value={this.state.searchTerms} onChange={this.nameChangeHandler}/>
        <br/>
        <br/>
      </div>
    )
  }
}
