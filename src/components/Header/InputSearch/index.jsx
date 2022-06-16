import { ThemeButton } from "../../../styles/global";
import { StyledContainerSearch } from "./style";
import { StyledInput } from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InputSearch = ({ products, setProducts, filteredProducts }) => {
  const notify = () => {
    return toast.error("Produto não encontrado!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showProducts = (valueSearch) => {
    const output = products.filter((product) => {
      console.log(product.name);
      return product.name.toLowerCase().includes(valueSearch.toLowerCase());
    });
    console.log(output);
    output.length !== 0 ? setProducts(output) : notify();
  };
  return (
    <>
      <StyledContainerSearch>
        <StyledInput
          type="text"
          placeholder="Pesquise aqui!"
          onChange={(event) => {
            event.preventDefault();
            !event.target.value && setProducts(filteredProducts);
            console.log(event.target.value);
          }}
        />
        <ThemeButton
          onClick={(e) => {
            e.preventDefault();
            showProducts([...e.target.parentNode][0].value);
          }}
        >
          Pesquisar
        </ThemeButton>
      </StyledContainerSearch>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default InputSearch;
