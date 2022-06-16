import { RemoveButton, StyledMiniCard, ContentCard } from "./style";

const MiniCard = ({ name, category, img, id, currentSale, setCurrentSale }) => {
  const removeSale = (idProduct) => {
    const output = currentSale.filter((product) => {
      return +product.id !== +idProduct;
    });
    setCurrentSale(output);
  };
  return (
    <StyledMiniCard>
      <img src={img} alt={name} />
      <ContentCard>
        <h3>{name}</h3>
        <span>{category}</span>
      </ContentCard>
      <RemoveButton
        className={id}
        onClick={(event) => {
          event.preventDefault();
          removeSale(event.target.classList[2]);
        }}
      >
        Remover
      </RemoveButton>
    </StyledMiniCard>
  );
};

export default MiniCard;
