import { useSelector } from "react-redux";
import type { MenuTheme } from "antd/es/menu/MenuContext";
import type { SiderTheme } from "antd/es/layout/Sider";

const ThemeApp = () => {
  const theme = useSelector((state: any) => state.theme.value);
  switch (theme) {
    case "light":
      return LightTheme;
    case "dark":
      return DarkTheme;
  }
}

const LightTheme = {
  menu: "light" as MenuTheme,
  sider: "light" as SiderTheme,
  header: {
    bgColor: "white",
    textColor: "black"
  },
  themeSwitch: "#26B1FF",
  content: "#F5F5F5"
}

const DarkTheme = {
  menu: "dark" as MenuTheme,
  sider: "dark" as SiderTheme,
  header: {
    bgColor: '#0C356A',
    textColor: "#ddf2ff"
  },
  themeSwitch: "orange",
  content: "#394B59"
}

export default ThemeApp;