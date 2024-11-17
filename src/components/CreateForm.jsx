
import { useState } from "react"

function CreateForm({ addTodo }) {
  // 建立input內容變數
  const [content, setContent] = useState('');
  const handleSubmit = (e) => {
    // 取消網頁預設行為，不然會抓不到資料
    e.preventDefault();
    // 增加todo內容
    addTodo(content);
    // 清空input輸入列
    setContent('');
  }

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="輸入待辦事項"
        value={content}
        onChange={(e) => { setContent(e.target.value) }}
      // 雙向綁定 two-way binding
      // 當UI發生改變時，state會跟著改變
      // 當state發生改變時，UI也會跟著改變        
      />
      <button type="submit">加入</button>
    </form>
  )
}
export default CreateForm
