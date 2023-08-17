import Button from "@components/Button";
import Category from "@components/Category";
import Container from "@components/Container";
import ExerciseItem from "@components/ExerciseItem";
import { LineChart } from "@components/LineChart";
import { Col, Row } from "antd";
import Wrapper from "./styles";

const MyRecord = () => (
  <Container>
    <Wrapper>
      <Row
        style={{
          marginTop: 56,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {[1, 2, 3].map((o, i) => (
          // <Col span={8} key={i}>
          <Category />
          // </Col>
        ))}
      </Row>
      <Row className="chart-style">
        <LineChart />
      </Row>
      <div className="table-style">
        <span
          style={{ fontWeight: 400, fontSize: 15, width: 22, color: "#FFFFFF" }}
        >
          MY <br /> EXERCISE
        </span>
        <span
          style={{
            fontWeight: 400,
            fontSize: 22,
            color: "#FFFFFF",
            marginTop: -24,
            marginLeft: 23,
            display: "inline-block",
          }}
        >
          2021.05.21
        </span>
        <Row>
          {[1, 2, 3, 4, 5, 6].map((o, i) => (
            <Col span={12} key={i}>
              <ExerciseItem />
            </Col>
          ))}
        </Row>
      </div>
      <div className="wrap-diary">
        <span
          style={{
            fontWeight: 400,
            fontSize: 22,
            color: "#414141",
            lineHeight: "27px",
          }}
        >
          MY DIARY
        </span>
        <Row>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((o, i) => (
            <Col span={6} key={i} className="diary">
              <div {...(i % 4 > 0 ? { className: "last-row" } : {})}>
                <p>
                  2021.05.21 <br />
                  23:25
                </p>
                <p>
                  私の日記の記録が一部表示されます。
                  <br />
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…{" "}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div style={{ margin: "30px 0 60px 0" }}>
        <Button />
      </div>
    </Wrapper>
  </Container>
);

export default MyRecord;
