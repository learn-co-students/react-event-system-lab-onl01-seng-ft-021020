import React, {Component} from 'react'

class EyesOnMe extends Component {
  
  render(){
    return(
      <button onFocus={() => console.log('Good!')} onBlur={() => console.log('Hey! Eyes on me!')}>THIS IS A BUUUUUUUUUTTTTTTON</button>
    )
  }
}

export default EyesOnMe
