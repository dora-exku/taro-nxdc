import { View } from "@tarojs/components";
import { Search, CouponOutlined } from "@taroify/icons";

import styles from "./Header.module.less";

import { OptionItem, OrderTypes } from "../order-type/OrderTypes";

interface HeaderProps {
  types: OptionItem[];
  tab: string;
  onChangeTab: (value: string) => void;
}

const Header = ({ types, tab, onChangeTab }: HeaderProps) => {
  return (
    <View className={styles.container}>
      <OrderTypes options={types} value={tab} onChange={onChangeTab} />
      <View className={styles.right}>
        <Search size={20} className={styles.icon} />
        <View className={styles.divider} />
        <CouponOutlined size={20} className={styles.icon} />
      </View>
    </View>
  );
};

export { Header };
