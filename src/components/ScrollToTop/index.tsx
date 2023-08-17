import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { ReactComponent as IconUp } from "@asset/images/icon_up.svg";
import { Wrapper } from "./styles";
import Icon from "@ant-design/icons";

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 100) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return <></>;
  }

  return (
    <Wrapper onClick={scrollToTop}>
      <Icon className="icon-style" component={IconUp} />
    </Wrapper>
  );
};

export default ScrollToTop;
