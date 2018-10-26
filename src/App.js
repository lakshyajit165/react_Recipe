import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';
import HttpsRedirect from 'react-https-redirect';


const API_KEY = "88a4147dedeb535dc7be1b83180ae268";



class App extends Component {

  state = {
    recipes: []
  }

  
  getRecipe = async(e) =>{
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=12`);
    
    const data = await api_call.json();

    this.setState({
      recipes: data.recipes
    });

    console.log(this.state.recipes);
  }

  componentWillMount = () =>{
    const json = localStorage.getItem("recipes"); 
    const recipes = JSON.parse(json);
    this.setState({recipes: recipes});
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes",recipes);
  } 
  
  

  render() {
    return (
      <HttpsRedirect>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title mr-auto"><i className="fa fa-search"></i>Recipe Search</h1>
            <p className="lead">Search to view to some lipsmacking recipes!</p>
          </header>
          <Form getRecipe={this.getRecipe}/>
          <Recipes recipes={this.state.recipes}/>
        </div>
      </HttpsRedirect>  
    );
  }
  
}

export default App;