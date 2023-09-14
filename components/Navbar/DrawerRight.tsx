import { Drawer, useMantineTheme } from "@mantine/core";
import { useAppStateContext } from "../../context/contextProvider";
import { drawerLinks } from "../../assets/links";
import Link from "next/link";

const DrawerRight = () => {
  const theme = useMantineTheme();
  //@ts-ignore
  const { drawerActive, setDrawerActive } =
    useAppStateContext();

  const handleLinkClick = () => {
    setDrawerActive(false);
  };

  return (
    <Drawer
      overlayColor={
        theme.colorScheme === "light"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0}
      overlayBlur={3}
      opened={drawerActive}
      onClose={() => setDrawerActive(false)}
      position="right"
      title={
        <>
          EYE <span className="text-lightBlue">VIB</span>
        </>
      }
      padding="md"
      size="lg"
      className="font-semibold px-5 overflow-y-scrol"
      classNames={{
        drawer: "bg-black pl-10 bg-opacity-60",
        title: "text-white font_sfpro text- xl tracking-wider ml-1",
      }}
      styles={{ drawer: { maxWidth: "87.5%" } }}
    >
      <div className="flex flex-col gap-5 relative">
        {drawerLinks.map((item) => {
          return item.type === "route" ? (
            <Link href={item.link} key={item.label}>
              <span
                className="text-white font_sfpro tracking-widest text-lg flex items-center gap-4"
                onClick={handleLinkClick}
              >
                <item.Icon color="white" size={25} />
                {item.label}
              </span>
            </Link>
          ) : (
            <span
              className="text-white font_sfpro tracking-widest text-lg flex items-center gap-4"
              key={item.label}
              onClick={handleLinkClick}
              // href={item.link}
              // target="_blank"
              // rel="noreferrer"
            >
              <item.Icon color="white" size={25} />
              {item.label}
            </span>
          );
        })}
      </div>
    </Drawer>
  );
};

export default DrawerRight;
