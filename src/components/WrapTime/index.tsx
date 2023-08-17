import { Wrapper } from "./styles";
import IconTool from "@asset/images/icon_9.png";
import IconHexa from "@asset/images/icon_48.png";

const WrapTime = ({ time }: any) => {
  return (
    <Wrapper>
      <div>
        <img src={IconHexa} alt="" />
      </div>
      <div className="style-tool">
        <img src={IconTool} alt="" />
        <p style={{ margin: 0, color: "#fff" }}>{time}</p>
      </div>
    </Wrapper>
  );
};

export default WrapTime;
