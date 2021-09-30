import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Terrand</span>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="https://docs.terrand.dev" target="_blank">Docs</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}