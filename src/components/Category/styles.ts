import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 288px;
  height: 288px;
  .background {
    background-color: #ffcc21;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 24px 20px;
    img {
      max-width: 100%;
    }
  }

  .text {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    justify-content: center;
    vertical-align: middle;
    align-items: center;
    flex-direction: column;
    .title {
      font-weight: 400;
      font-size: 25px;
      margin: 0px;
      color: #ffcc21;
    }
    .sub-title {
      background-color: #ff963c;
      font-weight: 400;
      font-size: 14px;
      margin: 0px;
      margin-top: 11px;
    }
  }

  @media (max-width: 1277px) {
    max-width: 288px;
    width: calc(33.33% - 40px);
  }
`;

export { Wrapper };
