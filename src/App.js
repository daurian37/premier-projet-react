import { Component } from 'react';
import React, { Fragment } from 'react';
import './App.css';
import Membre from './components/Membre';
import Button from './components/Button';
// c'est dans le fichier App que l'on stock ses données et on le distribue dans tout les composants de notre apk
      const famille = {

        membre1: {
          nom: 'Marie',
          age: 30,
          sexe: 'Femme',
        },

        membre2: {
          nom: 'Antho',
          age: 20,
          sexe: 'Homme',
        },

        membre3: {
          nom: 'Espoir',
          age: 20,
          sexe: 'Homme',
        },

        membre4: {
          nom: 'Best Blair',
          age: 10,
          sexe: 'Homme',
        },
      }

class App extends Component {

  state = {
    famille: famille,
    isShow: false
  }

  handleClick = (num) => {
    
    const famille = { ...this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
  }


  handleChange = (event, id) => {

    //on copie notre state
    const famille = { ...this.state.famille }
    
    // on effectue les modifs
    const nom = event.target.value
    famille[id].nom = nom

    //on met à jour le state
    this.setState({ famille })
  
  }


  handleShowDescription = () => {
    const isShow =!this.state.isShow
    this.setState({ isShow})
  }

  hideName = (id) => {

    const famille = { ...this.state.famille }
    famille[id].nom = 'X'
    this.setState({ famille })
  
  }


  render(){

    const { famille, isShow } = this.state

    let description = null

    if(isShow){
      description = <strong>Je suis un chien</strong> 
    }

    const list = Object.keys(famille).map((membre) => (

      <Membre 
        key={membre}
        handleChange={ event => this.handleChange(event, membre) }
        hideName = {() => this.hideName(membre)}
        nom={famille[membre].nom}
        age={famille[membre].age}/>

    ))

    console.log(list)

      return(
 
    <Fragment>
      {/* commentaire  */}
    <div className="App">
      <h1>Hello world ! </h1>

        { list }

        <br />

        { description }

        <br />
        
        <button onClick={this.handleShowDescription}>
        {
          !isShow ? 'Montrer' : 'Cacher'
          
        }
        </button>

        

        <Button 
            vieillir = {() => this.handleClick(2)} />
    </div>


    </Fragment>

    );
  }
}
export default App;
