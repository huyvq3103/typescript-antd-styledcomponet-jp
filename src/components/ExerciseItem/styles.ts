import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #777777;
  border-bottom: 1px solid #777777;
  margin-right: 40px;
  ::before {
    content: ".";
    color: #fff;
    font-size: 30px;
    margin-right: 15px;
  }
  .title {
    font-weight: 300;
    font-size: 15px;
    color: #ffffff;
  }
  .sub-title {
    font-weight: 400;
    font-size: 15px;
    color: #ffcc21;
  }
  .time {
    font-weight: 400;
    font-size: 18px;
    color: #ffcc21;
  }
  .box-time {
    margin-left: auto;
  }
`;

export { Wrapper };
