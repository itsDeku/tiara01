import React from 'react'

function Navbar() {
    const logout = () => {
        sessionStorage.removeItem('token')
        console.log('removed')
    }
    return (
        <nav>
            <div className="my-navbar navbar" >
                <div className="my-nav-brand" >
                    <span className="brand-logo iconify mx-1 my-2" data-inline="false" data-icon="mdi:palette" ></span>
                </div>
                <div className="nav-brand-name" >
                    <span className="brand-name">Tiara</span>
                </div>
                <div className="nav-search"  >
                    <span className="search-logo iconify mx-4 my-2" data-inline="false" data-icon="ant-design:search-outlined"></span>
                </div>
                <div className="nav-dehaze" data-toggle="offcanvas" >
                    <span className="dehaze-logo iconify mx-4  my-2" data-inline="false" data-icon="ic:round-dehaze"></span>
                </div>
            </div>
            <div className="navbar-collapse offcanvas-collapse bg-light text-dark" id="navbarsExampleDefault" >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="https://google.com">Dashboard <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://google.com">Notifications</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://google.com">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#/login" onClick={logout}>logOut</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown01">
                            <a className="dropdown-item" href="https://google.com">Action</a>
                            <a className="dropdown-item" href="https://google.com">Another action</a>
                            <a className="dropdown-item" href="https://google.com">Something else here</a>
                        </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
export default Navbar