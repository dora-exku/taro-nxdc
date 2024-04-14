import { View } from "@tarojs/components";

import "./style.less";
import Taro from "@tarojs/taro";

type NavbarProps = {
  className?: string;
  children: React.ReactNode;
};

const Navbar = ({ className, children }: NavbarProps) => {
  const system = Taro.getSystemInfoSync();
  const rect = Taro.getMenuButtonBoundingClientRect();
  const navbarHeight =
    (rect.top - (system?.statusBarHeight || 0)) * 2 + rect.height;
  const paddingRight =
    system.screenWidth - rect.left + (system.screenWidth - rect.right);
  const paddingLeft = system.screenWidth - rect.right;
  const paddingVertical = (navbarHeight - rect.height) / 2;

  return (
    <View
      className={`${className} nav-bar`}
      style={{
        height: `${navbarHeight}px`,
        paddingRight: `${paddingRight}px`,
        paddingLeft: `${paddingLeft}px`,
        paddingTop: `${paddingVertical}px`,
        paddingBottom: `${paddingVertical}px`,
      }}
    >
      {children}
    </View>
  );
};

export { Navbar };
