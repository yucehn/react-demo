import styled, { css } from "styled-components";

const InputStyle = styled.input`
  margin: 5px auto;
  background-color: #000;
  ${(props) => 
    (props.primary &&
      css`
        border: 2px solid green;
      `
    ) ||
    (props.secondary &&
      css`
        border: 2px solid red;
      `
    )
  }
`;
const ExtendInputStyle = styled(InputStyle)`
  color: gray;
  font-weight: bold;
`;

export { InputStyle , ExtendInputStyle };