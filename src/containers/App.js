import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from './robots';
import Scroll from '../components/Scroll';
import './App.css';

//import { render } from '@testing-library/react';


//const state = {
  // robots: robots,
  // searchfield: ''
//}

class App extends Component {
   constructor() {
      super()
      this.state = {
      robots:[],
      //robots: robots,
      searchfield: ''
      }
     // console.log('1');
   }

   
  
componentDidMount() {

   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response=>{ return response.json();
   })
   //console.log('check');
   .then(users=> {this.setState({ robots: users});
  // console.log('2');
});
}
 onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
  //console.log(event.target.value);
  
  }
 
 
 render() {
     const filteredRobots = this.state.robots.filter(robots =>{
     return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
     })
     if (this.state.robots.length === 0) {
        return <h1>Loading</h1>
     } else {
    // console.log('3');
     return (
    <div className='tc'>
    <h1 className='f2'>RoboFriends</h1>
    <SearchBox searchChange={this.onSearchChange}/>
    <Scroll>
    <CardList robots={filteredRobots} />
    </Scroll>
    </div>
 );
}
}

}
export default App;