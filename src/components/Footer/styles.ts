import styled from "styled-components";

const Wrapper = styled.div`
  height: 128px;
  display: flex;
  background: ${(props) => props.theme.colors.black || "black"};
  color: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  .footer-item {
    margin-right: 40px;
  }
`;

export { Wrapper };
