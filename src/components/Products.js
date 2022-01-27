import React from 'react';
import products from '../products.json';
export default function Products() {
    return (
        <div>
            <h1>Products</h1>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/" >Cart</a>
                </li>
            </ul>
            <h3 className="heading m-3 p-3">Products</h3>

            <div className="row" style={{ marginLeft: "60px" }}>
                {products.products.map((item, i) => (
                    <div className="col-sm-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" key={i} src={`${item.images}`} alt={"images"} />
                            <div className="card-body">
                                <h5 className="card-title" key={i}>{item.pname}</h5>
                                <p className="card-text">${item.price}</p>
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
        </div>
    );
}

