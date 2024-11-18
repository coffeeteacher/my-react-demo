
import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

// 解構deleteTodo屬性
function Todo({ todo, deleteTodo, toggleCompleted, toggleIsEdit, editTodo }) {
    return (
        todo.isEdit ? <EditForm todo={todo} editTodo={editTodo} />
            // 1. 新增一個completed類別控制css變化
            // 2. 使用反引號搭配三元運算子檢查isCompleted
            // 如果true => 套用completed類別規則，反之，不套用規則
            : <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>               

                {/* 因為改為陣列物件，所以todo內容為content */}
                <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>
                
                {/* 因為todo的css，使用space-between排列，造成icon分散，所以在icon外包一層div解決此問題 */}
                <div>
                    {/* 修改icon */}
                    <MdEdit onClick={() => { toggleIsEdit(todo.id) }} style={{ cursor: 'pointer' }} />
                    {/* 刪除icon */}
                    <MdDelete
                        onClick={() => { deleteTodo(todo.id) }}
                        style={{ cursor: 'pointer', marginLeft: '5px' }}
                    />
                </div>
            </div>
    )
}

export default Todo

