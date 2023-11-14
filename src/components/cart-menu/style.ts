import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  `;

export const fadeOut = keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  `;

export const CartContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 30vw;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: -5px 0px 6px 0px #00000021;
  transform: translateX(-100%);
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.3s forwards;
  h2 {
    color: white;
    font-weight: 700;
    text-wrap: balance;
    font-size: 27px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: none;
  }

  .product-container {
    width: 100%;
    height: 95px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #fff;
    box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
    background: white;

    @media only screen and (max-width: 768px) {
      flex-direction: column !important;
      height: 200px !important;
    }

    .item-name {
      max-width: 70px;
      @media only screen and (max-width: 768px) {
        max-width: 160px;
      }
    }

    .price-product {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 17px;
      @media only screen and (max-width: 768px) {
        font-size: 18px;
      }
    }

    .close-product {
      top: -15px;
      transform: scale(0.8);
      right: -15px;
      button {
        &:hover {
          outline: 1px solid ${(props) => props.theme.colors.primary};
        }
      }
    }
    img {
      max-width: 70px;
      min-width: 70px;
      height: 70px;
    }
  }
  .products-list {
    max-height: 60%;

    @media only screen and (max-height: 667px) {
      max-height: 40%;
    }
  }
  .count-product {
    max-width: 150px;
    border-radius: 10px;
    border: 0.3px solid #bfbfbf;
    background: #fff;
    button {
      background: none;
      border: none;
      transition: 0.25s;
      &:first-child {
        border-right: 1px solid #bfbfbf;
      }
      &:last-child {
        border-left: 1px solid #bfbfbf;
      }
      &:hover {
        color: ${(props) => props.theme.colors.primary};
      }
    }
    input {
      border: none;
      padding-left: 14px;
      width: 70px;
      text-align: center;
    }
  }
  .submit-payment {
    background: black;
    height: 96px;
    width: 30vw;
    position: relative;
    left: -24px;
    bottom: -25px;
    transition: 0.25s;
    cursor: pointer;
    &:hover {
      background: white;
      h2 {
        color: ${(props) => props.theme.colors.primary};
      }
    }
    @media only screen and (max-width: 768px) {
      width: 100vw;
      max-width: none;
    }
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  background: black;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.25s;
  &:hover {
    background: white;
    color: ${(props) => props.theme.colors.primary};
  }
`;
