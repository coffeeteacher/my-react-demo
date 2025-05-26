import "./App.css"

export default function App() {
    return (
        <>
            <div className="wrap">
                {/* 導覽列 */}
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <span class="navbar-brand">Navbar</span>
                        <button class="btn btn-outline-success position-relative" type="button">
                            購物車
                            <span class="badge bg-danger position-absolute top-0 start-100 translate-middle">99</span>
                        </button>
                    </div>
                </nav>
                {/* 左右二區 */}
                <div className="container mt-4">
                    {/* 外層格線 */}
                    <div className="row">
                        <div className="col-md-7">
                            {/* 產品列表區 */}
                            {/* 內層格線 */}
                            <div className="row row-cols-3 g-3">
                                <div className="col">
                                    {/* 卡片元件 */}
                                    <div class="card">
                                        {/* 圖片unsplash */}
                                        <img src="https://images.unsplash.com/photo-1726064855955-5fe51cd6993c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h6 class="card-title">
                                                商品名稱
                                                <span className="float-end">NT$ 200</span>
                                            </h6>
                                            <button type="button" class="btn btn-outline-primary w-100">加入購物車</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    {/* 卡片二件 */}
                                    <div class="card">
                                        {/* 圖片unsplash */}
                                        <img src="https://images.unsplash.com/photo-1726064855955-5fe51cd6993c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h6 class="card-title">
                                                商品名稱
                                                <span className="float-end">NT$ 200</span>
                                            </h6>
                                            <button type="button" class="btn btn-outline-primary w-100">加入購物車</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    {/* 卡片二件 */}
                                    <div class="card">
                                        {/* 圖片unsplash */}
                                        <img src="https://images.unsplash.com/photo-1726064855955-5fe51cd6993c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h6 class="card-title">
                                                商品名稱
                                                <span className="float-end">NT$ 200</span>
                                            </h6>
                                            <button type="button" class="btn btn-outline-primary w-100">加入購物車</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    {/* 卡片二件 */}
                                    <div class="card">
                                        {/* 圖片unsplash */}
                                        <img src="https://images.unsplash.com/photo-1726064855955-5fe51cd6993c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h6 class="card-title">
                                                商品名稱
                                                <span className="float-end">NT$ 200</span>
                                            </h6>
                                            <button type="button" class="btn btn-outline-primary w-100">加入購物車</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            {/* 購物清單區 */}
                            <div className="bg-light p-3">
                                <table className="table align-middle">
                                    <tbody>
                                        <tr>
                                            <td><a href="#">X</a></td>
                                            <td>
                                                <img src="https://images.unsplash.com/photo-1726064855955-5fe51cd6993c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" class="table-img" alt="..." />
                                            </td>
                                            <td>產品名稱
                                                <br />
                                                <small className="text-muted">NT$ 220</small>
                                            </td>
                                            <td>
                                                <select name="" id="" className="form-select"></select>
                                            </td>
                                            <td className="text-end">NT$ 660</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td className="text-end" colSpan={5}>總金額 NT$ 660</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
