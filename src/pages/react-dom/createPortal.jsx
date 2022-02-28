import React from 'react';
function WrapComponent({ children }) {
  const domRef = useRef(null)
  const [PortalComponent, setPortalComponent] = useState(null)
  React.useEffect(() => {
    setPortalComponent(ReactDOM.createPortal(children, domRef.current))
  }, [])
  return <div>
    <div className="container" ref={domRef} ></div>
    {PortalComponent}
  </div>
}

class Index extends React.Component {
  render() {
    return <div style={{ marginTop: '50px' }} >
      <WrapComponent>
        <div  >hello,world</div>
      </WrapComponent>
    </div>
  }
}

export default Index