import React, { Component } from 'react';
import axios from 'axios';

export default class Gallery extends Component {
  constructor(props) {
      super(props);
      this.state={
          hits:[],
          currentPage:1,
          pageSize:10,
          currentKeyword:'paris'
      }
      
  }

  getHints(){
      
  }
    
  render() {
    return (
      <div> Gallery.. </div>
    );
  }
}
