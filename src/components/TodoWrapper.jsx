
import { useState } from "react"
import CreateForm from "./CreateForm"
import Todo from "./Todo"

function TodoWrapper() {

    // 因為有N個todo，所以用陣列存放
    // const [todos, setTodos] = useState(['繳停車費', '對發票']);
    // 因為陣列需要key屬性，因此改為陣列物件
    // const [todos, setTodos] = useState([
    //     { content: '繳停車費', id: Math.random() },
    //     { content: '對發票', id: Math.random() },
    // ]);

    // 因為要判定todo是否被點擊，所以要增加一個isCompleted屬性
    // 因為要判定todo是否修改，所以要增加一個isEdit屬性
    const [todos, setTodos] = useState([
        { content: '繳停車費', id: Math.random(), isCompleted: false, isEdit: false },
        { content: '對發票', id: Math.random(), isCompleted: false, isEdit: false },
    ]);

    // 建立加入新的todo內容
    // 使用...其餘運算子保留原陣列內容
    // 再加上新的物件內容
    const addTodo = (content) => {
        // setTodos([...todos, { content: content, id: Math.random() }])
        // 這裡也要新增一個屬性
        setTodos([...todos, { content: content, id: Math.random(), isCompleted: false, isEdit: false }])
    }

    // 建立刪除todo
    // 傳入被刪除的id    
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => {
            // 使用filter方法，保留不是被刪除的id
            return todo.id !== id
        }))
    }

    // 建立切換isCompleted屬性值函式，傳給Todo元件使用
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            // 檢查被點擊的id是否跟陣列中的id一樣
            // Yes => 1.取出todo 2.將isCompleted屬性反向(!=>Not)
            // No  => todo不變
            return todo.id === id
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo
        }))
    }

    // 建立切換isEdit屬性值函式，傳給Todo元件使用
    const toggleIsEdit = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, isEdit: !todo.isEdit }
                : todo
        }))
    }

    // 建立完成修改的函式
    // 修改完成會異動二個值
    // 1. content 為新的修改內容
    // 2. isEdit 改回 false
    const editTodo = (id, newContent) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, content: newContent, isEdit: false }
                : todo
        }))
    }

    return (
        <div className="wrapper">
            <h1>待辦事項</h1>
            <CreateForm addTodo={addTodo} />
            {
                todos.map((todo) => {
                    // return <Todo />
                    // return <Todo todo={todo} />
                    // 增加deleteTodo屬性給Todo元件
                    return <Todo todo={todo} key={todo.id}
                        deleteTodo={deleteTodo}
                        toggleCompleted={toggleCompleted}
                        toggleIsEdit={toggleIsEdit}
                        editTodo={editTodo}
                    />
                })
            }
        </div>
    )
}

export default TodoWrapper

