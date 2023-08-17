import Button from "@components/Button";
import Container from "@components/Container";
import MealItem from "@components/MealItem";
import { Col, Row } from "antd";
import Wrapper from "./styles";

const Column = () => (
  <Wrapper>
    <Container>
      <Row style={{ marginTop: 22 }}>
        {["Morning", "Lunch", "Dinner", "Snack"].map((o, i) => (
          <Col span={6} key={i} style={{ padding: 10 }}>
            <div
              style={{
                backgroundColor: "#2E2E2E",
                color: "#ffffff",
                height: 144,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div> RECOMMENDED COLUMN </div>
              <hr style={{ width: 56 }} />
              <div> オススメ </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row style={{ marginTop: 25 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((o, i) => (
          <Col span={6} key={i}>
            <MealItem showDetail={true} />
          </Col>
        ))}
      </Row>
      <div style={{ margin: "30px 0 60px 0" }}>
        <Button />
      </div>
    </Container>
  </Wrapper>
);

export default Column;
