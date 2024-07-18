import style from "./Food.module.css";
import waffle from "../assets/images/image-waffle-desktop.jpg";
import brulee from "../assets/images/image-creme-brulee-desktop.jpg";
import macaron from "../assets/images/image-macaron-desktop.jpg";
import tiramisu from "../assets/images/image-tiramisu-desktop.jpg";
import baklava from "../assets/images/image-baklava-desktop.jpg";
import pie from "../assets/images/image-meringue-desktop.jpg";
import cake from "../assets/images/image-cake-desktop.jpg";
import brownie from "../assets/images/image-brownie-desktop.jpg";
import cotta from "../assets/images/image-panna-cotta-desktop.jpg";
import cart from "../assets/images/icon-add-to-cart.svg";
import removeimg from '../assets/images/icon-remove-item.svg'
import carbon from "../assets/images/icon-carbon-neutral.svg";
import PropTypes from "prop-types";

export const Food = ({ 
    order,
    remove,
 }) => {
  return (
    <div className={style.foodcont}>
      <div className={style.de}>
      <h1>Dessert</h1>
      <div className={style.food}>
        <div className={style.foodimages}>
          <div className={style.img}>
            <img className={style.imagesfood} src={waffle} alt="" />
            <button type="click" className={style.foodbtn}>
              <img src={cart} alt="" />
              Add to Cart
            </button>
          </div>

          <div className={style.fooddetails}>
            <h2>Waffle</h2>
            <p>Waffle with Berries</p>
            <span>$6.50</span>
          </div>
        </div>

        <div className={style.foodimages}>
          <div className={style.img}>
            <img className={style.imagesfood} src={brulee} alt="" />
            <button type="click" className={style.foodbtn}>
              <img src={cart} alt="" />
              Add to Cart
            </button>
          </div>

          <div className={style.fooddetails}>
            <h2>Creme Brulee</h2>
            <p>Vanilla Bean Creme Brulee</p>
            <span>$7.00</span>
          </div>
        </div>

        <div className={style.foodimages}>
          <div className={style.img}>
            <img className={style.imagesfood} src={macaron} alt="" />
            <button type="click" className={style.foodbtn}>
              <img src={cart} alt="" />
              Add to Cart
            </button>
          </div>

          <div className={style.fooddetails}>
            <h2>Macaron</h2>
            <p>Macaron Mix of Five</p>
            <span>$8.00</span>
          </div>
        </div>

        <div className={style.foodimages}>
          <div className={style.img}>
            <img className={style.imagesfood} src={tiramisu} alt="" />
            <button type="click" className={style.foodbtn}>
              <img src={cart} alt="" />
              Add to Cart
            </button>
          </div>

          <div className={style.fooddetails}>
            <h2>Tiramisu</h2>
            <p>Classic Tiramisu</p>
            <span>$5.50</span>
          </div>
        </div>

        <div className={style.foodimages}>
          <div className={style.img}>
            <img className={style.imagesfood} src={baklava} alt="" />
            <button type="click" className={style.foodbtn}>
              <img src={cart} alt="" />
              Add to Cart
            </button>
          </div>

          <div className={style.fooddetails}>
            <h2>Baklava</h2>
            <p>Pistachio Baklava</p>
            <span>$4.00</span>
          </div>
        </div>

        <div className={style.foodimages}>
          <div className={style.img}>
            <img className={style.imagesfood} src={pie} alt="" />
            <button type="click" className={style.foodbtn}>
              <img src={cart} alt="" />
              Add to Cart
            </button>
          </div>

          <div className={style.fooddetails}>
            <h2>Pie</h2>
            <p>Lemon Meringue Pie</p>
            <span>$5.00</span>
          </div>
        </div>

        <div className={style.foodimages}>
          <div className={style.img}>
            <img className={style.imagesfood} src={cake} alt="" />
            <button type="click" className={style.foodbtn}>
              <img src={cart} alt="" />
              Add to Cart
            </button>
          </div>

          <div className={style.fooddetails}>
            <h2>Cake</h2>
            <p>Red Velvet Cake</p>
            <span>$4.50</span>
          </div>
        </div>

        <div className={style.foodimages}>
          <div className={style.img}>
            <img className={style.imagesfood} src={brownie} alt="" />
            <button type="click" className={style.foodbtn}>
              <img src={cart} alt="" />
              Add to Cart
            </button>
          </div>

          <div className={style.fooddetails}>
            <h2>Brownie</h2>
            <p>Salted Caramel Brownie</p>
            <span>$5.50</span>
          </div>
        </div>

        <div className={style.foodimages}>
          <div className={style.img}>
            <img className={style.imagesfood} src={cotta} alt="" />
            <button type="click" className={style.foodbtn}>
              <img src={cart} alt="" />
              Add to Cart
            </button>
          </div>

          <div className={style.fooddetails}>
            <h2>Cotta</h2>
            <p>Vanilla Panna Cotta</p>
            <span>$6.50</span>
          </div>
        </div>
      </div>
      </div>
      
      <div className={style.cart}>
        <h3>Your Cart ({})</h3>
        <div className={style.foodcart}>
          <div className={style.cartdetails}>
            <h4>Classic Tiramisu</h4>
            <p>
              1x <span>@$5.50 $5.50</span>
            </p>
          </div>
          <div className={style.cartminus}>
            <img src={remove} alt="" />
          </div>
        </div>

        <div className={style.foodcart}>
          <div className={style.cartdetails}>
            <h4>Vanilla Bean Creme Brulee</h4>
            <p>
              4x <span>@$7.00 $28.00</span>
            </p>
          </div>
          <div className={style.cartminus}>
            <img src={remove} alt="" />
          </div>
        </div>

        <div className={style.foodcart}>
          <div className={style.cartdetails}>
            <h4>Vanilla Panna Cotta</h4>
            <p>
              2x <span>@$6.50 @13.00</span>
            </p>
          </div>
          <div className={style.cartminus}>
            <img onClick={remove} src={removeimg} alt="" />
          </div>
        </div>

        <div className={style.totcartprice}>
          <p className={style.totcart}>Order Total</p>
          <p className={style.totalcartprice}>$46.50</p>
        </div>

        <div className={style.motto}>
          <img src={carbon} alt="" />
          <p>
            This is a <span>carbon=neutral delivery</span>
          </p>
        </div>

        <button className={style.btn} type="click" onClick={order}>
          Confirm Order
        </button>
      </div>
    </div>
  );
};

Food.propTypes = {
  order: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};
