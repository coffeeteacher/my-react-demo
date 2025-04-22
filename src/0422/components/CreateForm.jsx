import { useState } from "react"

function CreateForm() {
    // 建立input內容變數
    // const => 常數
    const [content, setContent] = useState('');

    return (
        <form className="create-form">
            <input
                type="text"
                placeholder="請輸入待辦事項"
                value={content}
                // 雙向綁定
                // 當UI發生內容異動時，state會跟著改變
                // 當state發生改變時，UI也會跟著改變
                onChange={(e) => {
                    setContent(e.target.value)
                }}
            />
            <button type="submit">加入</button>
        </form>
    )
}
export default CreateForm