import Container from "@components/Container";
import React from "react";
import { Wrapper } from "./styles";

const footerText = [
  "会員登録",
  "運営会社",
  "利用規約",
  "個人情報の取扱について",
  "特定商取引法に基づく表記",
  "お問い合わせ",
];

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        {footerText.map((o, i) => (
          <span className="footer-item" key={i}>
            {o}
          </span>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Footer;
