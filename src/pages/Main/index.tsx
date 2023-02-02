import React from "react";
import { Container, Content, Dash, Menu } from "./styles";
import { RxDashboard } from "react-icons/rx";
import { CgNotes } from "react-icons/cg";
import { BsHeart } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import Salad from "../../assets/salad.avif";
import SearchBar from "../../components/SearchBar";

const Main: React.FC = () => {
  return (
    <Container>
      <Menu>
        <h2>Recipe Finder</h2>
        <ul>
          <li>
            <RxDashboard size={25} />
            <a href="#">Overview </a>
          </li>
          <li>
            <CgNotes size={25} />
            <a href="#">Recipes </a>
          </li>
          <li>
            <BsHeart size={25} />
            <a href="#">Favorite </a>
          </li>
          <li>
            <HiUserGroup size={25} />
            <a href="#">Community </a>
          </li>
          <li>
            <FiSettings size={25} />
            <a href="#">Setting </a>
          </li>
        </ul>
        <div id="upload_modal">
          <img src={Salad} alt="salad" />
          <span>
            Share your own <strong>Recipe</strong> with the community
          </span>

          <button>Upload Now</button>
        </div>
      </Menu>

      <Content>
        <SearchBar />
      </Content>

      <Dash>
        <div>ef</div>
      </Dash>
    </Container>
  );
};

export default Main;
