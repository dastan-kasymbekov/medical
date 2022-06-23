import React from 'react';
import logo from "../../assets/images/medical-logo-png.png";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBorderNone} from "@fortawesome/free-solid-svg-icons";
import { fadeInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components'
import "./Sidebar.scss"

const Sidebar = () => {
  const FadeIn = styled.div`animation: 2s ${keyframes`${fadeInDown}`}`;
  return (
      <aside className="py-4">
        <FadeIn><img src={logo} alt="logo" className="h-24 block m-auto mb-4 cursor-pointer"/></FadeIn>
        <nav className="navbar-left">
          <NavLink to="/tasks" className="text-decoration-none block text-white navbar-link_works navbar-item py-2">
            <FontAwesomeIcon className="mx-3" icon={faBorderNone}/>Задачи и работы</NavLink>
          <NavLink to="/projects"
                   className="text-decoration-none block text-white navbar-link_projects navbar-item py-2">
            <FontAwesomeIcon className="mx-3" icon={faBorderNone}/>Проекты</NavLink>
          <NavLink to="/calendar"
                   className="text-decoration-none block text-white navbar-link_calendar navbar-item py-2">
            <FontAwesomeIcon className="mx-3" icon={faBorderNone}/>Календарь</NavLink>
          <NavLink to="/capabilities"
                   className="text-decoration-none block text-white navbar-link_benefits navbar-item py-2">
            <FontAwesomeIcon className="mx-3" icon={faBorderNone}/>Возможности</NavLink>
        </nav>
      </aside>
  );
};

export default Sidebar;