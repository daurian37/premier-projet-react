import React, { Fragment } from 'react';

const Membre = ({nom, age, children, hideName, handleChange }) => {


// un prop c'est un paramètre qu'on va passer à un component de la même forme qu'on
//passe un attribut à une balise HTML 

  return (
    <Fragment>

      
    <input type="text" value={nom} onChange= {handleChange} />
      <br />

        <h2 style={{ backgroundColor: age >= 20 ? 'green' : 'red', color: 'white'}}> Membre de ma famille : {nom.toUpperCase()}</h2>
        <h2>Age : { age } ans</h2>
        <button onClick={ hideName }> X </button>
        { age >= 20 ? <p>je suis majeur</p> : <p>je suis mineur </p> }
        
             { children ? <strong>{children}</strong> : <Fragment />  }
             <hr />

    </Fragment>
  )
}

export default Membre