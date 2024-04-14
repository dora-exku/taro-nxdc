import { useCallback, useEffect, useRef, useState } from "react";
import Taro, { useLoad } from "@tarojs/taro";
import { ScrollView, Text, View } from "@tarojs/components";

import { StatusBar } from "@/components/status-bar/StatusBar";
import { Navbar } from "@/components/nav-bar/NavBar";
import { Layout } from "@/components/layout/Layout";

import styles from "./Index.module.less";

import { NoticeItem, Notices } from "./components/notices/Notices";
import { OptionItem } from "./components/order-type/OrderTypes";
import { Location } from "./components/location/Location";
import { GroupOrder } from "./components/group-order/GroupOrder";
import { Header } from "./components/header/Header";
import { PageTabItem, PageTabs } from "./components/page-tabs/PageTabs";
import { Menus } from "./components/menus/Menus";
import { Products } from "./components/products/Products";

const types: OptionItem[] = [
  {
    label: "自取",
    value: "self-take",
  },
  {
    label: "外卖",
    value: "takeout",
  },
  // t堂食
  {
    label: "堂食",
    value: "dine-in",
  },
];

const notices: NoticeItem[] = [
  {
    id: "1",
    icon: "https://img.yzcdn.cn/vant/apple-1.jpg",
    title: "新用户下单立减8元",
  },
  {
    id: "2",
    icon: "https://img.yzcdn.cn/vant/apple-2.jpg",
    title: "新用户下单立减8元",
  },
];

const pageTabs: PageTabItem[] = [
  {
    label: "奈雪菜单 Menu",
    value: "menu",
  },
  {
    label: "奈雪八香榜",
    value: "custom1",
  },
];

const tmpProducts = [
  {
    id: 1,
    title: "龙井奶盖龙井茶",
    image: "https://dora-naixue.oss-cn-beijing.aliyuncs.com/products/p1.jpg",
    tags: [
      {
        name: "轻负担",
        color: "#94690E",
      },
      {
        name: "升级龙井奶盖",
        color: "#94690E",
      },
    ],
    desc: "一口奶盖一口茶，品味三重春日季",
    price: 1800,
    is_sold_out: false,
  },
  {
    id: 2,
    title: "龙井知春清乳茶",
    image: "https://dora-naixue.oss-cn-beijing.aliyuncs.com/products/p3.jpg",
    tags: [
      {
        name: "轻负担",
        color: "#94690E",
      },
      {
        name: "大师龙井",
        color: "#94690E",
      },
      {
        name: "升级A2水牛乳",
        color: "#94690E",
      },
    ],
    desc: "鲜灵龙井香x清甜牛乳香",
    price: 1800,
    is_sold_out: false,
  },
  {
    id: 3,
    title: "龙井知春",
    image: "https://dora-naixue.oss-cn-beijing.aliyuncs.com/products/p3.jpg",
    tags: [
      {
        name: "大师龙井",
        color: "#94690E",
      },
      {
        name: "一口鲜灵",
        color: "#94690E",
      },
    ],
    desc: "龙井旷怡，香气内敛，一口鲜灵",
    price: 1300,
    is_sold_out: false,
  },
  {
    id: 4,
    title: "霸气香水柠檬油柑(首创)",
    image: "https://dora-naixue.oss-cn-beijing.aliyuncs.com/products/p3.jpg",
    tags: [
      {
        name: "金奖茶",
        color: "#94690E",
      },
      {
        name: "风味独特",
        color: "#94690E",
      },
    ],
    desc: "2021年奈雪首创",
    price: 1900,
    is_sold_out: true,
  },
];

const data = [
  {
    id: 1,
    name: "大师龙井\n一口知春",
    products: tmpProducts,
    tag: "必点",
  },
  {
    id: 2,
    name: "春色品杨桃\n轻盈饮春香",
    products: tmpProducts,
  },
  {
    id: 3,
    name: "八香必喝榜\n茶香更好喝",
    products: tmpProducts,
  },
  {
    id: 4,
    name: "霸气鲜果茶",
    products: tmpProducts,
  },
  {
    id: 5,
    name: "原叶鲜奶茶",
    products: tmpProducts,
  },
  {
    id: 6,
    name: "有料鲜奶茶",
    products: tmpProducts,
  },
  {
    id: 7,
    name: "热饮推荐",
    products: tmpProducts,
  },
  {
    id: 8,
    name: "面包",
    products: tmpProducts,
  },
  {
    id: 9,
    name: "蛋糕·点心",
    tag: "上新",
    products: tmpProducts,
  },
  {
    id: 10,
    name: "原叶纯茶",
    products: tmpProducts,
  },
];

function debounce(fn: Function, delay: number) {
  let timer: any = null;
  return function (...args: any[]) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const Index = () => {
  // takeout or self-take
  const [tab, setTab] = useState<string>("self-take");
  const [pageTab, setPageTab] = useState<string>("menu");

  useLoad(() => {
    console.log("Page loaded");
  });

  function handleTabChange(value: string) {
    setTab(value);
  }

  function handlePageTabChange(value: string) {
    setPageTab(value);
  }

  return (
    <Layout>
      <View className={styles.header} id="header">
        <StatusBar />
        <Navbar>
          <Header types={types} tab={tab} onChangeTab={handleTabChange} />
        </Navbar>
        <View className={styles.storeInfo}>
          <Location />
          <GroupOrder />
        </View>
        <View className={styles.notices}>
          <Notices notices={notices} />
        </View>
        <PageTabs
          tabs={pageTabs}
          tab={pageTab}
          onChangeTab={handlePageTabChange}
        />
        <View
          style={{
            height: "4px",
            backgroundColor: "#F2F2F2",
          }}
        />
      </View>
      {pageTab === "menu" && <MenuPage />}
      {pageTab === "custom1" && <View>Custom 1</View>}
    </Layout>
  );
};

export default Index;

const MenuPage = () => {
  // header height
  const [pageHeight, setPageHeight] = useState<number>(0);
  const [mainHeight, setMainHeight] = useState<number>(0);
  // menu
  const [currentMenuId, setCurrentMenuId] = useState<number>(data[0].id);
  // 控制 main 的滚动
  const [productsScrollTop, setProductsScrollTop] = useState<number>(0);
  const [productsScrollTopEnd, setProductsScrollTopEnd] = useState<number>(0);

  function handleMenuChange(id: number) {
    setCurrentMenuId(id);
    Taro.createSelectorQuery()
      .select(`#product-menu-${id}`)
      .boundingClientRect()
      .exec((res) => {
        const heightHeight = pageHeight - mainHeight;
        setProductsScrollTop(res[0].top - heightHeight + productsScrollTopEnd);
      });
  }

  const handleProductScroll = useCallback(
    function (e: any) {
      setProductsScrollTopEnd(e.detail.scrollTop);
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        Taro.createSelectorQuery()
          .selectAll(`#product-menu-${data[i].id}, #products`)
          .boundingClientRect()
          .exec((rect) => {
            const menu = rect[0].find(
              (_item: any) => _item.id === `product-menu-${data[i].id}`
            );
            const products = rect[0].find(
              (_item: any) => _item.id === "products"
            );
            const height = menu.height;
            if (
              menu.top - products.top <= 0 &&
              Math.abs(menu.top - products.top) < height
            ) {
              // console.log("item", item);
              setCurrentMenuId(item.id);
            }
          });
      }
    },
    [setCurrentMenuId, setProductsScrollTopEnd]
  );

  const handleProductScrollDebounce = debounce(handleProductScroll, 200);

  useEffect(() => {
    Taro.createSelectorQuery()
      .select("#header")
      .boundingClientRect()
      .exec((res) => {
        // 获取页面高度
        const systemInfo = Taro.getSystemInfoSync();
        setPageHeight(systemInfo.windowHeight);
        setMainHeight(systemInfo.windowHeight - res[0].height);
      });
  }, []);

  return (
    <View
      className={styles.main}
      style={{
        height: `${mainHeight}px`,
        // backgroundColor: "#fff",
      }}
    >
      <Menus menus={data} value={currentMenuId} onChange={handleMenuChange} />
      <Products
        data={data}
        scrollTop={productsScrollTop}
        onScroll={handleProductScrollDebounce}
      />
    </View>
  );
};
