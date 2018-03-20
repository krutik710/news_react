import React,{ Component } from 'react';


// const Header = () => {
//   return (
//       <div>
//         <h4>Header</h4>
//         <h3>Header</h3>
//       </div>
//   )
// }

class Header extends Component{

  constructor(props){
    super(props);

    this.state = {
      // title:"Yo man!",
      keywords:""
    }
  }

  inputChange(event){
    this.setState({keywords:event.target.value})
  }

  render(){

    // const styles = {
    //   header:{
    //     background:'#030030'
    //   }
    // }


    return(
      <header>
        <div className="logo" onClick={()=>{console.log('hi');}}>Logo</div>
        <input onChange={this.inputChange.bind(this)}/>
      </header>
    )
  }
}

export default Header;
