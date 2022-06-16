import { ThemeButton } from "../../../styles/global";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CategoryCard,
  ContainerImg,
  ContainerInfo,
  PriceCard,
  StyledProduct,
  TitleCard,
} from "./style";

const Product = ({
  id,
  urlImg,
  name,
  category,
  price,
  setCurrentSale,
  currentSale,
  products,
}) => {
  const notify = () =>
    toast.error("Produto já foi inserido no carrinho!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  function addProduct(idProduct) {
    let productExist = currentSale.some((product) => {
      return +product.id === +idProduct;
    });
    if (!productExist) {
      const output = products.filter((product) => {
        return +product.id === +idProduct;
      });
      setCurrentSale([...currentSale, output[0]]);
    } else {
      notify();
    }
  }
  return (
    <StyledProduct key={id}>
      <ContainerImg>
        <img src={urlImg} alt={name} />
      </ContainerImg>

      <ContainerInfo>
        <TitleCard>{name}</TitleCard>
        <CategoryCard>{category}</CategoryCard>
        <PriceCard>
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </PriceCard>
        <ThemeButton
          className={id}
          onClick={(event) => {
            event.preventDefault();
            addProduct(event.target.classList[2]);
          }}
        >
          Adicionar
        </ThemeButton>
      </ContainerInfo>
    </StyledProduct>
  );
};

export default Product;
