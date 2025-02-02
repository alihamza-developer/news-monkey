import React from 'react'
import { Link } from 'react-router-dom';

// Navbar
const Navbar = ({ categories }) => {

    const ucFirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsMonkey</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            categories.map((category, index) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        <Link className="nav-link" to={`/${category}`}>{ucFirst(category)}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
