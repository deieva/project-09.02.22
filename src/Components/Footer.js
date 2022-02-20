import React from "react";

function Footer() {
    return (
        <div>
            <div>
                <div class="footer">
                    <section>
                        <h3>XRIGADE</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </section>
                    <section>
                        <h3>LINKS</h3>
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact Us</a>
                    </section>
                    <section>
                        <h3>OTHER</h3>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms and Conditions</a>
                        <a href="#">Cookie Policy</a>
                    </section>
                    <section>
                        <h3>ANY QUESTIONS?</h3>
                        <a href="emailto:support@websitename.com"><span><i class="fa fa-envelope"></i></span><span>support@websitename.com</span></a>
                        <a href="tel:xxxxxxxxx"><span><i class="fa fa-phone"></i></span><span>(+x)-xxx-xxxx-xxxxx</span></a>
                    </section>
                </div>
            </div>
            <div class="sub-footer">
                Copyright ©2022 All rights reserved | Next Generation IT Solutions
            </div>

        </div>
    )
}

export default Footer;