import React from "react";
import "./App.css";
import { Layout } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPage from "@pages/MyPage";
import MyRecord from "@pages/MyRecord";
import Column from "@pages/Column";
import NotFound from "@pages/NotFound";
import Header from "@components/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "@configs/theme";
import Footer from "@components/Footer";
import ScrollToTop from "@components/ScrollToTop";
const { Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Layout>
            <Header />
            <ScrollToTop />
            <Content style={{ marginBottom: 128, marginTop: 64 }}>
              <Routes>
                <Route path="/" element={<MyPage />} />
                <Route path="/record" element={<MyRecord />} />
                <Route path="/column" element={<Column />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Content>
            <Footer />
          </Layout>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
