import { useCallback, useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineAlert } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrBigRightLine } from "react-icons/tb";
//import image from "../../img/index.js";

//Internal import
import Style from "./BigNFTSlider.module.css";
import images from "../../img";
import Button from "../Button/Button";

const BigNFTSlider = () => {
  const [idNumber, setIdNumber] = useState(1);
  const sliderData = [
    {
      title: "Hello,NFT",
      id: 1,
      name: "Henil",
      collection: "Gym",
      price: "00000064664 ETH",
      like: 243,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        days: 27,
        hours: 10,
        minutes: 11,
        seconds: 35,
      },
    },
    {
      title: "hi ,NFT",
      id: 2,
      name: "Aniket",
      collection: "Gymdad",
      price: "00000064664 ETH",
      like: 243,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: {
        days: 27,
        hours: 10,
        minutes: 11,
        seconds: 35,
      },
    },
    {
      title: "Hello,NFT",
      id: 3,
      name: "Henil",
      collection: "Gym",
      price: "00000064664 ETH",
      like: 243,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        days: 27,
        hours: 10,
        minutes: 11,
        seconds: 35,
      },
    },
    {
      title: "Gym,NFT",
      id: 4,
      name: "Saket",
      collection: "School",
      price: "00000064664 ETH",
      like: 243,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: {
        days: 27,
        hours: 10,
        minutes: 11,
        seconds: 35,
      },
    },
    {
      title: "Hidia ,NFT",
      id: 1,
      name: "Bhavisha",
      collection: "College",
      price: "00000064664 ETH",
      like: 243,
      image: images.user4,
      nftImage: images.nft_image_1,
      time: {
        days: 27,
        hours: 10,
        minutes: 11,
        seconds: 35,
      },
    },
  ];

  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(IdNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  // dec
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(IdNumber - 1);
    }
  }, [idNumber]);

  //   useEffect(() => {
  //     inc();
  //   }, []);

  return (
    <div className={Style.BigNFTSlider}>
      <div className={Style.BigNFTSlider_box}>
        <div className={Style.BigNFTSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={Style.BigNFTSlider_box_left_creator}>
            <div className={Style.BigNFTSlider_box_left_creator_profile}>
              <Image
                className={Style.BigNFTSlider_box_left_creator_profile_img}
                src={sliderData[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />
              <div className={Style.BigNFTSlider_box_left_creator_profile_img}>
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>
            <div className={Style.BigNFTSlider_box_left_creator_collection}>
              <AiFillFire
                className={Style.BigNFTSlider_box_left_creator_collection}
              />
              <div
                className={Style.BigNFTSlider_box_left_creator_collection.info}
              >
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>
          <div className={Style.BigNFTSlider_box_left_bidding}>
            <div className={Style.BigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price}
                <span>$,221,21</span>
              </p>
            </div>
            <p className={Style.BigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={Style.BigNFTSlider_box_left_bidding_box_icon}
              />
              <span>Auction ending in </span>
            </p>
            <div className={Style.BigNFTSlider_box_left_bidding_box_timer}>
              <div
                className={Style.BigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>

              <div
                className={Style.BigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>

              <div
                className={Style.BigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>Minutes</span>
              </div>

              <div
                className={Style.BigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>Seconds</span>
              </div>
            </div>
            <div className={Style.BigNFTSlider_box_left_button}>
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>
          <div className={Style.BigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLines
              className={Style.BigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrBigRightLine
              className={Style.BigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>
        <div className={Style.BigNFTSlider_box_right}>
          <div className={Style.BigNFTSlider_box_right_box}>
            <Image
              className={Style.BigNFTSlider_box_right_box_img}
              src={sliderData[idNumber].nftImage}
              alt="NFT Image"
            />
            <div className={Style.BigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSlider;
