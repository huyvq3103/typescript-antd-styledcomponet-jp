import React from "react";
import Icon from "@ant-design/icons";
import { Menu } from "antd";
import { GlobalStyle, Wrapper } from "./styles";
import logo from "@asset/images/logo.png";
import { ReactComponent as IconChallenge } from "@asset/images/icon_challenge.svg";
import { ReactComponent as IconInfo } from "@asset/images/icon_info.svg";
import { ReactComponent as IconMemo } from "@asset/images/icon_memo.svg";
import { ReactComponent as IconMenu } from "@asset/images/icon_menu.svg";
import Container from "@components/Container";
import { useNavigate } from "react-router-dom";

const items: any = [
  {
    key: "myRecord",
    label: "自分の記録",
    icon: <Icon className="icon-style" component={IconChallenge} />,
    link: "/column",
  },
  {
    key: "challenge",
    label: "チャレンジ",
    icon: <Icon className="icon-style" component={IconInfo} />,
  },
  {
    key: "notify",
    label: "お知らせ",
    icon: (
      <div className="noty-num-style">
        <Icon className="icon-style" component={IconMemo} />
      </div>
    ),
  },
  {
    key: "SubMenu",
    icon: <Icon className="icon-style" component={IconMenu} />,
    children: [
      {
        key: "sub1",
        label: "自分の記録",
        link: "/record",
      },
      {
        key: "sub2",
        label: "体重グラフ",
      },
      {
        key: "sub3",
        label: "目標",
      },
      {
        key: "sub4",
        label: "選択中のコース",
      },
      {
        key: "sub5",
        label: "コラム一覧",
        link: "/column",
      },
      {
        key: "sub6",
        label: "設定",
      },
    ],
  },
];

function findKey(arr: any[], key: string): any {
  for (let o of arr) {
    if (o.key === key) {
      return o;
    } else {
      if (o.children) {
        return findKey(o.children, key);
      }
    }
  }
  return {};
}

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleChangeMenuItem = ({ key }: any) => {
    const item = findKey(items, key);
    if (item?.link) navigate(item.link);
  };

  return (
    <Wrapper>
      <Container>
        <div className="header">
          <GlobalStyle />
          <div className="logo" onClick={() => navigate("/")}>
            <img src={logo} alt="logo" />
          </div>
          <Menu
            mode="horizontal"
            onSelect={handleChangeMenuItem}
            items={items}
          ></Menu>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Header;
