import React,{ Component } from 'react';
import ReactDom from 'react-dom';
import Header from './components/header';

import JSON from './db.json';

import NewsList from './components/news_list';

// const App = () => {
//
//   console.log(JSON);
//
//     return (
//       <div>
//         <Header/>
//         <h1>Hello World!</h1>
//       </div>
//     )
// }


class App extends Component{

  constructor(props){
      super(props);
      this.state = {
        news:JSON,
        filtered:JSON
      }
  }

  filterNews(keywords){
    let filtered = this.state.news.filter((item)=>{
      return item.title.indexOf(keywords) > -1;
    })
    this.setState({filtered:filtered})
  }

  render(){
    return(
      <div>
        <Header newsSearch={keywords=>this.filterNews(keywords)}/>
        <NewsList news={this.state.filtered}/>
      </div>
    )
  }
}


ReactDom.render(<App/>,document.querySelector('#root'));
