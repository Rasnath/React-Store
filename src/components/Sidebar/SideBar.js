import React from "react";
import classNames from "classnames";
import SidebarItem from "./SidebarItem";
import items from "../../data/sidebar.json";
import "./SideBar.css";

const SideBar = ({ isOpen }) => (
  <div className={classNames("sidebars", { "is-open": isOpen })}>
    <h3 className="sidebar-header">Menu</h3>
    <div className="sidebar">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  </div>
);

export default SideBar;
