function Todo({todo}) {
    return (
        <div className="todo">
            {/* <p>繳手機費</p> */}
            {/* <p>{todo}</p> */}
            {/* 因為改為陣列物件，所以todo內容為content */}
            <p>{todo.content}</p>
        </div>
    )
}
export default Todo
