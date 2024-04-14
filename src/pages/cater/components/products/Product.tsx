import { Image, View, Text } from "@tarojs/components";

import { Add as IconAdd } from "@taroify/icons";

import styles from "./Styles.module.less";

interface ProductProps {
  product: any;
}

const Product = ({ product }: ProductProps) => {
  return (
    <View
      className={`${styles.product} ${
        product.is_sold_out ? styles.slodOut : ""
      }`}
    >
      <Image className={styles.image} src={product.image} mode="aspectFill" />
      <View className={styles.info}>
        <View className={styles.header}>
          <View className={styles.title}>{product.title}</View>
          <View className={styles.tags}>
            {product?.tags.map((tag: any, index: number) => {
              return (
                <>
                  {index > 0 && (
                    <Text key={index} className={styles.tagDivider} />
                  )}
                  <Text
                    key={index}
                    style={{
                      color: tag.color,
                    }}
                  >
                    {tag.name}
                  </Text>
                </>
              );
            })}
          </View>
          <View className={styles.desc}>{product.desc}</View>
        </View>
        <View className={styles.footer}>
          <View>
            <Text className={styles.symbol}>¥</Text>
            {/* price 保留2位小数 */}
            <Text className={styles.price}>
              {(product.price / 100).toFixed(2)}
            </Text>
          </View>
          <IconAdd className={styles.add} size="20px" />
        </View>
      </View>
    </View>
  );
};

export { Product };
