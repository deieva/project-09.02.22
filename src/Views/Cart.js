import React from 'react';
import '../Assets/CSS/Cart.css';
import $ from 'jquery';

function Cart() {
  $(function () {
    $("#showdiv1").on('click', function () {
      $("div[id^=div]").hide();
      $("#div1").show();
    });
    $("#showdiv2").on('click', function () {
      $("div[id^=div]").hide();
      $("#div2").show();
    });
  });

  return (
    <div>

      <div class="buttons">
        <i class="fa fa-th-large" id="showdiv1" aria-hidden="true"></i> &nbsp; <i class="fa fa-th-list" id="showdiv2" aria-hidden="true"></i>
      </div>

      <div class="container">
        <div id="div1">
          <section class="section-grid">
            <div class="grid-prod">
              <div class="prod-grid"><img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita" />
                <h3> Meeeeouw.</h3>
                <p>Then cats take over the world meowing chowing and wowing but behind the couch, or the door is opening! </p>
                <button class="btn"> Buy <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
              </div>
              <div class="prod-grid"><img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita" />
                <h3> Meeeeouw.  </h3>
                <p>Then cats take over the world meowing chowing and wowing but behind the couch, or the door is opening!</p>
                <button class="btn"> Buy <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
              </div>
              <div class="prod-grid"><img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita" />
                <h3> Meeeeouw. </h3>
                <p>Then cats take over the world meowing chowing and wowing but behind the couch, or the door is opening!</p>
                <button class="btn"> Buy <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
              </div>
              <div class="prod-grid"><img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita" />
                <h3> Meeeeouw. </h3>
                <p>Then cats take over the world meowing chowing and wowing but behind the couch, or the door is opening!</p>
                <button class="btn"> Buy <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
              </div>
              <div class="prod-grid"><img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita" />
                <h3> Meeeeouw. </h3>
                <p>Then cats take over the world meowing chowing and wowing but behind the couch, or the door is opening!</p>
                <button class="btn"> Buy <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
              </div>
              <div class="prod-grid"><img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita" />
                <h3> Meeeeouw. </h3>
                <p>Then cats take over the world meowing chowing and wowing but behind the couch, or the door is opening!</p>
                <button class="btn"> Buy <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
              </div>
            </div>
          </section>
        </div>
        <div id="div2" style={{ display: 'none' }}>
          <section class="section-list">
            <table>
              <tr>
                <td /><img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita" />
                <td />
                <td>
                  <h3> Meeeeouw. </h3>
                  <p>Then cats take over the world meowing chowing and wowing but behind the couch, or the door is opening!</p>
                  <button class="btn-list"> Buy <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
                </td>
              </tr>
              <tr>
                <td width="30%" /><img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita" />
                <td />
                <td>
                  <h3> Meeeeouw. </h3>
                  <p>Then cats take over the world meowing chowing and wowing but behind the couch, or the door is opening!</p>
                  <button class="btn-list"> Buy <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
                </td>
              </tr>
              <tr />
              <td width="30%" /><img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita" />
              <td />
              <td>
                <h3> Meeeeouw. </h3>
                <p>Then cats take over the world meowing chowing and wowing but behind the couch, or the door is opening!</p>
                <button class="btn-list"> Buy <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
              </td>
              <tr />
              <tr />
              <td width="30%" /><img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita" />
              <td />
              <td>
                <h3> Meeeeouw. </h3>
                <p>Then cats take over the world meowing chowing and wowing but behind the couch, or the door is opening!</p>
                <button class="btn-list"> Buy <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
              </td>
              <tr />
              <tr />
              <td width="30%" /><img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita" />
              <td />
              <td>
                <h3> Meeeeouw. </h3>
                <p>Then cats take over the world meowing chowing and wowing but behind the couch, or the door is opening!</p>
                <button class="btn-list"> Buy <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
              </td>
              <tr />
              <tr />
              <td width="30%" /><img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita" />
              <td />
              <td>
                <h3> Meeeeouw. </h3>
                <p>Then cats take over the world meowing chowing and wowing but behind the couch, or the door is opening!</p>
                <button class="btn-list"> Buy <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
              </td>
              <tr />
            </table>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Cart;