
import { useState } from "react"
import CreateForm from "./CreateForm"
import Todo from "./Todo"

function TodoWrapper() {

    // 因為有N個todo，所以用陣列存放
    // const [todos, setTodos] = useState(['繳停車費', '對發票']);
    // 因為陣列需要key屬性，因此改為陣列物件
    const [todos, setTodos] = useState([
        { content: '繳停車費', id: Math.random() },
        { content: '對發票', id: Math.random() },
    ]);

    // 建立加入新的todo內容
    // 使用...其餘運算子保留原陣列內容
    // 再加上新的物件內容
    const addTodo = (content) => {
        setTodos([...todos, { content: content, id: Math.random() }])
    }

    return (
        <div className="wrapper">
            <h1>待辦事項</h1>
            <CreateForm addTodo={addTodo} />
            {
                todos.map((todo) => {
                    // return <Todo />
                    // return <Todo todo={todo} />
                    return <Todo todo={todo} key={todo.id} />
                })
            }
        </div>
    )
}

export default TodoWrapper

