import React from 'react'
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
