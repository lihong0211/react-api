import React from 'react'

const DemoUseLayoutEffect = () => {
  const target = useRef()
  useLayoutEffect(() => {
    /*我们需要在dom绘制之前，移动dom到制定位置*/
    const { x, y } = getPositon() /* 获取要移动的 x,y坐标 */
    animate(target.current, { x, y })
  }, []);
  return (
    <div >
      <span ref={target} className="animate"></span>
    </div>
  )
}
export default DemoUseLayoutEffect
