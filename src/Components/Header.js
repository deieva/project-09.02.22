import React from "react";
import '../Assets/CSS/Header.css';
function Header() {

    return (
        <div>

            <div class="brand-navigation col-sm-3">
                <div class="content">
                    {/* <img class="logo-nav" src="#"/>Team */}
                    <nav>
                        <ul class="navigation">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/products">Products</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                    <button class="button-dark">Lorem</button>
                </div>
            </div>
        </div>
    )
}

export default Header;