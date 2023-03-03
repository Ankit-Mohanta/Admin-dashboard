import React,{useContext} from "react";
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutLinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullScreenExitOutLinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutLinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutLineOutLinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutLinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../Context/darkModeContext";

export const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="searchBar">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutLinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutLinedIcon className="icon" onClick={()=>dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
            <FullScreenExitOutLinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutLinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutLineOutLinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutLinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://cdn.pixabay.com/photo/2021/11/30/08/24/strawberries-6834750_960_720.jpg"
              alt=""
              className="avtar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
