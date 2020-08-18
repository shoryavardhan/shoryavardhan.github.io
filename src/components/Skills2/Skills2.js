import React from "react";
import { StyledSkills } from "./Skills2.styled";
const Skills = () => {
  return (
    <StyledSkills>
      <div class="cont">
      <div class="progress-circle p10">
        <span>10%</span>
        <div class="left-half-clipper">
          <div class="first50-bar"></div>
          <div class="value-bar"></div>
        </div>
      </div>
      <div class="progress-circle p33">
        <span>33%</span>
        <div class="left-half-clipper">
          <div class="first50-bar"></div>
          <div class="value-bar"></div>
        </div>
      </div>
      <div class="progress-circle over50 p66">
        <span>66%</span>
        <div class="left-half-clipper">
          <div class="first50-bar"></div>
          <div class="value-bar"></div>
        </div>
      </div>
      <div class="progress-circle over50 p77">
        <span>77%</span>
        <div class="left-half-clipper">
          <div class="first50-bar"></div>
          <div class="value-bar"></div>
        </div>
      </div>
      <div class="progress-circle over50 p99">
        <span>99%</span>
        <div class="left-half-clipper">
          <div class="first50-bar"></div>
          <div class="value-bar"></div>
        </div>
      </div>
      <div class="progress-circle over50 p100">
        <span>100%</span>
        <div class="left-half-clipper">
          <div class="first50-bar"></div>
          <div class="value-bar"></div>
        </div>
      </div>
      </div>
    </StyledSkills>

  )}
export default Skills;

