import { useState } from "react";
import { Image, Swiper, SwiperItem, Video, View } from "@tarojs/components";

import "./banner.less";

interface BannerItemType {
  type: "image" | "video";

  /**
   * @description 图片地址
   * @default ""
   */
  image: string;

  /**
   * @description 视频地址
   * @default ""
   */
  video: string;

  /**
   * @description 图片底部图片地址
   * @default ""
   */
  floor: string;
}

interface BannerProps {
  banners: BannerItemType[];
}

const Banner = ({ banners }: BannerProps) => {

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function handleSwiperChange(event: any) {
    const { current } = event.detail;
    setCurrentIndex(current);
  }

  return (
    <View
      className="banner-container"
    >
      {
        banners.map((banner, index) => {
          return <Image
            key={banner.floor}
            className={"banner__floor " + (currentIndex === index ? "banner__floor--active" : "")}
            src={banner.floor}
          />
        })
      }
      <Swiper
        className="banner"
        onChange={handleSwiperChange}
        autoplay
        circular
        current={currentIndex}
      >
        {
          banners.map((banner, index) => {
            return (
              <SwiperItem
                key={index}
                className="banner-item"
              >
                {
                  banner.type === "image" ? (
                    <Image
                      className="banner-item__image"
                      src={banner.image}
                    />
                  ) : (
                    <VideoItem src={banner.video} />
                  )
                }
              </SwiperItem>
            );
          })
        }
      </Swiper>
    </View>
  );
};

export { Banner, BannerProps, BannerItemType };

const VideoItem = ({ src }: { src: string }) => {
  return (
    <Video
      className="banner-item__video"
      src={src}
      controls={false}
      showFullscreenBtn={false}
      showPlayBtn={false}
      showCenterPlayBtn={false}
      showMuteBtn={false}
      showProgress={false}
      showBottomProgress={false}
      loop
      autoplay
      // 禁用video的手势
      muted
    />
  )
}