import styled from "styled-components";

const Wrapper = styled.div`
  /* .category:not(:nth-child(1)) {
    margin-left: 48px;
  } */

  .chart-style {
    margin-top: 56px;
    height: 384px;
    width: 100%;
    position: relative;
    background-color: ${(props) =>
      props.theme.colors.black || "black"} !important;
  }
  .table-style {
    margin-top: 56px;
    padding: 24px;
    background-color: ${(props) =>
      props.theme.colors.black || "black"} !important;
    text-align: left;
  }

  .wrap-diary {
    text-align: left;
    margin-top: 56px;
    .ant-col-6 {
      margin-bottom: 12px;
    }
  }
  .diary div {
    text-align: left;
    padding: 15px;
    border: 2px solid #707070;
    height: 100%;
    padding-bottom: 12px;
  }

  .last-row {
    margin-left: 12px;
  }
`;

export default Wrapper;
