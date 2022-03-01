import React, { memo } from 'react'

// React.memo和PureComponent作用类似，可以用作性能优化，React.memo 是高阶组件，函数组件和类组件都可以使用，
// 和区别PureComponent是 React.memo只能对props的情况确定是否渲染，而PureComponent是针对props和state。
// React.memo 接受两个参数，第一个参数原始组件本身，第二个参数，可以根据一次更新中props是否相同决定原始组件是否重新渲染。
// 是一个返回布尔值，true 证明组件无须重新渲染，false证明组件需要重新渲染，这个和类组件中的shouldComponentUpdate()正好相反 。
// React.memo: 第二个参数 返回 true 组件不渲染 ， 返回 false 组件重新渲染。
// shouldComponentUpdate: 返回 true 组件渲染 ， 返回 false 组件不渲染。


function TextMemo(props) {
  console.log('子组件渲染')
  if (props)
    return <div>hello,world</div>
}

const controlIsRender = (pre, next) => {
  console.log(pre, next)
  if (pre.number === next.number) { // number 不改变 ，不渲染组件
    return true
  } else if (pre.number !== next.number && next.number > 5) { // number 改变 ，但值大于5 ， 不渲染组件
    return true
  } else { // 否则渲染组件
    return false
  }
}

const NewTexMemo = memo(TextMemo, controlIsRender)

class Memo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 1,
      num: 1
    }
  }
  render() {
    const { num, number } = this.state
    return <div>
      <div>
        改变num：当前值 {num}
        <button onClick={() => this.setState({ num: num + 1 })} >num++</button>
        <button onClick={() => this.setState({ num: num - 1 })} >num--</button>
      </div>
      <div>
        改变number： 当前值 {number}
        <button onClick={() => this.setState({ number: number + 1 })} > number ++</button>
        <button onClick={() => this.setState({ number: number - 1 })} > number -- </button>
      </div>
      <NewTexMemo num={num} number={number} />
    </div>
  }
}

export default Memo
