import React, { useState, useMemo } from 'react'

// const memoizedResult = useMemo(compute, dependencies);

// 在初始渲染期间，useMemo( compute, dependencies ) 调用 compute，记忆计算结果，并将其返回给组件。
// 如果在下一次渲染期间依赖项没有改变，则 useMemo() 不会调用 compute 但返回记忆值。
// 但是，如果在重新渲染期间依赖项发生变化，则 useMemo() 调用 compute，记忆新值并返回它。这就是 useMemo() 钩子的本质。

// 1 缓存一些值，避免重新执行上下文
// 2 减少不必要的dom循环
// 3 减少子组件渲染

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [dep, setDep] = useState(0)
    console.log("render")
    const total = () => {
        console.log("get total")
        return 2 * count
    }
    const memoTotal = useMemo(() => {
        console.log("get memoTotal")
        return 2 * count
    }, [count])
    function changeDep() {
        setDep(dep + 1)
    }
    function changeCount() {
        setCount(count + 1)
    }
    return (
        <div>
            <h2>useMemo</h2>
            <button onClick={changeDep}>change dep</button>
            <button onClick={changeCount}>change count</button>
            <div>
                dep: { dep }
            </div>
            <div>
                count: { count }
            </div>
            <div>
                total: { total() }
            </div>
            <div>
                memo total: { memoTotal }
            </div>
        </div>
    )
}

export default UseMemo