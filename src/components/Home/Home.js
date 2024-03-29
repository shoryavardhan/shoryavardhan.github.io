import React from "react";
import { StyledHome } from "./Home.styled";
import TypeIt from "typeit-react";
import {StyledButton} from "/home/khanna/Desktop/Productive/SelfProjects/Portfolio/Portfolio (Main)/src/components/Button/Button.styled.js";


const Home = () => {
  return (
    <StyledHome>
      <p>Hi, my name is</p>
      <h1>Shorya Khanna.</h1>
      <h2 className="Home">
        <TypeIt
          options={{ loop: true }}
          getBeforeInit={(instance) => {
            instance
              .pause(500)
              .type("I'm a developer!", { delay: 0 })
              .pause(500)
              .delete(8)
              .type("signer!")
              .pause(500)
              .delete(9)
              .type("programmar!")
              .pause(500)
              .delete(3)
              .type("er!")
              .pause(500)
              .delete(11)
              .type("bookworm!")
              .pause(500)
              .go();
            return instance;
          }}
        />
      </h2>
      <h3>
        I'm a software engineer based in Delhi NCR specialising in building
        websites, softwares and everything in between. I like to be up-to-date
        in terms pf technology advancements in the IT sector.{" "}
      </h3>
      <StyledButton>
        about me
      </StyledButton>
    </StyledHome>

  );
};

export default Home;
