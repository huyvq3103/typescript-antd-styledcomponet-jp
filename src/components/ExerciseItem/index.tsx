import React from "react";
import { Wrapper } from "./styles";

const ExerciseItem: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <p className="title">家事全般（立位・軽い）</p>
        <p className="sub-title">26kcal</p>
      </div>
      <div className="box-time">
        <span className="time">10 min</span>
      </div>
    </Wrapper>
  );
};

export default ExerciseItem;
