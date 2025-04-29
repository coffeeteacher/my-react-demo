import { useState } from "react"

function App() {
    const [curPage, setCurPage] = useState(1);

    const ShowPage1 = () => {
        return (
            <>
                <div id="page1">我是page1</div>
                <div id="page2" style={{ display: "none" }}>我是page2</div>
                <div id="page3" style={{ display: "none" }}>我是page3</div>
                <button id="btn2" onClick={() => { setCurPage(2) }}>第二步</button>
            </>
        )
    }


    const ShowPage2 = () => {
        return (
            <>
                <div id="page1" style={{ display: "none" }}>我是page1</div>
                <div id="page2" style={{ display: "block" }}>我是page2</div>
                <div id="page3" style={{ display: "none" }}>我是page3</div>
                <button id="btn1" onClick={() => { setCurPage(1) }}>第一步</button>
                <button id="btn3" onClick={() => { setCurPage(3) }}>第三步</button>
            </>
        )
    }

    const ShowPage3 = () => {
        return (
            <>
                <div id="page1" style={{ display: "none" }}>我是page1</div>
                <div id="page2" style={{ display: "none" }}>我是page2</div>
                <div id="page3" style={{ display: "block" }}>我是page3</div>
                <button id="btn2" onClick={() => { setCurPage(2) }}>第二步</button>
            </>
        )
    }


    return (
        <>
            {curPage === 1 ? <ShowPage1 /> : curPage === 2 ? <ShowPage2 /> : curPage === 3 ? <ShowPage3 /> : ''}
        </>
    )
}
export default App  