import React from "react";
import '../Assets/CSS/Home.css';
import $ from 'jquery';
function Home() {

    // page loading part
    setTimeout(function () {
        $('.inner div').addClass('done');

        setTimeout(function () {
            $('.inner div').addClass('page');

            setTimeout(function () {
                $('.pageLoad').addClass('off');

                $('body, html').addClass('on');
            }, 200)
        }, 200)
    }, 1500)


// welcome part
        setTimeout(function () {
            $("#main").removeClass("is-loading");
        }, 1800);
    return (
        <div>

            <div class="pageLoad">
                <div class="inner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div id="main" class="is-loading">
                <h1>
                    WELCOME
                </h1>
            </div>
]        </div>
    )
}

export default Home;