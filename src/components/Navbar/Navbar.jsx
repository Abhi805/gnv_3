// import React from 'react';
// import { Link } from 'react-router-dom';
// import './navbar.css';

// export default function Navbar() {
//   return (
//     <>
//       {/* Upper Fixed Navbar */}
//       <nav className="navbar navbar-expand-lg nav_t">
//         <div className="container-md">
//           <h5>gnvindia7@gmail.com</h5>
//           <h5>GNV India Entertainment</h5>
//           <h5>📞 9165671529</h5>
//         </div>
//       </nav>

//       {/* Niche wala navbar jo scroll ke sath move karega */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav_b">
//         <div className="container-fluid">
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNavDropdown">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link active" to='/'>Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to='/beautiful'>Features</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to='/beautiful'>Features</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to='/beautiful'>Features</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to='/beautiful'>Features</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to='/beautiful'>Features</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to='/beautiful'>Features</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to='/beautiful'>Features</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to='/beautiful'>Features</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to='/beautiful'>Features</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }


import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ background: "white", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="logo.png" alt="Logo" height="40" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="btn" style={{ backgroundColor: "#d90429", color: "white", borderRadius: "5px", padding: "8px 15px", marginRight: "10px" }} href="#">Get a Meeting</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn" style={{ backgroundColor: "#d90429", color: "white", borderRadius: "30px", padding: "8px 15px" }} href="tel:+9009081222">Get a Quote 9009-081-222</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

