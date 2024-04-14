import { Image, ScrollView, Text, View } from "@tarojs/components"

import "./menus.less"

interface MenuItem {
  icon: string;
  title: string;
}

interface MenusProps {
  menus: MenuItem[];
  className?: string;
}

const Menus = ({ menus, className }: MenusProps) => {
  return (
    <ScrollView
      className={`${className} menus`}
      type="custom"
      scrollX
    >
      {
        menus.map((menu, index) => {
          return (
            <MenuItem
              key={menu.title}
              icon={menu.icon}
              title={menu.title}
            />
          )
        })
      }
    </ScrollView>
  )
}

export {
  Menus,
  MenusProps,
  MenuItem
}

const MenuItem = ({ icon, title }: MenuItem) => {
  return (
    <View className="menu">
      <Image
        className="menu__icon"
        src={icon}
        mode="aspectFit"
      />
      <Text className="menu__title">{title}</Text>
    </View>
  )
}