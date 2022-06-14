import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
  constructor(props){
      super(props);
      this.state=
      {
       counter:1,
       list:[0]
      }
  }

  compute=(operator)=>{
    let sign=operator==='+'?1:-1;
    if(this.state.counter===1 && operator==='-'){
        sign=0;
    }
     let c =this.state.counter+sign;
     this.setState({
         counter:c,
         list:new Array(c).fill(0)
     })
  }

  render() {
    return (
      <div className='card m-3' key={this.props.value}>  
       <div className='card-header'>
           <div className='font-weight-bold'>
               {this.props.title?this.props.title:'Default title'} : {this.state.counter}
           </div>
        </div>
        <div className='ml-auto'>
            <button className='btn btn-primary m-2' onClick={()=>this.compute('+')}>+</button>
            <button className='btn btn-primary m-2' onClick={()=>this.compute('-')}>-</button>
        </div>
       <div className='card-body'>
           {
               this.state.list.map((v,index)=>
                 <span key={index}>{index}
                 <img width={100} src={this.props.image?this.props.image:'images/profile.png'} alt=''/>
                 </span>
               )
           }
       </div>
      </div>
    );
  }
}

export default Counter;