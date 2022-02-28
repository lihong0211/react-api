/* 用useContext方式 */
const DemoContext = () => {
  const value = useContext(Context)
  /* my name is alien */
  return <div> my name is {value.name}</div>
}
/* 用Context.Consumer 方式 */
const DemoContext1 = () => {
  return <Context.Consumer>
    {/*  my name is alien  */}
    {(value) => <div> my name is {value.name}</div>}
  </Context.Consumer>
}

export default () => {
  return <div>
    <Context.Provider value={{ name: 'alien', age: 18 }} >
      <DemoContext />
      <DemoContext1 />
    </Context.Provider>
  </div>
}
