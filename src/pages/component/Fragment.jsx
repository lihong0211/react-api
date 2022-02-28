import React, { Component } from 'react'

export default class Fragment extends Component {
  render() {
    return (
      // <React.Fragment>
      //   <li> 🍎🍎🍎 </li>
      //   <li> 🍌🍌🍌 </li>
      //   <li> 🍇🍇🍇 </li>
      // </React.Fragment>
      <>
        <li> 🍎🍎🍎 </li>
        <li> 🍌🍌🍌 </li>
        <li> 🍇🍇🍇 </li>
      </>
    )
  }
}
