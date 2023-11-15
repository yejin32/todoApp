import React from "react";
import styled from "styled-components";

const List = () => {
  const SListForm = styled.div`
    display: flex;
    align-items: center;
    width: 500px;
    height: 500px;
    max-height: 500px;
    border: 2px solid #ffffff;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 20px;

    .noList {
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      color: #000000;
    }
  `;
  return (
    <SListForm>
      <div className="noList">할 일이 없습니다. 자유롭게 작성해보세요!</div>
    </SListForm>
  );
};

export default List;
