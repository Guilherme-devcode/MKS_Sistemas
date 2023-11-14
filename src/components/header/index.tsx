"use client";
import { HeaderProps } from "@/types/header-menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Brand,
  BrandSecondary,
  ShoppingButton,
  StyledContainerHeader,
  StyledNavbar,
} from "./style";

const Header: React.FC<HeaderProps> = ({ onToggleCart, cartItemCount }) => {
  return (
    <StyledNavbar className="w-100 p-4" expand="lg">
      <StyledContainerHeader className="m-0 px-3 w-100">
        <div className="d-flex align-items-baseline">
          <Brand className="text-light">
            <span>MKS</span>
          </Brand>
          <BrandSecondary>Sistemas</BrandSecondary>
        </div>
        <ShoppingButton
          className="ml-auto d-flex justify-content-between px-3 py-2"
          onClick={onToggleCart}
        >
          <ShoppingCartIcon />
          <span className="ms-2">{cartItemCount}</span>
        </ShoppingButton>
      </StyledContainerHeader>
    </StyledNavbar>
  );
};

export default Header;
