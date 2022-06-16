import styled from "styled-components";
export const StyledContainerTotal = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 0 0 5px 5px;
`;

export const InfoTotal = styled.div`
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 1px solid #e0e0e0;
  margin-bottom: 15px;
  p {
    color: #333333;
  }

  span {
    color: #828282;
  }
`;

export const RemoveButtonTotal = styled.button`
  padding: 20px 80px;
  border: none;
  border-radius: 8px;
  background-color: #e0e0e0;
  color: #828282;
`;
