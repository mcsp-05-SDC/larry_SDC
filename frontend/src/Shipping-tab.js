import React, {Component} from 'react';

export default class Shipping extends Component {
    constructor(props) {
      super(props);    
      this.state = { 
        
        
        };     
    }
    
  

  
    
    
    render() {
   
    
      return (
        
            <div className={this.props.class}>
            <div id={"shippingOptions"}><b>Shipping Options:</b>{this.props.product.shipop}</div>
            <div id={"shippingDetails"}><b>Shipping Details:</b>{this.props.product.shipdet}</div>
            <div id={"shippingReturn"}><b>Returns:</b>{this.props.product.shipret}</div>              
  
            </div>
       
      );
    }  
  }