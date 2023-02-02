import React from "react";
import { Container, Content, Dash, Menu } from "./styles";
import { RxDashboard } from "react-icons/rx";
import { CgNotes } from "react-icons/cg";
import { BsArrowRightShort, BsHeart } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import Salad from "../../assets/salad.avif";
import SearchBar from "../../components/SearchBar";
import Homemade from "../../assets/homemade.png";

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

        <div id="content-advertisement">
          <strong>Add your own recipe</strong>
          <span>
            Upload your own home-made recipe, and share it with other members of
            our community
          </span>
          <img src={Homemade} alt="eating-cake" />
        </div>

        <div id="content-title">
          <span>Based on the type of food you like</span>
          <a>View More </a>
          <BsArrowRightShort size={25} />
        </div>
      </Content>

      <Dash>
        <div>ef</div>
      </Dash>
    </Container>
  );
};

export default Main;
