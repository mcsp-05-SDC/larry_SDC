import React, {Component, Fragment} from 'react';
// import logo from './logo.svg';
import Detail from './Detail-tab'
import ProdImg from './ProdImg'



export default class App extends Component {
  constructor(props) {
    super(props);    
    this.state = { 
          detail: "show",
          ship: "hide",
          question: "hide",
          id: " ",
          prodInfo: null,
          detailS: "selected",
          shipS:"unselected",
          questionS:"unselected",
          buttonshow:true,
          
      
      }; 
      
  }
  
// add method for each tab click
//when you click detail it shows only the detail information
  clickDetail(){
    this.setState({detail: "show"})
    this.setState({ship: "hide"})
    this.setState({question: "hide"})
    this.setState({detailS: "selected"})
    this.setState({shipS:"unselected"})
    this.setState({questionS: "unselected"})
  }
  //when you click shipping it only shows the shipping information
  clickShip(){
    this.setState({ship: "show"})
    this.setState({detail: "hide"})
    this.setState({question: "hide"})
    this.setState({shipS: "selected"})
    this.setState({detailS:"unselected"})
    this.setState({questionS: "unselected"})
  }
  //when you click shipping it only shows the qna information
  clickQuestion(){
    this.setState({question: "show"})
    this.setState({detail: "hide"})
    this.setState({ship: "hide"})
    this.setState({questionS: "selected"})
    this.setState({detailS:"unselected"})
    this.setState({shipS: "unselected"})
  }
  //makes the detail tab show more information and less when clicked.
  showMore(){
    this.setState({buttonshow: !this.state.buttonshow})
  }
  

  
  
  componentDidMount(){  

    //event listener for the name being typed in and the submit button being clicked
    const buttonElement = document.getElementById('button');
    const inputBox = document.getElementById('searchbar')
    //self var pound to the app page this
      const self=this;

    buttonElement.addEventListener('click', function (event) {
      
      
        const id= inputBox.value
        fetch('/item/'+id)
        .then((res)=>{
          
          return res.json();
        }).then((data)=>{
          self.setState({prodInfo: data[0]})
          
        })
    
      
   
});
   
  }
  render() {
    //show more show less button conditional render button
    let buttonText;
    if(this.state.buttonshow===true){
      buttonText=<button type={"submit"} id={"show"}  className={this.state.detail} onClick={this.showMore.bind(this)}>Show More</button>
    }else{
      buttonText=<button type={"submit"} id={"show"}  className={this.state.detail} onClick={this.showMore.bind(this)}>Show Less</button>
    }
    //conditional render for either empty div or content based off of the state
    let display;
    if(this.state.prodInfo===null){
      display=  <div></div>

    }else{
      display= <Fragment> <ProdImg product={this.state.prodInfo} />
      <div id={"contain"}>
      <div className={'item-details'}>
      
        <h2>About this item </h2>
        <div className={"product-tabs"}>
          <div className={"tabs"}>
            <button type={"button"} className={this.state.detailS} onClick={this.clickDetail.bind(this)}><div className={"tab"} >Details</div> </button>
            <button type={"button"}  className={this.state.shipS} onClick={this.clickShip.bind(this)}><div className={"tab"} >Shipping and Returns</div></button>
            <button  type={"button"} className={this.state.questionS} onClick={this.clickQuestion.bind(this)}><div className={"tab"}  >Q&A</div></button>
          </div>
         <hr/>
         </div>
         <Detail show={this.state.buttonshow} classD={this.state.detail} classS={this.state.ship} classQ={this.state.question} product={this.state.prodInfo} />
        {buttonText}
        </div>        
      </div>
      </Fragment>
    }
  
    return (
      <div id={"main"}>
       {display}
      </div>
    );
  }  
}

