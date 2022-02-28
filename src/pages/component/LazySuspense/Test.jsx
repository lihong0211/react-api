import React from 'react';
import son from './son.jpg'
export default class Test extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  componentDidMount() {
    console.log('--componentDidMount--')
  }
  render() {
    return <div>
      <img src={son} className="son" alt={'test'} />
    </div>
  }
}
