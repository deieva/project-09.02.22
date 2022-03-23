import React from "react";
import '../Assets/CSS/Header.css';
import $ from 'jquery';

function Header() {
    $(function(){
        // this will get the full URL at the address bar
        var url = window.location.href; 
    
        // passes on every "a" tag 
        $("#nav-tools a").each(function() {
                // checks if its the same on the address bar
            if(url == (this.href)) { 
                $(this).closest("a").addClass("active");
            }
        });
    });

    return (
        <div>
            <header id="container">
                <div id="nav-bar">
                    <div id="nav-belt">
                        <div class="nav-left">
                            <div id="nav-logo">
                                <a href="/">MOUNTAINN</a>
                            </div>
                        </div>
                        {/* <div class="nav-fill">
                            <div id="nav-search">
                                <form id="nav-search-bar-form">
                                    <div class="nav-left">
                                        <a href="">ALL</a>
                                    </div>
                                    <div class="nav-fill">
                                        <input type="text" />
                                    </div>
                                    <div class="nav-right">
                                        <button type="submit">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div> */}
                        <div class="nav-right">
                            <div id="nav-tools">
                                <a href="/language">Language</a>
                                <a href="/login">Log in</a>
                                <a href="/cart">Cart</a>
                            </div>
                        </div>
                    </div>
                    <div id="nav-main">
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Header;