import Product from "./Product";
import { StyledContainerProductsList } from "./style";

const ProductsList = ({ products, setCurrentSale, currentSale }) => {
  return (
    <StyledContainerProductsList>
      {products?.map((produto) => {
        return (
          <Product
            key={produto.id}
            id={produto.id}
            name={produto.name}
            category={produto.category}
            price={produto.price}
            urlImg={produto.img}
            setCurrentSale={setCurrentSale}
            currentSale={currentSale}
            products={products}
          />
        );
      })}
    </StyledContainerProductsList>
  );
};

export default ProductsList;
