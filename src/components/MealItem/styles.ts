import styled from "styled-components";

const Wrapper = styled.div`
  text-align: left;
  margin: 5px;
  .image {
    position: relative;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .time {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 7px 8px 7px 10px;
    color: #ffffff;
    font-weight: 400;
    font-size: 15px;
    background: #ffcc21;
    width: 130px;
  }
  .sub-title {
    color: #ff963c;
  }
`;

export { Wrapper };
