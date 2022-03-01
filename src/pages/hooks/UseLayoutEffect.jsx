import React, { useRef, useLayoutEffect, useState, useCallback } from 'react'

// 因为在函数式组件里没有了 this 来存放一些实例的变量，所以 React 建议使用 useRef 来存放一些会发生变化的值，
// useRef 并不再单单是为了 DOM 的 ref 准备的，同时也会用来存放组件实例的属性。
// 在 updateText 完成对 text 的更新后，再在 useLayoutEffect (等效于 didMount 和 didUpdate) 里写入 textRef.current 中。
// 这样，在 handleSubmit 里取出的 textRef 中存放的值就永远是新值了。

// 本质上我们想要达成的目标是以下几点：

// 能充分利用一个函数式组件多次 render 时产生的相同功能的 callback
// callback 能不受闭包限制，访问到这个函数式组件内部最新的状态

function ExpensiveTree () {
  return (<div>一个很大的组件</div>)
}

function DemoUseLayoutEffect() {
  const [text, updateText] = useState('');
  const textRef = useRef();

  useLayoutEffect(() => {
    textRef.current = text; // 将 text 写入到 ref
  });

  const handleSubmit = useCallback(() => {
    const currentText = textRef.current; // 从 ref 中读取 text
    console.log(currentText);
    alert(currentText)
  }, [textRef]); // handleSubmit 只会依赖 textRef 的变化。不会在 text 改变时更新

  return (
    <>
      <input value={text} onChange={e => updateText(e.target.value)} />
      <ExpensiveTree onSubmit={handleSubmit} />
      <button onClick={handleSubmit}>提交</button>
    </>
  );
}
export default DemoUseLayoutEffect
