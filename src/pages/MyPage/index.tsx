import Button from "@components/Button";
import Container from "@components/Container";
import { LineChart } from "@components/LineChart";
import MealItem from "@components/MealItem";
import WrapTime from "@components/WrapTime";
import { Col, Progress, Row } from "antd";
import image from "@asset/images/d01.png";

import Wrapper from "./styles";

const MyPage = () => (
  <Wrapper>
    <div className="top">
      <div className="progress">
        <img src={image} alt="" />
        <div className="circle-style">
          <Progress
            type="circle"
            percent={75}
            format={(percent) => `05/21 ${percent}%`}
            strokeColor="#FFFFFF"
            trailColor="transparent"
          />
        </div>
      </div>
      <div className="chart-style">
        <LineChart />
      </div>
    </div>
    <Container>
      <Row style={{ marginTop: 22 }}>
        {["Morning", "Lunch", "Dinner", "Snack"].map((o, i) => (
          <Col span={6} key={i}>
            <WrapTime time={o} />
          </Col>
        ))}
      </Row>
      <Row style={{ marginTop: 25 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((o, i) => (
          <Col span={6} key={i}>
            <MealItem showDetail={false} />
          </Col>
        ))}
      </Row>
      <div style={{ margin: "30px 0 60px 0" }}>
        <Button />
      </div>
    </Container>
  </Wrapper>
);

export default MyPage;
