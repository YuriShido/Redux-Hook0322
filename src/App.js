import React from 'react'
import ToDoList from './components/ToDoList'
import './styles.css'
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const toDoList = useSelector((state) => state.toDoList)
  console.log(toDoList)
  return (
    <div className='container'>
      <h1 className='center blue-text'>ToDo's ({toDoList.length})</h1>
      <ToDoList />
    </div>
  )
}
// const mapStateToProps = (state) => {
//   // console.log(state)
//   return {
//     toDoList: state.toDoList,
//   }
// }

export default App