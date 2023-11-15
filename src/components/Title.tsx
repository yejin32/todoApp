import React from "react";
import styled from "styled-components";

const Title = () => {
  const STitleForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    .header {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 5px;
    }
  `;
  return (
    <STitleForm>
      <div className="header">TodoApp</div>
    </STitleForm>
  );
};

export default Title;
