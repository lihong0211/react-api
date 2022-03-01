import React from 'react'

// react不允许ref通过props传递，因为组件上已经有 ref 这个属性,在组件调和过程中，已经被特殊处理，
// forwardRef出现就是解决这个问题，把ref转发到自定义的forwardRef定义的属性上，让ref，可以通过props传递。

function Son(props) {
  const { grandRef } = props
  return <div>
    <div> i am alien </div>
    <span ref={grandRef} >这个是想要获取元素</span>
  </div>
}

class Father extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return <div>
      <Son grandRef={this.props.grandRef} />
    </div>
  }
}

const NewFather = React.forwardRef((props, ref) => <Father grandRef={ref}  {...props} />)

class GrandFather extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  node = null
  componentDidMount() {
    console.log(this.node)
  }
  render() {
    return <div>
      <NewFather ref={(node) => this.node = node} />
    </div>
  }
}

export default GrandFather