import { useState } from "react"

// 建立元件（字首名稱大寫）
function Card({ person }) {
    // 解構資料
    const {name, age}=person

    return (
        <div className="card">
            <div className="card-body">
                {/* Hi, React */}
                {/* 一般寫法 */}
                {/* Hi, {person.name} */}
                {/* 解構寫法 */}
                Hi, {name} 今年 {age} 歲
            </div>
        </div>
    )
}

function App() {
    // 取出特定值作為變數
    const person = {
        name: '健仔',
        age: '10',
    }

    // 一般寫法
    // const name=person.name;
    // const age=person.age;
    // console.log(name, age);

    // 物件解構
    // const { name, age } = person;
    // console.log(name,age);

    // useState - ReactHook
    // const [person, setPerson] = useState({
    //     name: '健仔',
    //     age: '10'
    // });

    return (
        <>
            {/* 第一個person => 元件屬性 */}
            {/* 第二個person => 變數（可以是任何型式） */}
            <Card person={person}></Card>
            <Card person={person} />
        </>
    )
}
export default App