import React, { useContext } from "react"

const Context = React.createContext()

/* 用useContext方式 */
const DemoContext = () => {
  const value = useContext(Context)
  return <div> my name is {value.name} i am {value.age} years old</div>
}
/* 用Context.Consumer 方式 */
const DemoContext1 = () => {
  return <Context.Consumer>
    {(value) => <div> my name is {value.name} i am {value.age} years old</div>}
  </Context.Consumer>
}

const UseContext = () => {
  return <div>
    <Context.Provider value={{ name: 'alien', age: 18 }} >
      <DemoContext />
      <DemoContext1 />
    </Context.Provider>
  </div>
}

export default UseContext
