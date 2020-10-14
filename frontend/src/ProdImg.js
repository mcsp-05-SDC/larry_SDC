import React, {Component} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'

export default class ProdImg extends Component {
    constructor(props) {
      super(props);    
      this.state = { 
          drop: false,
          zoom: null,
          
          item: "1"
        
        };     
    }
    
  
//method to set the state to the information recieved from the get request
  zoomPic(e){
    this.setState({zoom: e.target.value})
  }
  dropClick(){
      this.setState({drop: !this.state.drop})
  }
  quanityClick(e){
      
      
      this.setState({item: e.currentTarget.textContent})
      this.setState({drop: !this.state.drop})
  }
    
    
    render() {
        let prod;
        if(this.state.zoom === null){
            prod= <img src={this.props.product.image} id={"zoom"}></img>
        }else{
            prod= <img src={this.state.zoom} id={"zoom"}></img>
        }
        
        let dropdown;
        if(this.state.drop===false){
            dropdown= <div id={"dropdown"}>Quanity<button id={"drop"} type={"button"} onClick={this.dropClick.bind(this)}>{this.state.item}</button>
            
            </div>
        }else{
            dropdown=<div id={"dropdown"}>Quanity<button id={"drop"} type={"button"} onClick={this.dropClick.bind(this)}>{this.state.item}</button>
                         <div id={"dropdown"} onClick={(e)=>{this.quanityClick(e)}} > {"1"} </div>
                         <div id={"dropdown"} onClick={(e)=>{this.quanityClick(e)}}>{"2"}</div>
                         <div id={"dropdown"} onClick={(e)=>{this.quanityClick(e)}}>{"3"}</div>
                         <div id={"dropdown"} onClick={(e)=>{this.quanityClick(e)}}>{"4"}</div>
                         <div id={"dropdown"} onClick={(e)=>{this.quanityClick(e)}}>{"5"}</div>
                        
                         </div>
        }
   
    
      return (
        
            <div id={"prodimg"}>
                <button id={"carouselb"} onClick={(e)=>{this.zoomPic.bind(e)}}>
                    <img src={this.props.product.image} id={"carousel"}></img>
                </button>
                <div id={"zoomd"}>
                {prod}
                </div>
                <div id={"price"}>
                    {this.props.product.price}
                    {dropdown}
                </div>
            </div>
       
      );
    }  
  }