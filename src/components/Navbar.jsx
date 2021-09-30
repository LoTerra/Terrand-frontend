import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg p-5">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Terrand</span>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link btn btn-outline-secondary text-black px-4" href="https://docs.terrand.dev" target="_blank">Docs</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}