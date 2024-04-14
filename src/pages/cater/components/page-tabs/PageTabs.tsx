import { ScrollView, Text, View } from "@tarojs/components";

import styles from "./PageTabs.module.less";

interface PageTabItem {
  label: string;
  value: string;
}

interface PageTabsProps {
  className?: string;
  tabs: PageTabItem[];
  tab: string;
  onChangeTab: (value: string) => void;
}

const PageTabs = ({ className, tabs, tab, onChangeTab }: PageTabsProps) => {
  function handleTabChange(value: string) {
    onChangeTab(value);
  }

  return (
    <ScrollView
      scrollX
      className={`${styles.tabs} ${className}`}
      scrollWithAnimation
    >
      {tabs.map((item) => (
        <PageTabItem
          key={item.value}
          value={item.value}
          label={item.label}
          active={tab === item.value}
          onChange={handleTabChange}
        />
      ))}
    </ScrollView>
  );
};

export { PageTabs, PageTabItem, PageTabsProps };

interface PageTabItemProps extends PageTabItem {
  active: boolean;
  onChange: (value: string) => void;
}

const PageTabItem = ({ value, label, active, onChange }: PageTabItemProps) => {
  function handleClick() {
    onChange(value);
  }

  return (
    <View
      className={`${styles.item} ${active ? styles.active : ""}`}
      onClick={handleClick}
    >
      <Text className={`${styles.text}`}>{label}</Text>
    </View>
  );
};
