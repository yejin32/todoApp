import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import Input from "../components/Input";
import List from "../components/List";

const MainPage = () => {
  const SMainForm = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 100%;
    display: flex;
    align-items: center;
    background-color: #3578e5;
    color: #ffffff;
  `;

  const STodoForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
  `;

  return (
    <SMainForm>
      <STodoForm>
        <Title />
        <Input />
        <List />
      </STodoForm>
    </SMainForm>
  );
};

export default MainPage;
