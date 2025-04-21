import img1 from "../assets/images/coffee.jpg"
function App() {
    return (
        <>
            <div>
                <a href={img1} data-lightbox="gp1" data-title="Photo1">
                    <img src={img1} alt="" width={200}/>
                </a>
            </div>

        </>
    )
}
export default App