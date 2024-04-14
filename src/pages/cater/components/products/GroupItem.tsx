import { Text, View } from "@tarojs/components";

import styles from "./Styles.module.less";
import { Product } from "./Product";

interface GroupItemProps {
  id: string;
  title: string;
  items: any[];
}

const GroupItem = ({ id, title, items }: GroupItemProps) => {
  return (
    <View className={styles.group} id={id}>
      <View className={styles.groupTitle}>{title}</View>
      {items.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </View>
  );
};

export { GroupItem };
