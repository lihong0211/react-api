import React, { Component } from 'react'

function FatherComponent({ children }) {
  const newChildren = React.cloneElement(children, { age: 18 })
  return <div> {newChildren} </div>
}
function SonComponent(props) {
  console.log(props)
  return <div>hello,world</div>
}

export default class CloneElement extends Component {
  render() {
    return (
      <div>
        <FatherComponent>
          <SonComponent name="lihong" />
        </FatherComponent>
      </div>
    )
  }
}
