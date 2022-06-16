import styled from "styled-components";

export const StyledProduct = styled.li`
  min-width: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #f5f5f5;
  border-radius: 5px;
  transition: transform 0.3s;

  img {
    background-color: #f5f5f5;
    height: 130px;
    width: 130px;
  }
  &:hover {
    transform: scale(1.03);
    overflow: hidden;
  }
`;

export const ContainerImg = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0 21px;
  align-items: flex-start;
  margin-bottom: 15px;
`;

export const TitleCard = styled.h2`
  font-size: 1.125rem;
  line-height: 1.375rem;
  font-weight: 700;
  color: #333333;
`;

export const CategoryCard = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  color: #828282;
`;

export const PriceCard = styled.span`
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: #27ae60;
`;
