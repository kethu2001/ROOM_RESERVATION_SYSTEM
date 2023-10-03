// import React from 'react'

// function Navbar() {

//     const user = JSON.parse(localStorage.getItem('currentUser'))


//     function logout() {

//         localStorage.removeItem('currentUser')
//         window.location.href = "/login"

//     }
//     return (

//         <div>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <a className="navbar-brand" href="/home">Shey Rooms</a>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
//                 aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

//                     <span className="navbar-toggler-icon" ><i className="fa-light fa-bars" style={{ color: 'white' }}
//                     ></i></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav mr-2">

//                         {user ? (
//                             <><div className="dropdown">

//                                 <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

//                                     <i classNamw="fa fa-user"></i>{user.name}

//                                 </button>

//                                 <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

//                                     <a className="dropdown-item" href="#">Booking</a>
//                                     <a className="dropdown-item" href="#" onClick={logout}>Logout</a>

//                                 </div>
//                             </div>
//                             </>
//                         ) : (

//                             <>

//                                 <li className="nav-item active">
//                                     <a className="nav-link" href="/register">Register
//                                     </a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="/login">Login
//                                     </a>
//                                 </li>

//                             </>

//                         )}

//                     </ul>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default Navbar





























import React from 'react'

function Navbar() {
    let user;
    if (localStorage.getItem('currentUser') && localStorage.getItem('currentUser') !== 'undefined') {
        user = JSON.parse(localStorage.getItem('currentUser'));
    }
    function logout() {
        localStorage.removeItem('currentUser');
        window.location.href = '/login'
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <a className="navbar-brand" href="/home">
                    KETHU ROOMS
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i class="fa-solid fa-bars" style={{ color: 'white' }}></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-5">
                        {user ? (<>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className='fa fa-user' ></i> {user.name}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="/profile">Profile</a>
                                    <a className="dropdown-item" href="/login" onClick={logout}>Logout</a>
                                </div>
                            </div>
                        </>
                        ) : (
                            <>
                                <li className="nav-item active">
                                    <a className="nav-link a1" href="/register">Register</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link a1" href="/login">Login</a>
                                </li>

                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar