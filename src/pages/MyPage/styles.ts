import styled from "styled-components";

const Wrapper = styled.div`
  .top {
    display: flex;
  }
  .progress {
    position: relative;
    height: 300px;
    width: 500px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .circle-style {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .chart-style {
    width: calc(100% - 500px);
    height: 300px;
    background: #2e2e2e;
  }

  .ant-progress-inner {
    width: 181px !important;
    height: 181px !important;
  }
`;

export default Wrapper;
