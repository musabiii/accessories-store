import { Link } from "react-router-dom";
import styled from "styled-components";

//TODO: загрузить изображения через импорт

const HeaderBlock = styled.div`
  margin: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-weight: 700;
    font-size: 25px;
    a {
      color: #101010;
      text-decoration: none;
    }
  }
  .right-box {
    display: flex;
    gap: 25px;
    align-items: center;
  }
`;

export default function Header() {
  return (
    <HeaderBlock>
      <div className="logo">
        <Link to="/">QPICK</Link>
      </div>
      <div className="model">Выбрать модель телефона</div>
      <div className="right-box">
        <div className="favorites">
          <Link to="/favorites">
            <img src={process.env.PUBLIC_URL + "/img/heart.svg"} alt="heart" />
          </Link>
        </div>
        <div className="cart">
          <Link to="/cart">
            <img src={process.env.PUBLIC_URL + "/img/cart.svg"} alt="cart" />
          </Link>
        </div>
      </div>
    </HeaderBlock>
  );
}
