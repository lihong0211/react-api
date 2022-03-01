import React, { useRef, useEffect } from 'react';
/* eslint-disable */

// 由于属性代理的hoc，被包裹一层，所以如果是类组件，是通过ref拿不到原始组件的实例的，不过我们可以通过forWardRef转发ref。

function HOC(Component) {
  class Wrap extends React.Component {
    render() {
      const { forwardedRef, ...otherprops } = this.props
      return <Component ref={forwardedRef}  {...otherprops} />
    }
  }
  return React.forwardRef((props, ref) => <Wrap forwardedRef={ref} {...props} />)
}
class Index extends React.Component {
  componentDidMount() {
    console.log(666)
  }
  render() {
    return <div>hello,world</div>
  }
}
const HocIndex = HOC(Index, true)

export default () => {
  const node = useRef(null)
  useEffect(() => {
    /* 就可以跨层级，捕获到 Index 组件的实例了 */
    console.log(node)
    console.log(node.current)
  }, [])
  return <div><HocIndex ref={node} /></div>
}
