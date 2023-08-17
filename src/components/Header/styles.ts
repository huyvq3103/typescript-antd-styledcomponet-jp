import styled, { createGlobalStyle } from "styled-components";

const Wrapper = styled.div`
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: ${(props) => props.theme.colors.black || "black"};
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .ant-menu {
      background-color: ${(props) =>
        props.theme.colors.black || "black"} !important;
      color: #ffffff !important;
    }
    .ant-menu-title-content {
      font-size: 16px;
      color: #ff963c;
    }
    .icon-style {
      font-size: 24px;
    }
    .noty-num-style ::after {
      position: absolute;
      background: rgb(255, 150, 60);
      font-size: 12px;
      color: rgb(255, 255, 255);
      font-weight: 400;
      content: "1";
      width: 12px;
      height: 12px;
      border-radius: 12px;
      padding: 2px;
      left: 25px;
    }
  }
`;

const GlobalStyle = createGlobalStyle<{ theme: any }>`
    .ant-menu-sub {
    background-color: ${(props) =>
      props.theme.colors.gray || "black"} !important;
    color: #ffffff !important;
  }
  .ant-menu-item-selected {
    background: "#c6c6c6" !important ;
  }

`;

export { Wrapper, GlobalStyle };
