import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { BsMusicNote } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import { IoIosRadio } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { ImNewspaper } from "react-icons/im";
import { PiGameControllerThin } from "react-icons/pi";
import { BsLightbulb } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";
import { BiLike } from "react-icons/bi";
import { RxStopwatch } from "react-icons/rx";

const SideBar = () => {
  const toggle = useSelector((state) => state.toggle);

  if (!toggle.isMenu) return null;

  return (
    <div className="col-2 sidbar">
      <ul>
        <li>
          <Link to="/">
            <span className="side_icons">
              <AiFillHome />
            </span>
            Home
          </Link>
        </li>

        <li>
          <span className="side_icons">
            <TbBrandYoutubeKids />
          </span>
          Shorts
        </li>

        <li>
          <span className="side_icons">
            <MdOutlineSubscriptions />
          </span>
          Subscriptions
        </li>
      </ul>
      <ul>
        <li>
          <span className="side_icons">
            <MdOutlineVideoLibrary />
          </span>
          Libray
        </li>
        <li>
          <span className="side_icons">
            <MdOutlineHistory />
          </span>{" "}
          History
        </li>
        <li>
          <span className="side_icons">
            <MdOutlineVideoLibrary />
          </span>
          Your Videos
        </li>
        <li>
          <span className="side_icons">
            <RxStopwatch />
          </span>
          Watch later
        </li>
        <li>
          <span className="side_icons">
            <BiLike />
          </span>
          Liked videos
        </li>
      </ul>

      <h1>Expolre</h1>
      <ul>
        <li>
          <span className="side_icons">
            <BsFire />
          </span>{" "}
          Trendig
        </li>
        <li>
          <span className="side_icons">
            <BiShoppingBag />
          </span>{" "}
          Shopping
        </li>
        <li>
          <span className="side_icons">
            <BsMusicNote />
          </span>{" "}
          Music
        </li>
        <li>
          <span className="side_icons">
            <BiCameraMovie />
          </span>{" "}
          Movies
        </li>
        <li>
          <span className="side_icons">
            <IoIosRadio />
          </span>{" "}
          Live
        </li>
        <li>
          <span className="side_icons">
            <SiYoutubegaming />
          </span>{" "}
          Gaming
        </li>
        <li>
          <span className="side_icons">
            <ImNewspaper />
          </span>{" "}
          News
        </li>
        <li>
          <span className="side_icons">
            <PiGameControllerThin />
          </span>{" "}
          Sports
        </li>
        <li>
          <span className="side_icons">
            <BsLightbulb />
          </span>{" "}
          Learing
        </li>
        <li>
          <span className="side_icons">
            <GiClothes />
          </span>{" "}
          Fashion & Beauty
        </li>
      </ul>
      <h1>More from YouTube</h1>
      <ul>
        <li>Youtube Premium</li>
        <li>Youtube Studio</li>
        <li>Youtube Music</li>
        <li>Youtube Kids</li>
      </ul>
      <ul>
        <li>Settings</li>
        <li>Report history</li>
        <li>Help</li>
        <li>Send feedback</li>
      </ul>
    </div>
  );
};

export default SideBar;
