import style from "./order.module.css";
import ordermark from "../assets/images/icon-order-confirmed.svg";
import tiramisu from "../assets/images/image-tiramisu-desktop.jpg";
import brulee from "../assets/images/image-creme-brulee-desktop.jpg";
import cotta from "../assets/images/image-panna-cotta-desktop.jpg";
import PropTypes from "prop-types";

export default function Order({ newOrder }) {
  return (
    <div className={style.ordercont}>
      <div className={style.ordermark}>
        <img src={ordermark} alt="" />
      </div>

      <h2>Order Confirmed</h2>
      <p className={style.state}>We hope you enjoy your food!</p>

      <div className={style.order}>
        <div className={style.orderselect}>
          <div className={style.fo}>
            <img src={tiramisu} alt="" />
            <div className={style.confirm}>
              <h3>Classic Tiramisu</h3>
              <p>
                1x <span>@$5.50</span>
              </p>
            </div>
          </div>
          <div className={style.price}>
            <p>$5.50</p>
          </div>
        </div>

        <div className={style.orderselect}>
          <div className={style.fo}>
            <img src={brulee} alt="" />
            <div className={style.confirm}>
              <h3>Vanilla Bean Creme Brulee</h3>
              <p>
                4x <span>@$7.00</span>
              </p>
            </div>
          </div>
          <div className={style.price}>
            <p>$28.00</p>
          </div>
        </div>

        <div className={style.orderselect}>
          <div className={style.fo}>
            <img src={cotta} alt="" />
            <div className={style.confirm}>
              <h3>Vanilla Panna Cotta</h3>
              <p>
                2x <span>@$6.50</span>
              </p>
            </div>
          </div>
          <div className={style.price}>
            <p>$13.00</p>
          </div>
        </div>

        <div className={style.totorderprice}>
          <p className={style.tot}>Order Total</p>
          <p className={style.totalprice}>$46.50</p>
        </div>
      </div>

      <button className={style.btn} type="click" onClick={newOrder}>
        Start New Order
      </button>
    </div>
  );
}

Order.propTypes = {
  newOrder: PropTypes.func.isRequired,
};
