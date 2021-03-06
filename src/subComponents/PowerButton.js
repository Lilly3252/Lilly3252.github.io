//home button

// eslint-disable-next-line no-unused-vars
import react from "react";
import styled from "styled-components";
import { PowerBtn } from "../components/AllSvgs";
import {NavLink} from "react-router-dom"
const Power = styled.div`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.6999999999999993rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;
  &:hover {
    background-color: rgba(247, 247, 247, 0.5);
    box-shadow: 0 0 8px 6px rgba(0, 000, 0, 0.3);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;
const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/">
        <PowerBtn width={45} height={40} fill="currentColor" />
      </NavLink>
    </Power>
  );
};
export default PowerButton;
