import styled from "styled-components";

export const AddTodoStyledBtnAdd = styled.button`
  color: #fff;
  font-size: 20px;
  height: 52px;
  width: 52px;
  margin-left: 5px;
  border-radius: 5px;

  background: #2da44e;
  border: none;
  transition: 0.2s all ease;
  cursor: pointer;

  &:hover {
    background: #2c914e;
  }
`;

export const AddTodoStyledInput = styled.input`
  height: 48px;
  width: auto;
  font-size: 18px;
  padding: 0 10px;
  color: #2d2d2d;
  outline: none;
`;

export const AddTodoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseBtn = styled.button`
  width: 52px;
  height: 52px;
  font-size: 20px;
  border-radius: 5px;
  margin-bottom: 5px;
  color: #fff;

  background: #92db00;

  &:hover {
    background: #afdb57;
  }
`;
