import { View, Text, Image } from "@tarojs/components";

import styles from "./GroupOrder.module.less";

import GroupIcon from "../../../../assets/icons/group.svg";

const GroupOrder = () => {
  return (
    <View className={styles.groupContainer}>
      <View className={styles.group}>
        <Text className={styles.groupText}>拼单</Text>
        <Image className={styles.groupIcon} src={GroupIcon} />
      </View>
    </View>
  );
};

export { GroupOrder };
