import React from 'react';
import Art from './Components/Art';
import Web from './Components/Web';
import './App.css';

export class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      ArtOn : true,
      WebOn : true,

    }
  }

  artportfolioclick(e){
    this.setState({
      WebOn: false
    })
  }

  render(){
    return (
      <div className="App">
        <div className='box'>
         <Art ArtOn={this.state.ArtOn} artportfolioclick={this.artportfolioclick.bind(this)}/>
         <Web WebOn={this.state.WebOn}/>
        </div>
  
      </div>
    );
  }

}

export default App;
