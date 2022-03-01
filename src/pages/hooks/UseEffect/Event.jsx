import { useEffect } from 'react'
// useEffect可以用作事件监听，还有一些基于dom的操作。,别忘了在useEffect第一个参数回调函数，返一个函数用于清除事件监听等操作。

const DemoEffect = ({ a }) => {

  /* 模拟事件监听处理函数 */
  const handleResize = () => { console.log('resize') }
  useEffect(() => {
    /* 定时器 延时器等 */
    const timer = setInterval(() => console.log(666), 1000)
    /* 事件监听 */
    window.addEventListener('resize', handleResize)
    /* 此函数用于清除副作用 */
    return function () {
      clearInterval(timer)
      window.removeEventListener('resize', handleResize)
    }
  }, [a])
  return (<div></div>)
}

export default DemoEffect