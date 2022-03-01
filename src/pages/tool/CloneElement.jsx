import React, { Component } from 'react'

// 劫持children element，然后通过cloneElement克隆element，混入props。
// 经典的案例就是 react-router中的Swtich组件，通过这种方式，来匹配唯一的 Route并加以渲染。

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
