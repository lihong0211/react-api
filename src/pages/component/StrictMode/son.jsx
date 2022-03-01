import React, { Component } from 'react'

// trictMode目前有助于：

// ①识别不安全的生命周期。
// ②关于使用过时字符串 ref API 的警告
// ③关于使用废弃的 findDOMNode 方法的警告
// ④检测意外的副作用
// ⑤检测过时的 context API
export default class Son extends Component {
  UNSAFE_componentWillReceiveProps() {
  }
  render() {
    return <div className="box" />
  }
}