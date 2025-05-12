
import { useState, useMemo } from "react";

// const {VITE_APP_PATH}=import.meta.env;

export default function App() {
    // console.log(VITE_APP_PATH);


    const prodData = [
        {
            id: 1,
            title: 'apple',
            price: 80,
            imgUrl: './images2/01.jpg',
        },
        {
            id: 2,
            title: '眼鏡',
            price: 120,
            imgUrl: './images2/02.jpg',
        },
        {
            id: 3,
            title: '冰拿鐵',
            price: 200,
            imgUrl: './images2/03.jpg',
        },
        {
            id: 4,
            title: 'css',
            price: 160,
            imgUrl: './images2/04.jpg',
        },
        {
            id: 5,
            title: '冰美式',
            price: 120,
            imgUrl: './images2/05.jpg',
        },
    ];

    // 建立表格元件
    const ProdTable = ({ filterProds }) => {
        return (
            <table style={{ width: '500px', marginTop: '20px' }}>
                <tbody>
                    {
                        filterProds.map((prod) => {
                            return (
                                <tr key={prod.id}>
                                    <td style={{
                                        borderBottom: '1px dashed #ccc',
                                        padding: '5px',
                                        width: '300px',
                                    }}>
                                        <img src={prod.imgUrl} alt="" style={{
                                            width: '100px',
                                            verticalAlign: 'top',
                                        }} /><br />
                                        {prod.title}
                                    </td>
                                    <td style={{
                                        borderBottom: '1px dashed #ccc',
                                        padding: '5px',
                                        width: '200px',
                                        textAlign: 'right',
                                    }}>{prod.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }

    // 陣列變數，預設為原商品陣列的資料
    const [prods, setProds] = useState(prodData)
    // 排序變數，預設為遞增
    const [ascending, setAscending] = useState(true);
    // 搜尋變數
    const [search, setSearch] = useState('');

    // 建立排序與搜尋的函式
    const filterProds = useMemo(() => {
        return [...prods]
            .sort((a, b) => {
                return ascending ? a.price - b.price : b.price - a.price;
            })
            .filter((prod) => {
                return prod.title.match(search);
            })
    }, [ascending, search]);

    return (
        <>
            <h1>useMemo搜尋與排序</h1>
            <hr style={{ marginBottom: "20px" }} />
            升降冪：
            <input
                type="checkbox"
                checked={ascending}
                onChange={(e) => setAscending(e.target.checked)}
            />
            <br />
            搜尋：
            <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {/* 呼叫表格元件 */}
            <ProdTable filterProds={filterProds} />

        </>
    )
}