import React from 'react';
import './style.scss';

export default class SearchInput extends React.Component {
  state = {
    searchValue: '',
  }

  render() {
    return <label className='SearchInput Header-SearchInput'>
      <input
        type = 'text'
        value = { this.state.searchValue }
        onChange = { this.handeSearchInput }
        placeholder = 'Поиск'
        className = 'Input Input_type_search'
      />
    </label>;
  }

  handeSearchInput = (ev) => {
    this.setState({
      searchValue: ev.target.value,
    });
  }
}
