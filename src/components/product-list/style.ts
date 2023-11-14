import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  overflow: auto;
  max-height: 75vh;
  max-width: 1200px;
  margin: 0 auto !important;
  justify-items: center;
  overflow-x: auto;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProductCard = styled.li`
  list-style: none;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 2px 8px 0px #00000022;
  background: #ffffff;
  max-width: 235px;
  height: 290px;
  position: relative;
  max-height: 405px;
  img {
    max-width: 112px;
    height: auto;
    border-radius: 4px;
  }
  .product-name {
    color: #2c2c2c;
    text-align: start;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
    max-width: 65%;
  }
  .add-cart {
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 0px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: ${(props) => props.theme.colors.primary};
    transition: all 0.25s;
    cursor: pointer;
    &:hover {
      background: white;
      outline: 1px solid ${(props) => props.theme.colors.primary};
      * {
        color: ${(props) => props.theme.colors.primary};
      }
    }
    span {
      text-transform: uppercase;
      font-weight: 500;
    }
  }
  .product-description {
    color: #2c2c2c;
    font-size: 0.7rem;
    font-weight: 300;
    line-height: 12px;
  }
  .product-price {
    background: #373737;
    color: white;
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
    border-radius: 5px;
  }
`;
