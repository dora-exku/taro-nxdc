import { Image, Swiper, SwiperItem, View } from "@tarojs/components";

import styles from "./Notices.module.less";

type NoticeItem = {
  id: string;
  icon: string;
  title: string;
};

type NoticesProps = {
  notices: NoticeItem[];
};

const Notices = ({ notices }: NoticesProps) => {
  return (
    <Swiper
      className={styles.notices}
      // vertical
      autoplay
      vertical
      circular
    >
      {notices.map((notice) => (
        <SwiperItem key={notice.id} className={styles.item}>
          <Image src={notice.icon} className={styles.icon} mode="heightFix" />
          <View className={styles.title}>{notice.title}</View>
        </SwiperItem>
      ))}
    </Swiper>
  );
};

export { Notices, NoticeItem, NoticesProps };
