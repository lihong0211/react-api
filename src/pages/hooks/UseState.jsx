import React, { useState } from 'react';

// useState可以弥补函数组件没有state的缺陷。useState可以接受一个初识值，也可以是一个函数action，action返回值作为新的state。
// 返回一个数组，第一个值为state读取值，第二个值为改变state的dispatchAction函数。


const UseState = (props) => {
  /* number为此时state读取值 ，setNumber为派发更新的函数 */
  let [number, setNumber] = useState(0) /* 0为初始值 */
  return (
    <div>
      <span>{number}</span>
      <button onClick={() => {
        setNumber(number + 1) /* 写法一 */
        setNumber(number => number + 1) /* 写法二 */
        console.log(number) /* 这里的number是不能够即时改变的  */
      }} >num++</button>
    </div>
  )
}

export default UseState
