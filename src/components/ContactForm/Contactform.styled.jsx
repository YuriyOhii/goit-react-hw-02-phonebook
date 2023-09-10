import styled from '@emotion/styled';
import { Form, ErrorMessage, Field } from 'formik';

export const NewContact = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 320px;
  padding: 12px;

  border: 1px solid #212121;
  border-radius: 4px;
`;

export const Input = styled(Field)`
  font-size: 16px;
  font-weight: 500;

  color: #212121;
`;

export const ErrCaption = styled(ErrorMessage)`
  font-size: 12px;
  font-weight: 400;

  color: red;
`;

export const Button = styled.button`
  margin: 12px auto 0 auto;
  padding: 4px 8px;

  border-radius: 4px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02em;

  background-color: #212121;
  color: #ffffff;

  opacity: 1;
  transition: opacity 250ms linear;

  cursor: pointer;
  :hover,
  :focus {
    opacity: 0.7;
  }
`;
