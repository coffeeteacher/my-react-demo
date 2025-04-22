// 展示列表
// 使用props接收元件屬性
// function Todo(props) {
//     return (
//         <div className="todo">
//             <p>{props.todo}</p>            
//         </div>
//     )
// }

// 將props物件解構{元件屬性}
function Todo({todo}) {
    return (
        <div className="todo">
            <p>{todo.content}</p>            
        </div>
    )
}

export default Todo
