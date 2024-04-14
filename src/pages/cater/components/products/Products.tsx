import { ScrollView, View } from "@tarojs/components";

import styles from "./Styles.module.less";
import { GroupItem } from "./GroupItem";

interface ProductsProps {
  data: any[];
  scrollTop: number;
  onScroll: (e: any) => void;
}

const Products = ({ data, scrollTop, onScroll }: ProductsProps) => {
  return (
    <ScrollView
      scrollY
      className={styles.container}
      scrollWithAnimation
      scrollTop={scrollTop}
      id="products"
      onScroll={onScroll}
    >
      {data.map((item) => (
        <GroupItem
          key={item.id}
          id={`product-menu-${item.id}`}
          title={item.name}
          items={item.products}
        />
      ))}
      <View className={styles.spacer} />
    </ScrollView>
  );
};

export { Products };
