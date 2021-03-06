import React from 'react';
import Test from './Test'
const LazyComponent = React.lazy(() => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      default: () => <Test />
    })
  }, 2000)
}))

export default class index extends React.Component {
  render() {
    return <div className="context_box" style={{ marginTop: '50px' }}   >
      <React.Suspense fallback={<div className="icon" >加载中。。。</div>} >
        <LazyComponent />
      </React.Suspense>
    </div>
  }
}
