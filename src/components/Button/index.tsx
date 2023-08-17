import { Row } from "antd";
import { Wrapper } from "./styles";

const Button = () => {
  return (
    <Row style={{ display: "flex", justifyContent: "center" }}>
      <Wrapper>自分の日記をもっと見る</Wrapper>
    </Row>
  );
};

export default Button;
