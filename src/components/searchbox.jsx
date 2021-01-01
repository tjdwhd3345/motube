import React, { Component } from 'react';

class Searchbox extends Component {
  inputRef = React.createRef();

  handleClick = (e) => {
    const keyWord = this.inputRef.current.value;
    console.log('handleClick', keyWord);
  };
  render() {
    return (
      <>
        <input ref={this.inputRef} type='text' className='search-input' />
        <button className='seach-btn' onClick={this.handleClick}>
          검색
        </button>
      </>
    );
  }
}

export default Searchbox;
