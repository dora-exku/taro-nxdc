import { ConfigProvider } from "@taroify/core";

const Layout = ({ children }) => {
  const primaryColor = "#718c29";
  const primaryBackgroundColor = "#f3f4ef";

  return (
    <ConfigProvider
      theme={{
        primaryBackgroundColor: primaryBackgroundColor,
        primaryColor: primaryColor,
        tabsLineBackgroundColor: primaryColor,
        tabsLineBorderRadius: "999px",
        sidebarActiveColor: primaryColor,
        sidebarActiveBorderWidth: 0,
        backgroundColor: "#F7F7F7",
        sidebarTabBackgroundColor: "#F7F7F7",
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export { Layout };
