import React from 'react'

class WarpComponent extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.newChildren = this.props.children.filter(item => React.isValidElement(item))
  }
  render() {
    return this.newChildren
  }
}
export default function IsValidElement() {
  return <div style={{ marginTop: '50px' }} >
    <WarpComponent>
      <div> my name is alien </div>
      这句话不会渲染出来,因为它不是一个合法的元素
    </WarpComponent>
  </div>
}

