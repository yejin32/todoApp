import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import Input from "../components/Input";
import List from "../components/List";

const MainPage = () => {
  const MainForm = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    background-color: #3578e5;
    color: #e4e7ee;
  `;

  const TodoForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
  `;

  return (
    <MainForm>
      <TodoForm>
        <Title />
        <Input />
        <List />
      </TodoForm>
    </MainForm>
  );
};

export default MainPage;
