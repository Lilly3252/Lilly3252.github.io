import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  left: 2rem;
  bottom: 0;
  z-index: 3;
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};
`;

const SocialIcon = () => {
  return (
    <Icons>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/Lilly3252" }}
        >
          <Github width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.facebook.com/awakening.nightmares/" }}
        >
          <Facebook width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://twitter.com/LoryVeilleux" }}
        >
          <Twitter width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{
            pathname:
              "https://www.youtube.com/channel/UCnMHOgOkSk_AGewPqji52GQ",
          }}
        >
          <YouTube width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <Line />
    </Icons>
  );
};
export default SocialIcon;
