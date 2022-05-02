import React from 'react';
import '../Assets/CSS/Cart.css';
import gsap from 'gsap';
import Flip from 'gsap/Flip';
import CustomWiggle from 'gsap/CustomWiggle';

function Cart() {
    gsap.registerPlugin(Flip, CustomWiggle);

CustomWiggle.create("cartButtonWiggle", { wiggles: 8, type: "easeOut" });

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
  .matches;
const pageItems = document.querySelector(".content .items");
const cart = document.querySelector(".cart");
const cartBtnWrapper = cart.querySelector(".btn-cart-wrapper");
const cartBtn = cart.querySelector(".btn-cart");
const cartCount = cart.querySelector(".count");
const cartItems = cart.querySelector(".items");
const cartEmptyText = cart.querySelector(".empty-text");

const setInCartClass = (item, inCart) =>
  item.parentNode.classList.toggle("in-cart", inCart);
const setActiveItemClass = (item, isActive) =>
  item.parentNode.classList.toggle("active", isActive);

const updateCart = (item) => {
  const hasItems = cartItems.children.length > 0;

  cartCount.innerText = hasItems ? cartItems.children.length : null;
  cartEmptyText.hidden = hasItems;
  cartItems.hidden = !hasItems;
};

const cartBtnAnimation = () => {
  gsap
    .timeline()
    .fromTo(
      cartBtn,
      { yPercent: 0, rotation: 0 },
      {
        duration: 0.9,
        ease: "cartButtonWiggle",
        yPercent: 20,
        rotation: -5,
        clearProps: "all"
      }
    )
    .fromTo(
      cartCount,
      { rotation: 0 },
      {
        duration: 1.3,
        ease: "power4.out",
        rotation: 720,
        y: -30
      },
      "<"
    )
    .to(
      cartCount,
      {
        duration: 0.8,
        ease: "elastic.out(1, 0.3)",
        y: 0,
        clearProps: "all"
      },
      "-=0.6"
    );
};

const addToCart = (item) => {
  const state = Flip.getState(item);

  setInCartClass(item, true);
  setActiveItemClass(item, true);
  cartBtnWrapper.appendChild(item);

  Flip.from(state, {
    duration: reducedMotion ? 0 : 0.5,
    ease: "back.in(0.8)",
    onComplete: () => {
      setActiveItemClass(item, false);
      cartItems.appendChild(item);

      gsap.fromTo(
        item,
        { y: -12 },
        {
          y: 0,
          duration: reducedMotion ? 0 : 1,
          ease: "elastic.out(1, 0.3)"
        }
      );

      updateCart(item);
      !reducedMotion && cartBtnAnimation();
    }
  });
};

const removeFromCart = (item) => {
  let state = Flip.getState(item);

  document
    .querySelector(`[data-product-id="${item.dataset.productId}"]`)
    .appendChild(item);
  updateCart(item);
  setActiveItemClass(item, true);

  Flip.from(state, {
    duration: reducedMotion ? 0 : 0.5,
    ease: "power4.out",
    onComplete: () => {
      setActiveItemClass(item, false);
      setInCartClass(item, false);
    }
  });
};

pageItems.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-item")) {
    addToCart(e.target);
  }
});

cartItems.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-item")) {
    removeFromCart(e.target);
  }
});

cartBtn.addEventListener("click", () => cart.classList.toggle("open"));


    return (
        <div>
            <main className="content">
                <ul className="items">
                    <li className="item" data-product-id="1">
                        <button className="btn-item" data-product-id="1">1</button>
                    </li>
                    <li className="item" data-product-id="2">
                        <button className="btn-item" data-product-id="2">2</button>
                    </li>
                    <li className="item" data-product-id="3">
                        <button className="btn-item" data-product-id="3">3</button>
                    </li>
                    <li className="item" data-product-id="4">
                        <button className="btn-item" data-product-id="4">4</button>
                    </li>
                    <li className="item" data-product-id="5">
                        <button className="btn-item" data-product-id="5">5</button>
                    </li>
                    <li className="item" data-product-id="6">
                        <button className="btn-item" data-product-id="6">6</button>
                    </li>
                    <li className="item" data-product-id="7">
                        <button className="btn-item" data-product-id="7">7</button>
                    </li>
                    <li className="item" data-product-id="8">
                        <button className="btn-item" data-product-id="8">8</button>
                    </li>
                    <li className="item" data-product-id="9">
                        <button className="btn-item" data-product-id="9">9</button>
                    </li>
                    <li className="item" data-product-id="10">
                        <button className="btn-item" data-product-id="10">10</button>
                    </li>
                    <li className="item" data-product-id="11">
                        <button className="btn-item" data-product-id="11">11</button>
                    </li>
                    <li className="item" data-product-id="12">
                        <button className="btn-item" data-product-id="12">12</button>
                    </li>
                    <li className="item" data-product-id="13">
                        <button className="btn-item" data-product-id="13">13</button>
                    </li>
                    <li className="item" data-product-id="14">
                        <button className="btn-item" data-product-id="14">14</button>
                    </li>
                    <li className="item" data-product-id="15">
                        <button className="btn-item" data-product-id="15">15</button>
                    </li>
                    <li className="item" data-product-id="16">
                        <button className="btn-item" data-product-id="16">16</button>
                    </li>
                    <li className="item" data-product-id="17">
                        <button className="btn-item" data-product-id="17">17</button>
                    </li>
                    <li className="item" data-product-id="18">
                        <button className="btn-item" data-product-id="18">18</button>
                    </li>
                    <li className="item" data-product-id="19">
                        <button className="btn-item" data-product-id="19">19</button>
                    </li>
                    <li className="item" data-product-id="20">
                        <button className="btn-item" data-product-id="20">20</button>
                    </li>
                    <li className="item" data-product-id="21">
                        <button className="btn-item" data-product-id="21">21</button>
                    </li>
                    <li className="item" data-product-id="22">
                        <button className="btn-item" data-product-id="22">22</button>
                    </li>
                    <li className="item" data-product-id="23">
                        <button className="btn-item" data-product-id="23">23</button>
                    </li>
                    <li className="item" data-product-id="24">
                        <button className="btn-item" data-product-id="24">24</button>
                    </li>
                </ul>
            </main>
            <aside className="cart">
                <div className="btn-cart-wrapper">
                    <button className="btn-cart">
                        <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="currentcolor" viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none"></rect>
                            <path d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
                            <circle cx="80" cy="204" r="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle>
                            <circle cx="184" cy="204" r="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle>
                            <path d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
                        </svg>
                    </button>
                    <div className="count"></div>
                </div>
                <div className="items-wrapper">
                    <div className="empty-text">Your cart is empty</div>
                    <div className="items"></div>
                </div>
            </aside>
        </div>
    )
}

export default Cart;