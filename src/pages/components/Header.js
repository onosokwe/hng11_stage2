import React from "react";
import logo from "../../assets/logo.png";

function Header() {

    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <a href="/" className="d-flex align-items-center">
                        <img className="logo" src={logo} alt="logo" style={{height: 40}} width={100} />
                    </a>

                    <div style={{marginLeft: 20, }}>
                        <input type="search" className="form-control" placeholder="search" style={{minWidth: 350}}/>
                    </div>


                    <div style={{marginLeft: 20}}>
                        <i className='fa fa-heart fa-1x' style={{color:'black', marginRight: 15 }}></i>
                        <i className='fa fa-shopping-cart fa-1x' style={{color:'black' }}></i>
                    </div>

                </div>

            </header>
        </>
    );
}

export default Header;
