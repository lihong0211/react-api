
const number = useMemo(()=>{
  /** ....大量的逻辑运算 **/
 return number
},[ props.number ]) // 只有 props.number 改变的时候，重新计算number的值。


/* 用 useMemo包裹的list可以限定当且仅当list改变的时候才更新此list，这样就可以避免selectList重新循环 */
{useMemo(() => (
  <div>{
      selectList.map((i, v) => (
          <span
              className={style.listSpan}
              key={v} >
              {i.patentName} 
          </span>
      ))}
  </div>
), [selectList])}

/* 只有当props中，list列表改变的时候，子组件才渲染 */
const  goodListChild = useMemo(()=> <GoodList list={ props.list } /> ,[ props.list ])