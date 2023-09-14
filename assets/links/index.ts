import { AiFillHome } from "react-icons/ai"
import {
  BsFileCodeFill,
  BsFillGearFill,
  BsJournalText,
  BsGraphUp,
  BsQuestionDiamondFill,
  BsTwitter,
} from "react-icons/bs"
import {
  FaBell,
  FaDiscord,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaUserPlus,
  FaUsers,
  FaFacebook,
} from "react-icons/fa"
import { GoSettings } from "react-icons/go"
import { HiMail } from "react-icons/hi"
import {
  MdAdminPanelSettings,
  MdFileCopy,
  MdOutlineSocialDistance,
} from "react-icons/md"
import { RiMessage2Fill, RiShoppingBag3Fill } from "react-icons/ri"
import { SiGoogleanalytics } from "react-icons/si"

export const headerLinks = [
  {
    link: "/",
    label: "Home",
  },
  // {
  //   link: "/about",
  //   label: "Features",
  // },
  {
    link: "#1",
    label: "Documentation",
    links: [
      {
        link: "/docs",
        label: "About CoEAMT",
      },
      {
        link: "/resources",
        label: "About the software",
      },
    ],
  },
]

export const slidelinks = [
  { label: "Metal Industry", value: "metal" },
  { label: "Mining", value: "mining" },
  { label: "Cement", value: "cement" },
  { label: "Oil", value: "oil" },
  { label: "Chemical", value: "chemical" },
]

export const slideItems = {
  metal: {
    label: "Reducing Downtime in Metal Industry",
    detail:
      "Our IoT driven Predictive maintenance solution helps to reduce downtime, monitor, collect exchange and analyze data from machines to enhance manufacturing processes",
    image: "metal.png",
  },
  mining: {
    label: "Machine failure in the mines?",
    detail:
      "Our solutions can add immense value to your entire mining supply chain by harnessing the power of Industry 4.0. The asset performance will be optimized, costs and machine downtime can be reduced leading to a boost in ROI.",
    image: "mining.png",
  },
  cement: {
    label: "No more unplanned downtime in Cement",
    detail:
      "Our Industry 4.0 digital solutions can help you tackle the challenges in cement production such as large energy consumption, high costs and complex processes. Our advanced analytics can simplify complexities and help in real-time decisionmaking. Equipment lifespan and reliability will amplify due to our condition monitoring system.",
    image: "cement.png",
  },
  oil: {
    label: "Protect your assets with Zone Approved",
    detail:
      "Our digitization solutions in industrial equipment maintenance can help oil and gas companies streamline maintenance. Our predictive analytics and conditional data monitoring help anticipate failures, reducing unplanned maintenance and unscheduled downtime.",
    image: "oil.png",
  },
  chemical: {
    label: "No more Downtime in Chemical Plants",
    detail:
      "Our AI driven analytics can propel your chemical business to new heights of reliability by optimizing asset longevity and impacting top-line growth through proactive identification of upcoming machine failures. IoT driven asset maintenance solutions can provide immense flexibility and agility to production.",
    image: "chemical.png",
  },
}

export const footerLinks = [
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    link: "https://www.linkedin.com/company/coeamt/",
  },
  {
    Icon: FaFacebook,
    label: "Facebook",
    link: "https://www.facebook.com/coeiitkgp",
  },
  {
    Icon: HiMail,
    label: "Mail",
    link: `mailto:${"coeamt@iitkgp.ac.in"}`,
  },
]

export const drawerLinks = [
  { label: "Home", link: "/", Icon: AiFillHome, type: "route" },
  {
    label: "About",
    link: "",
    Icon: MdOutlineSocialDistance,
    type: "link",
  },
  {
    label: "Team",
    link: "",
    Icon: BsFileCodeFill,
    type: "link",
  },
  {
    label: "Twitter",
    link: "",
    Icon: BsTwitter,
    type: "link",
  },
  {
    label: "Discord",
    link: "",
    Icon: FaDiscord,
    type: "link",
  },
]

export const menuItems = [
  {
    id: 1,
    label: "Monitoring",
    icon: SiGoogleanalytics,
    link: "/monitoring",
    active: true,
  },
  {
    id: 2,
    label: "Configuration",
    icon: GoSettings,
    link: "/configuration",
    active: false,
  },
  {
    id: 3,
    label: "Administration",
    icon: MdAdminPanelSettings,
    link: "/administration",
    active: true,
  },
  // {
  //   id: 4,
  //   label: "Summary",
  //   icon: BsJournalText,
  //   link: "/summary",
  //   active: true,
  // },
  {
    id: 4,
    label: "Metrics",
    icon: BsGraphUp,
    link: "/metrics",
    active: true,
  },
]

module.exports = {
  headerLinks,
  slideItems,
  slidelinks,
  footerLinks,
  drawerLinks,
  menuItems,
}
