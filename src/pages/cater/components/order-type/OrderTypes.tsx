import { Text, View } from "@tarojs/components";

import styles from "./OrderTypes.module.less";

interface OptionItem {
  label: string;
  value: string;
}

interface OrderTypesProps {
  value: string;
  options: OptionItem[];
  onChange: (value: string) => void;
}

const OrderTypes = ({ value, options, onChange }: OrderTypesProps) => {
  function handleChange(value: string) {
    console.log(value);
    onChange(value);
  }

  return (
    <View className={styles.types}>
      {options.map((option) => (
        <Item
          key={option.value}
          label={option.label}
          value={option.value}
          active={option.value === value}
          onChange={handleChange}
        />
      ))}
    </View>
  );
};

interface ItemProp extends OptionItem {
  active: boolean;
  onChange: (value: string) => void;
}

const Item = ({ label, value, active, onChange }: ItemProp) => {
  function handleClick() {
    onChange(value);
  }

  return (
    <View
      className={`${styles.item} ${active ? styles.active : ""}`}
      onClick={handleClick}
    >
      <Text>{label}</Text>
    </View>
  );
};

export { OrderTypes, OptionItem, OrderTypesProps };
