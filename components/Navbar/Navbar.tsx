import React from "react"
import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Burger,
  Tooltip,
} from "@mantine/core"
import { FiChevronDown } from "react-icons/fi"
import classnames from "classnames"
import { useAppStateContext } from "../../context/contextProvider"
import { headerLinks } from "../../assets/links/index"
import EyeVibLogo from "../Logos/EyeVibLogo"
import styles from "./Navbar.module.scss"

import { useRouter } from "next/router"
import IIT from "../../assets/images/iit-logo.png"
import Image from "next/image"

const HEADER_HEIGHT = 80

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
}))

const Navbar = () => {
  const { classes } = useStyles()
  console.log(useAppStateContext)

  //@ts-ignore

  const getLinkClasses = (label: string) =>
    classnames(
      "hover:bg-lightBlue2 rounded hover:bg-opacity-20 hover:text-lightBlue2 hover:shadow py-2 px-4 mx-2 transition-all duration-300 font-semibold",
      {
        "text-lightBlue2": label === "Home",
      }
    )

  const items = headerLinks.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ))

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
                <span>{link.label}</span>
                <FiChevronDown size={12} className="ml-2" />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      )
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
    )
  })

  const [LOGIN, SETLOGIN] = React.useState(false)
  const router = useRouter()

  //@ts-ignore
  const { loginModalActive, setLoginModalActive } = useAppStateContext()

  return (
    <div>
      <Header height={HEADER_HEIGHT} className={`w-full ${styles.app__navbar}`}>
        <Container
          className={`${classes.header} m-0 flex w-full max-w-full px-5`}
        >
          <EyeVibLogo mode="light" />
          <div className="flex items-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center">
              <Image
                className="landing-bg w-12 h-12 p-2.5 rounded-full shadow-logCard blue-image"
                src={IIT}
                alt="IIT Logo"
                width={64}
                height={64}
              />
            </div>
            <div className="ml-4">
              <p>
                Developed by Center of Excellence in Advanced Manufacturing
                Technology,
              </p>
              <p className="text-center">IIT Kharagpur</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="items-center md1050:flex hidden">
              <Group spacing={5} className={classes.links}>
                {items}
              </Group>

              <button
                className="landing-bg text-white py-2 px-6 rounded ml-2 font-semibold hover:shadow-inputTheme transition-all duration-300 hover:scale-95"
                onClick={() => {
                  setLoginModalActive(true)
                }}
              >
                Login
              </button>
            </div>
          </div>

          <Burger
            opened={loginModalActive}
            onClick={() => {
              setLoginModalActive(true)
            }}
            className={`${classes.burger} block md1050:hidden`}
            size="sm"
          />
        </Container>
      </Header>
    </div>
  )
}

export default Navbar
