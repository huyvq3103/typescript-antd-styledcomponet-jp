import React from "react";
import { Wrapper } from "./styles";
import MyRecommend from "@asset/images/m01.png";

const MealItem = ({ showDetail }: any) => {
  return (
    <Wrapper className="meal-item">
      <div className="image">
        <img src={MyRecommend} alt="category" style={{ width: "100%" }} />
        <div className="time">05.21.Morning</div>
      </div>
      {showDetail && (
        <div className="detail">
          <p className="title">
            魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
          </p>
          <p className="sub-title">#魚料理 #和食 #DHA</p>
        </div>
      )}
    </Wrapper>
  );
};

export default MealItem;
