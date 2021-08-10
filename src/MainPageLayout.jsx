import React,{useState} from 'react'
import Header from './header'
import data from './Data.json'
import ToDoList from './ToDoList';

export default function MainPageLayout() {
    const [ toDoList, setToDoList ] = useState(data);
    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
          return task.id == id ? { ...task, complete: !task.complete } : { ...task};
        });
        setToDoList(mapped);
      }
    return (
        <div>
            <Header/>
            <ToDoList toDoList={toDoList} handleToggle={handleToggle}/>
        </div>
    )
}
