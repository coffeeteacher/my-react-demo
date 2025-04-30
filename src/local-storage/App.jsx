import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import View from './components/View';

// 取得local storage資料
const getDatafromLS = () => {
    const data = localStorage.getItem('books');
    if (data) {
        return JSON.parse(data);
    } else {
        return []
    }
}

function App() {
    // 建立陣列，存取local storage資料
    // 預設為空陣列，會把之前的資料清空
    // const [books, setBooks] = useState([]);
    // 改寫這種寫法，才能保留最後一次的資料
    const [books, setBooks] = useState(getDatafromLS());

    // 建立資料變數
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');

    // 表單送出事件
    const handleAddBookSubmit = (e) => {
        // 取消預設動作
        e.preventDefault();
        // 建立物件
        let book = {
            title,
            author,
            isbn
        }
        setBooks([...books, book]);
        setTitle('');
        setAuthor('');
        setIsbn('');
    }

    // 刪除資料 from LS
    const deleteBook=(isbn)=>{
        console.log(isbn);
    }

    // 儲存資料到local storage
    useEffect(() => {
        // JSON.stringify() => 將值或物件轉為JSON字串
        localStorage.setItem('books', JSON.stringify(books));

        // JSON.parse() => 可以接收 JSON 字串，轉為 Javascript 物件或是值
    }, [books])

    return (
        <>
            <div className="wrapper">
                <h1>BookList App</h1>
                <p>使用Local Storage本地端存取</p>
                <div className="main">
                    {/* 左側 */}
                    <div className="form-container">
                        {/* autocomplete : 之前輸入過的值，是否自動帶入 */}
                        <form autoComplete='off' className="form-group" onSubmit={handleAddBookSubmit}>
                            <label>書名</label>
                            <input type="text" className='form-control' required onChange={(e) => setTitle(e.target.value)} value={title} />
                            <br />
                            <label>作者</label>
                            <input type="text" className='form-control' required onChange={(e) => setAuthor(e.target.value)} value={author} />
                            <br />
                            <label>ISBN#</label>
                            <input type="text" className='form-control' required onChange={(e) => setIsbn(e.target.value)} value={isbn} />
                            <br />
                            <button type='submit' className='btn btn-success btn-md'>
                                ADD
                            </button>
                        </form>
                    </div>
                    {/* 右側 */}
                    <div className="view-container">
                        {/* 有資料的畫面 */}
                        {
                            books.length > 0 &&
                            <>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>ISBN#</th>
                                                <th>Title</th>
                                                <th>Author</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <View books={books} deleteBook={deleteBook} />
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        }
                        {/* 沒有資料的畫面 */}
                        {books.length < 1 && <div>沒有資料</div>}
                    </div>
                </div>
            </div>
        </>
    )
}
export default App