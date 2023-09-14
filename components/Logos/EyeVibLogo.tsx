const EyeVibLogo = ({ mode }: { mode: string }) => (
  <div className="flex items-center cursor-pointer">
    <img
      src="images/eyevib.png"
      alt="iit logo"
      className="landing-bg w-12 h-12 p-2.5 rounded-full shadow-logCard blue-image"
    />
    <p
      className={`font-semibold ml-2 text-2xl ${
        mode === "light" ? "text-black" : "text-gray-400"
      }`}
    >
      Eye<span className="text-lightBlue2">Vib</span>
    </p>
    <img
      src="images/logo-wave.png"
      alt="iit logo"
      className="p-2.5 w-24 relative bottom-4 right-10"
    />
  </div>
)

export default EyeVibLogo
