import React from 'react'

export default function () {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark px-4" data-bs-theme={`dark`} style={{ position: 'fixed', width: '100%', top: '0', height: "60px" }}>
            <a className="navbar-brand">We are Hiring !!</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
