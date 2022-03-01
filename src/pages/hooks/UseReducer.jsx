import React, { useReducer } from 'react'

// useReducer 接受的第一个参数是一个函数，我们可以认为它就是一个 reducer ,
// reducer 的参数就是常规 reducer 里面的 state 和  action ,返回改变后的 state , 
// useReducer 第二个参数为 state 的初始值 
// 返回一个数组，数组的第一项就是更新之后 state 的值 ，第二个参数是派发更新的 dispatch 函数。


function MyChildren (props) {
  console.log(props)
  return (
    <div>子组件</div>
  )
}

const DemoUseReducer = () => {
  /* number为更新后的state值,  dispatchNumbner 为当前的派发函数 */
  const [number, dispatchNumbner] = useReducer((state, action) => {
    const { payload, name } = action
    /* return的值为新的state */
    switch (name) {
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      case 'reset':
        return payload
      default: return state
    }
  }, 0)
  return <div>
    当前值：{number}
    { /* 派发更新 */}
    <button onClick={() => dispatchNumbner({ name: 'add' })} >增加</button>
    <button onClick={() => dispatchNumbner({ name: 'sub' })} >减少</button>
    <button onClick={() => dispatchNumbner({ name: 'reset', payload: 666 })} >赋值</button>
    { /* 把dispatch 和 state 传递给子组件  */}
    <MyChildren dispatch={dispatchNumbner} State={{ number }} />
  </div>
}

export default DemoUseReducer
