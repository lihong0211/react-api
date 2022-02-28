import { Profiler } from 'react'
const index = () => {
  const callback = (...arg) => console.log(arg)
  return <div >
    <div >
      <Profiler id="root" onRender={callback}  >
        <>
          <li> 🍎🍎🍎 </li>
          <li> 🍌🍌🍌 </li>
          <li> 🍇🍇🍇 </li>
        </>
      </Profiler>
    </div>
  </div>
}

export default index

