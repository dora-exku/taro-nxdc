import { Text, View } from "@tarojs/components";
import { Qr, Location, ArrowRight } from "@taroify/icons";

import "./main.less";
import { Menus } from "../Menus/Menus";

const Main = ({ menus }) => {
  return (
    <View className="main-container">
      <View className="main">
        <View className="main-header">
          <Text className="main-header__user">亲爱的用户</Text>
          <Text className="main-header__coupon">奈雪券 0</Text>
          <Text className="main-header__divider" />
          <View className="main-header__progress">
            <Text className="main-header__progress__text">成长值</Text>
            <View className="main-header__progress__container">
              <View
                className="main-header__progress__bar"
                style={{ width: "50%" }}
              />
            </View>
          </View>
          <View className="main-header__qrcode">
            <Text className="main-header__qrcode__text">会员码</Text>
            <Qr size={18} className="main-header__qrcode__icon" />
          </View>
        </View>
        <View className="main-location">
          <View className="main-location__left">
            <Location className="main-location__icon" size={16} />
            <Text className="main-location__text">北京华联店</Text>
          </View>
          <View className="main-location__right">
            <Text className="main-location__text">更换门店</Text>
            <ArrowRight className="main-location__icon" size={12} />
          </View>
        </View>
        <View className="main-cater">
          <View className="main-cater__btn">
            <Text>自取</Text>
          </View>
          <View className="main-cater__btn">
            <Text>外卖</Text>
          </View>
        </View>
        <View
          className="main-spacer"
        />
        <Menus
          className="main-menus"
          menus={menus}
        />
      </View>
    </View>
  );
};

export { Main };
