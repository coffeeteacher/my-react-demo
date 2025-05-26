import productsData from "../data/productsData"

export default function Products() {
    return (
        <>
            {/* 內層格線 */}
            <div className="row row-cols-3 g-3">
                {
                    productsData.map((product) => {
                        return (
                            <div className="col" key={product.id}>
                                <div className="card">
                                    {/* 圖片來源請自行到產品資料檔複製 */}
                                    <img src={product.img}
                                        className="card-img-top"
                                        alt="..." />
                                    <div className="card-body">
                                        <h6 className="card-title">
                                            {product.title}
                                            <span className="float-end">NT$ {product.price}</span>
                                        </h6>
                                        <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}