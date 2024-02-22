import { useState } from "react";
import { Breadcrumb, Layout, theme, Button } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";
import Dashboard from "../dashboard/Dashboard";
import logo from "../assets/images/logo.png";


const { Header, Content, Footer } = Layout;


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

    return (
        <Layout style={{ minHeight: "100vh" }}>

            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer, display: "flex", alignItems: "center",  padding: mobileView ? "0 0px" : "0 24px"  }}>
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

                    <div className="demo-logo-vertical" style={{ display: "flex", justifyContent: "center" , alignItems: 'end', gap: '20px'}}>
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
            </Layout>
        </Layout >
    );
};