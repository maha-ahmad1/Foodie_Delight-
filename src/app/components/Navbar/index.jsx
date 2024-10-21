import DarkMode from "../DarkMode";
import Image from "next/image";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex ">
                <Image width={100} height={100} src="/assets/images/food-logo.png" alt="Logo" className="w-10" />
                Foodie
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <DarkMode />
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-yellow-500"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
                Order
                <div className="text-xl text-white drop-shadow-sm cursor-pointer">
                  X
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
