import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'

import './Todo.css'
import {addTodo,deleteTodo,removeTodo} from '../../actions/index'


const Todo = () => {

    const [inputData,setInputData] = useState("")
    const dispatch = useDispatch()
    const list = useSelector((state)=>state.todoReducers.list)

  return (
    <section id="main-div">      
        <div className='child-div'>
          <figure>
            <figcaption>Add your list here ✌</figcaption>
          </figure>
          <div className='add-items'>
            <input type="text" placeholder='✍ Add items...'
                value={inputData}
                onChange={(event)=>setInputData(event.target.value)} />
            <i className='fa fa-plus add-btn' onClick={()=>inputData!=="" && dispatch(addTodo(inputData),setInputData(""))}></i>
          </div>

          <div className='show-items'>
            {
              list.map((elem)=>{
                return(
                  <div className='each-item' key={elem.id}>
                    <h3>{elem.data}</h3>
                    <i className='far fa-trash-alt delete-btn' onClick={()=>dispatch(deleteTodo(elem.id))}></i>
                  </div>
                )
              })
            }
            
          </div>

          {
            list.length >0 &&
          <button onClick={()=>dispatch(removeTodo())}>Remove All</button>
          }

        </div>
    </section>   
  )
}

export default Todo