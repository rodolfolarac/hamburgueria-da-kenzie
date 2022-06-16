import { StyledProductsCart } from "./style";
import MiniCard from "../MiniCard";

const ProductCard = ({ currentSale, setCurrentSale }) => {
  return (
    <StyledProductsCart>
      {currentSale.map(({ id, name, category, img }) => {
        return (
          <MiniCard
            key={id}
            id={id}
            name={name}
            category={category}
            img={img}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        );
      })}
    </StyledProductsCart>
  );
};

export default ProductCard;
