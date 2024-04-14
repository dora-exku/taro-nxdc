import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./style.less";

type StatusBarProps = {
  children?: React.ReactNode;
};

const StatusBar = ({ children }: StatusBarProps) => {
  // 获取状态栏高度
  const { statusBarHeight } = Taro.getSystemInfoSync();
  return (
    <View className="status-bar" style={{ height: `${statusBarHeight}px` }}>
      {children}
    </View>
  );
};

export { StatusBar };
