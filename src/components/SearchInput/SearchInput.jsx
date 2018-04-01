
import React from 'react';
export default class SearchInput extends React.Component {
  state = {
    searchValue: '',
  }

  render() {
    return <div>
      <label>Search:<input type = 'text' value = { this.state.value } onChange = { this.handeSearchInput }/></label>
    </div>;
  }

  handeSearchInput = (ev) => {
    this.setState({
      searchValue: ev.target.value,
    });
  }
}
