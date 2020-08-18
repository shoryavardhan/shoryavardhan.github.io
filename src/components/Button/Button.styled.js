import styled from "styled-components";

export const StyledButton = styled.button`
  text-transform: capitalize;
  font-size: 1rem;
  background: transparent;
  font-family: source;
  border: 1px solid #66fcf1;
  color: #66fcf1;
  border-radius: 5px;
  padding: 15px 40px;
  cursor: pointer;
  margin-left:7%;
  margin-top:3%;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color:#0D2E43;
    
  }
  &:focus {
    outline: none;
  }
`;