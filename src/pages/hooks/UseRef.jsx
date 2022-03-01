import React, { useRef } from 'react'

// 可以用来获取dom元素，或者class组件实例 。
// useRef时候，会创建一个原始对象，只要函数组件不被销毁，原始对象就会一直存在，那么我们可以利用这个特性，来通过useRef保存一些数据。

const DemoUseRef = () => {
  const dom = useRef(null)
  const handerSubmit = () => {
    /*  <div >表单组件</div>  dom 节点 */
    console.log(dom.current)
  }
  return <div>
    {/* ref 标记当前dom节点 */}
    <div ref={dom} >表单组件</div>
    <button onClick={() => handerSubmit()} >提交</button>
  </div>
}

export default DemoUseRef
