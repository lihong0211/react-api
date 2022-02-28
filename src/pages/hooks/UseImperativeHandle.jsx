function Son(props, ref) {
  console.log(props)
  const inputRef = useRef(null)
  const [inputValue, setInputValue] = useState('')
  useImperativeHandle(ref, () => {
    const handleRefs = {
      /* 声明方法用于聚焦input框 */
      onFocus() {
        inputRef.current.focus()
      },
      /* 声明方法用于改变input的值 */
      onChangeValue(value) {
        setInputValue(value)
      }
    }
    return handleRefs
  }, [])
  return <div>
    <input
      placeholder="请输入内容"
      ref={inputRef}
      value={inputValue}
    />
  </div>
}

const ForwarSon = forwardRef(Son)

class Index extends React.Component {
  inputRef = null
  handerClick() {
    const { onFocus, onChangeValue } = this.cur
    onFocus()
    onChangeValue('let us learn React!')
  }
  render() {
    return <div style={{ marginTop: '50px' }} >
      <ForwarSon ref={node => (this.inputRef = node)} />
      <button onClick={this.handerClick.bind(this)} >操控子组件</button>
    </div>
  }
}
