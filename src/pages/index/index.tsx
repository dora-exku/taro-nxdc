import { useLoad } from "@tarojs/taro";

import "./index.less";
import { Banner, BannerItemType } from "./components/banner/Banner";
import { Main } from "./components/main/Main";
import { MenuItem } from "./components/Menus/Menus";

const banners: BannerItemType[] = [
  {
    type: "video",
    image: "",
    floor: "",
    video:
      "https://dora-naixue.oss-cn-beijing.aliyuncs.com/cater/banners/banner1.mp4",
  },
  {
    type: "image",
    image:
      "https://dora-naixue.oss-cn-beijing.aliyuncs.com/cater/banners/banner2.png",
    floor:
      "https://dora-naixue.oss-cn-beijing.aliyuncs.com/cater/banners/banner2_floor.png",
    video: "",
  },
  {
    type: "image",
    image:
      "https://dora-naixue.oss-cn-beijing.aliyuncs.com/cater/banners/banner3.png",
    floor:
      "https://dora-naixue.oss-cn-beijing.aliyuncs.com/cater/banners/banner3_floor.png",
    video: "",
  },
  {
    type: "image",
    image:
      "https://dora-naixue.oss-cn-beijing.aliyuncs.com/cater/banners/banner4.png",
    floor:
      "https://dora-naixue.oss-cn-beijing.aliyuncs.com/cater/banners/banner4_floor.png",
    video: "",
  },
  {
    type: "image",
    image:
      "https://dora-naixue.oss-cn-beijing.aliyuncs.com/cater/banners/banner5.png",
    floor:
      "https://dora-naixue.oss-cn-beijing.aliyuncs.com/cater/banners/banner5_floor.png",
    video: "",
  },
  {
    type: "image",
    image:
      "https://dora-naixue.oss-cn-beijing.aliyuncs.com/cater/banners/banner6.png",
    floor:
      "https://dora-naixue.oss-cn-beijing.aliyuncs.com/cater/banners/banner6_floor.png",
    video: "",
  },
];

const menus: MenuItem[] = [
  {
    icon: "https://dora-naixue.oss-cn-beijing.aliyuncs.com/cater/menus/menus1.png",
    title: "加入会员群",
  },
  {
    icon: "https://dora-naixue.oss-cn-beijing.aliyuncs.com/cater/menus/menus8.png",
    title: "储66元赠6元",
  },
  {
    icon: "https://dora-naixue.oss-cn-beijing.aliyuncs.com/cater/menus/menus7.png",
    title: "成为合伙人",
  },
  {
    icon: "https://dora-naixue.oss-cn-beijing.aliyuncs.com/cater/menus/menus6.png",
    title: "企业团单",
  },
  {
    icon: "https://dora-naixue.oss-cn-beijing.aliyuncs.com/cater/menus/menus5.png",
    title: "礼品卡",
  },
  {
    icon: "https://dora-naixue.oss-cn-beijing.aliyuncs.com/cater/menus/menus4.png",
    title: "学生有礼",
  },
  {
    icon: "https://dora-naixue.oss-cn-beijing.aliyuncs.com/cater/menus/menus3.png",
    title: "一起喝",
  },
  {
    icon: "https://dora-naixue.oss-cn-beijing.aliyuncs.com/cater/menus/menus2.png",
    title: "奈雪商城",
  },
];

export default function Index() {
  // /#EAE3D2

  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <>
      <Banner banners={banners} />
      <Main menus={menus} />
    </>
  );
}
