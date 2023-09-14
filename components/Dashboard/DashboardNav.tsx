import React from "react";
import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Burger,
  Tooltip,
  Indicator,
} from "@mantine/core";
import { FiChevronDown } from "react-icons/fi";
import { RiAppsLine } from "react-icons/ri";
import classnames from "classnames";
import { useAppStateContext } from "../../context/contextProvider";
import { headerLinks } from "../../assets/links/index";
import { BiLocationPlus } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { FaRegBell, FaSolarPanel } from "react-icons/fa";
import { HiOutlineStar, HiOutlineLightningBolt } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import styles from "./DashboardNav.module.scss";
// import "./Navbar.scss";

const HEADER_HEIGHT = 80;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

type Props = {};

const DashboardNav = (props: Props) => {
  const { classes } = useStyles();

  //@ts-ignore
  const { drawerActive, setDrawerActive, setLoginModalActive } =
    useAppStateContext();

  const getLinkClasses = (label: string) =>
    classnames(
      `rounded hover: hover:shadow py-2 px-5 mx-1 transition-all font-semibold hover:text-black text-gray-600  nav__link ${styles.nav__link}`,
      {
        "text-themeBlue1": label === "Home",
      }
    );

  const items = headerLinks.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <a
              href={link.link}
              className={getLinkClasses(link.label)}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                {/* @ts-ignore */}
                <span className={classes.linkLabel}>{link.label}</span>
                <FiChevronDown size={12} className="ml-2" />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={getLinkClasses(link.label)}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header
      height={HEADER_HEIGHT}
      className={`w-full ${styles.app__navbar}`}
      id={styles.navbar}
    >
      <Container
        className={`${classes.header} m-0 flex w-full max-w-full px-4`}
      >
        <RiAppsLine size={35} />
        <div className="items-center hidden xl:flex">
          <Group
            spacing={5}
            className={classes.links}
            style={{ marginRight: "4.25rem" }}
          >
            {items}
          </Group>

          <div
            className="flex items-center gap-2.5"
            style={{ marginRight: "5rem" }}
          >
            <BiLocationPlus size={22.5} />
            <Indicator
              inline
              size={12}
              offset={5}
              position="top-end"
              color="#313EF7"
              withBorder
            >
              <FaRegBell size={22.5} />
            </Indicator>
          </div>
          <Tooltip
            label="Profile"
            withArrow
            // @ts-ignore
            placement="center"
            position="bottom"
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="bg-gray-400 p-2 rounded-full shadow">
                <BsFillPersonFill size={25} color="white" />
              </span>
              <span className="flex items-center gap-1">
                <span>
                  <span className="text-gray-400 text-14 font-medium">
                    Hi,{" "}
                  </span>
                  <span className="text-gray-900 font-bold text-14">
                    ImKunal13z
                  </span>
                </span>
                <MdOutlineKeyboardArrowDown size={22.5} />
              </span>
            </div>
          </Tooltip>
        </div>

        <Burger
          opened={drawerActive}
          onClick={() => {
            setDrawerActive(true);
          }}
          className={`${classes.burger} block xl:hidden`}
          size="sm"
        />
      </Container>
    </Header>
  );
};

export default DashboardNav;
