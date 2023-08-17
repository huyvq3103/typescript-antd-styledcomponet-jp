import React from "react";
import { Wrapper } from "./styles";
import MyRecommend from "@asset/images/my_recommend.jpg";

const Header: React.FC = () => {
  return (
    <Wrapper className="category">
      <div className="background">
        <div className="image">
          <img src={MyRecommend} alt="category" />
        </div>
        <div className="text">
          <p className="title">BODY RECORD</p>
          <p className="sub-title">自分のカラダの記録</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
