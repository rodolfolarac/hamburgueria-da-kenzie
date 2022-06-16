import { InfoTotal, RemoveButtonTotal, StyledContainerTotal } from "./style";

const TotalValue = ({ currentSale, setCurrentSale }) => {
  let total = currentSale.reduce((acc, act) => {
    console.log(acc, act);
    return acc + act.price;
  }, 0);

  return (
    <StyledContainerTotal>
      <InfoTotal>
        <p>Total:</p>
        <span>
          {total.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </InfoTotal>
      <RemoveButtonTotal
        onClick={() => {
          setCurrentSale([]);
        }}
      >
        Remover Todos
      </RemoveButtonTotal>
    </StyledContainerTotal>
  );
};

export default TotalValue;
