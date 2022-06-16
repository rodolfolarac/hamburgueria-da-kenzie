import ProductCard from "./ProductsCart";
import { StyledCart, StyledHeaderCart } from "./style";
import { EmptyCard } from "./style";
import TotalValue from "./TotalValue/index";

const Cart = ({ currentSale, setCurrentSale }) => {
  return (
    <StyledCart>
      <StyledHeaderCart>
        <h2>Carrinho de Compras</h2>
      </StyledHeaderCart>

      {currentSale ? (
        <div>
          <ProductCard
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
          <TotalValue
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        </div>
      ) : (
        <EmptyCard>
          <h3>Sua Sacola está Vazia</h3>
          <span>Adicione itens</span>
        </EmptyCard>
      )}
    </StyledCart>
  );
};

export default Cart;
