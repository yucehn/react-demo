import styled, { css } from "styled-components";

const InputStyle = styled.input`
  margin: 5px auto;
  width: 50vw;
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
  &:focus {
    border-color: orange;
    outline: none;
  }
`;
const ExtendInputStyle = styled(InputStyle)`
  color: gray;
  font-weight: bold;
`;

export { InputStyle , ExtendInputStyle };