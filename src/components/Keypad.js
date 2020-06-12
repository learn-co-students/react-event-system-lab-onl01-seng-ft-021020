import React, { Component } from 'react';

export default class Keypad extends Component {

  loadingPassword = () => {
    console.log('Entering password...')
  }

  render() {
    return (
        <input onKeyUp={this.loadingPassword} type="password" />
    )
  }
}
