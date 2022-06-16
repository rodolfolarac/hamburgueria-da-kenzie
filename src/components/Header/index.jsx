import { StyledHeader } from "./style";
import LogoImg from "./Logo";
import InputSearch from "./InputSearch";

const Header = ({
  products,
  setProducts,
  filteredProducts,
  setFilteredProducts,
}) => {
  return (
    <StyledHeader>
      <LogoImg />
      <InputSearch
        products={products}
        setProducts={setProducts}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
    </StyledHeader>
  );
};

export default Header;
