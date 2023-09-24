import React, { Fragment } from 'react'
import './Button.css'

const Button = ({ vieillir }) => {
  return (
    
<Fragment>

    <button onClick={vieillir}>
         Vieillir de 2 ans
   </button>

</Fragment>

  )
}

export default Button