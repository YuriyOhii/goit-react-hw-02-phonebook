import styled from '@emotion/styled';

export const TelNumber = styled.span`
  background-color: yellow;
  border-radius: 4px;
`;

export const DelButton = styled.button`
  margin-left: 8px;
  padding: 4px 8px;

  border-radius: 4px;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02em;

  background-color: red;
  color: #ffffff;

  opacity: 1;
  transition: opacity 250ms linear;

  cursor: pointer;
  :hover,
  :focus {
    opacity: 0.5;
  }
`;
