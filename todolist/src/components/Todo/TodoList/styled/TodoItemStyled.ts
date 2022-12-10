import styled from "styled-components";

interface ITodoItemStyled {
  completed: boolean;
}

export const TodoContainer = styled.div``;

export const TodoItemStyled = styled.div<ITodoItemStyled>`
  min-width: 500px;
  min-height: 48px;
  background: #2da44e;
  padding: 10px;
  margin: 10px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
    color: #fff;
    font-size: 20px;
  }
`;

export const BtnRemove = styled.button`
  color: #ff0000;
  font-size: 25px;
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.2s all ease;

  &:hover {
    color: rgb(231, 66, 66);
  }
`;

export const BtnComplte = styled.button`
  font-size: 25px;
  background: none;
  border: none;
  cursor: pointer;
`;
