
import { useState } from "react"

function EditForm({ todo, editTodo }) {
    // 建立input內容變數
    const [content, setContent] = useState(todo.content);
    const handleSubmit = (e) => {
        // 取消網頁預設行為，不然會抓不到資料
        e.preventDefault();
        editTodo(todo.id, content)
    }

    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="輸入待辦事項"
                value={content}
                onChange={(e) => { setContent(e.target.value) }}
            />
            <button type="submit">完成</button>
        </form>
    )
}

export default EditForm

