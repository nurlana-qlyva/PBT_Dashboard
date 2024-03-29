import { useState } from "react";
import { Breadcrumb, Layout, theme, Button } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UpOutlined
} from "@ant-design/icons";
import Dashboard from "../dashboard/Dashboard";
import logo from "../assets/images/logo.png";
import styled from "styled-components";

const { Header, Content, Footer } = Layout;

const StyledButton = styled(Button)`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #291F6B;
    color: #fff;
    font-size: 26px;
    position: fixed;
    bottom: 30px;
    right: 30px;
    box-shadow: 0 -3px 31px 0 #0000000d, 0 6px 20px 0 #00000005;
`;

export const BaseLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileView, setMobileView] = useState(window.innerWidth < 768);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    window.addEventListener("resize", () => {
        setMobileView(window.innerWidth < 768);
    });

    const logoStyle = {
        marginTop: "20px",
        maxWidth: "100px",
        width: "80%",
        marginBottom: "20px",
    };

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <Layout style={{ minHeight: "100vh" }}>

            <Layout>
                <Header style={{ background: colorBgContainer, display: "flex", alignItems: "center", padding: mobileView ? "0 0px" : "0 36px" }}>
                    {mobileView && (
                        <Button
                            onClick={toggleCollapsed}
                            style={{
                                padding: "0 24px",
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginLeft: "10px",
                            }}>
                            {collapsed ? (
                                <MenuUnfoldOutlined style={{ color: "#0066ff" }} />
                            ) : (
                                <MenuFoldOutlined style={{ color: "#0066ff" }} />
                            )}
                        </Button>
                    )}

                    <div className="demo-logo-vertical" style={{ display: "flex", justifyContent: "center", alignItems: 'end', gap: '20px' }}>
                        <img src={logo} alt="Logo" style={logoStyle} />
                        <span>1.0.0V</span>
                    </div>
                </Header>
                <Content style={{ margin: mobileView ? "0 0px" : "0 16px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
                    <Dashboard />
                </Content>

                <Footer style={{
                    backgroundColor: '#fafafa',
                    bottom: '0',
                    boxShadow: '0 -1px 2px 0 #0000000d',
                    color: ' #5b626b',
                    minHeight: '60px',
                    width: '100%',
                    textAlign: 'center'
                }}>
                    Orjin {new Date().getFullYear()} - Design & Develop by Orjin Team
                </Footer>

                <StyledButton onClick={handleScrollToTop}><UpOutlined /></StyledButton>
            </Layout>
        </Layout >
    );
};