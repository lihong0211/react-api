import React, { Component } from 'react'

export default class CreateRef extends Component {
  constructor(props) {
    super(props)
    this.node = React.createRef()
  }
  componentDidMount() {
    console.log(this.node)
  }
  render() {
    return (
      <div ref={this.node}>
        my name is lihong
      </div>
    )
  }
}
