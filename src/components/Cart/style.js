import styled from "styled-components";

export const StyledCart = styled.section`
  min-height: 223px;
  margin: 0px 16px;
  max-width: 380px;
  @media (min-width: 769px) {
    margin: 0 auto;
  }
`;

export const StyledHeaderCart = styled.div`
  max-height: 65px;
  border-radius: 5px 5px 0 0;
  background-color: #27ae60;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.125;
    line-height: 1.5;
    font-weight: 700;
    color: #fff;
    padding: 20px 13px;
  }
`;

export const EmptyCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  h3 {
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 700;

    color: #333333;
  }
  span {
    font-size: 0.875rem;
    line-height: 1.5rem;
    font-weight: 400;

    color: #828282;
  }
`;
