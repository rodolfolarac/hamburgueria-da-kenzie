import styled from "styled-components";

export const StyledMiniCard = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin: 15px 0px;

  img {
    display: flex;
    width: 70px;
    height: 70px;
    background-color: #e0e0e0;
  }
`;

export const ContentCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const RemoveButton = styled.button`
  font-size: 0.75rem;
  line-height: 0.875rem;
  font-weight: 700;
  color: #bdbdbd;
  border: none;
  background-color: #f5f5f5;
`;
