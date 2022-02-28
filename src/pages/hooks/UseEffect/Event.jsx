const DemoEffect = ({ a }) => {
  /* 模拟事件监听处理函数 */
  const handleResize = () => { }
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
  return (<div  >
  </div>)
}