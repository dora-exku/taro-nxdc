import { memo } from "react";
import { ScrollView, View, Text } from "@tarojs/components";
import { Sidebar } from "@taroify/core";

import styles from "./Menus.module.less";

interface MenusProps {
  menus: any[];
  value: any;
  onChange: (value: any) => void;
}

const Menus = memo(({ menus, value, onChange }: MenusProps) => {
  return (
    <ScrollView scrollY className={styles.menuContainer}>
      <Sidebar className={styles.menus} onChange={onChange} value={value}>
        {menus.map((item) => (
          <Sidebar.Tab key={item.id} value={item.id} className={styles.item}>
            <View className={styles.itemContainer} id={`menu-${item.id}`}>
              <Text className={styles.text}>{item.name}</Text>
              {item.tag && <Text className={styles.tag}>{item.tag}</Text>}
            </View>
          </Sidebar.Tab>
        ))}
      </Sidebar>
      {/* safe */}
      <View className={styles.spacer} />
      <View className={styles.safe} />
    </ScrollView>
  );
});

export { Menus };
