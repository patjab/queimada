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
        <div className="ui huge header">Friends List</div>
        <div className="ui input fluid">
          <input type="text" className="" name="search" placeholder="search your friends" value={this.state.searchTerms} onChange={this.nameChangeHandler}/>
        </div>
        <div className="ui horizontal divider"></div>
      </div>
    )
  }
}
