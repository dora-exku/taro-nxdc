import { View, Text } from "@tarojs/components";
import { ArrowRight } from "@taroify/icons";

import styles from "./Location.module.less";

const Location = () => {
  return (
    <View className={styles.container}>
      <View className={styles.address}>
        <Text>北京华联店</Text>
        <ArrowRight size={16} color="#a6a6a6" />
      </View>
      <View className={styles.distance}>
        <Text>距离 1.2km</Text>
      </View>
    </View>
  );
};

export { Location };
