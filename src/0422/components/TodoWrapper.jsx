import { useState } from "react"
import CreateForm from "./CreateForm"
import Todo from "./Todo"

function TodoWrapper() {
    // 因為有N個todo，所以用陣列存放物件資料
    const [todos, setTodos] = useState([
        { content: '停車費', id: Math.random() },
        { content: '對發票', id: Math.random() },
    ])

    return (
        <div className="wrapper">
            <h1>待辦事項</h1>
            <CreateForm />
            {
                todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id} />
                })
            }
        </div>
    )
}
export default TodoWrapper
