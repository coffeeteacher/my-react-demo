import { Icon } from "react-icons-kit"
import { trash } from "react-icons-kit/feather/trash"


function View({ books, deleteBook }) {
    // console.log(books);
    return books.map(book => (
        <tr key={book.isbn}>
            <td>{book.isbn}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td className="delete-btn" onClick={() => deleteBook(book.isbn)}>
                <Icon icon={trash} />
            </td>
        </tr>
    ))
}
export default View