import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import {
  FaCogs,
  FaUserEdit,
  FaUserFriends,
  FaPhotoVideo,
  FaWpforms,
} from "react-icons/fa";

export const SidebarData = [
  {
    title: "Overview",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Set Up",
    path: "/setup",
    icon: <FaCogs />,
  },
  {
    title: "Registration form",
    path: "/registration form",
    icon: <FaWpforms />,
  },
  {
    title: "Attendees",
    path: "#",
    icon: <FaUserFriends />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Delegates",
        path: "/Delegates",
        icon: <FaUserFriends />,
      },
      {
        title: "Speaker",
        path: "/speaker",
        icon: <FaUserEdit />,
      },
      {
        title: "Sponsors",
        path: "/sponsors",
        icon: <FaUserEdit />,
      },
      {
        title: "Exhibitors",
        path: "/exhibitor",
        icon: <FaUserEdit />,
      },
    ],
  },
  {
    title: "Recordings",
    path: "/recordings",
    icon: <FaPhotoVideo />,
  },

  {
    title: "Analytics",
    path: "#",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Reports",
        path: "/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Reports 2",
        path: "/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Reports 3",
        path: "/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
 
 
];
