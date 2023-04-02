import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const TextInput = styled.input`
  width: 10rem;
  padding: 0.5rem;
  border: 1px solid #9ec150;
  border-radius: 4px;
  background-color: black;
  color: #9ec150;
  outline: none;
  &:hover {
    background-color: #9ec150;
    color: black;
  }
`;

const SelectInput = styled.select`
  width: 10rem;
  padding: 0.5rem;
  border: 1px solid #9ec150;
  border-radius: 4px;
  background-color: black;
  color: #9ec150;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #9ec150;
    color: black;
  }
`;
const Button = styled.button`
  margin-top: 1.3rem;
  width: 10rem;
  height: 2.5rem;
  padding: 0;
  border: 1px solid #9ec150;
  border-radius: 4px;
  background-color: black;
  color: #9ec150;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #9ec150;
    color: black;
  }
`;

const Option = styled.option``;

export {
  FormContainer,
  FormGroup,
  Label,
  TextInput,
  SelectInput,
  Option,
  Button,
};
