import { useContext } from 'react';
import { CartContext } from '../store';

export default function Navbar() {
    const [state] = useContext(CartContext);
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">Navbar</span>
                <button className="btn btn-outline-success position-relative" type="button">
                    購物車
                    <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                        {/* 99 */}
                        {state.cartList.length}
                    </span>
                </button>
            </div>
        </nav>
    )
}