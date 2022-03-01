import React from 'react'

class Text extends React.Component{
  render(){
      return <div>hello,world</div>
  }
}
// function WarpComponent(props){
//   console.log(props.children)
//   return props.children
// }

function WarpComponent(props){
  debugger
  const newChildren = React.Children.map(props.children,(item)=>item)

  React.Children.forEach(props.children,(item)=>console.log(item))

  const childrenCount =  React.Children.count(props.children)

  const newChidrenArray =  React.Children.toArray(props.children)

  // 报错： React.Children.only expected to receive a single React element child.
  // console.log(React.Children.only(props.children)) 

  console.log('childrenCount', childrenCount)
  console.log('newChidrenArray', newChidrenArray)
  console.log(newChildren)
  return newChildren
}

export default function Index(){
  return <div style={{ marginTop:'50px' }} >
      <WarpComponent>
          { new Array(3).fill(0).map(()=><Text/>) }
          <span>hello,world</span>
      </WarpComponent>
  </div>
}

