import { Link } from "react-router-dom";
import {
  MenubarMenu,
  MenubarContent,
  MenubarItem,
  MenubarTrigger,
  Menubar,
  MenubarShortcut,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from "@/components/ui/menubar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BsPersonCircle,
  BsGear,
  BsMoonStars,
  BsSun,
  BsSearch,
  BsCart,
  BsChatDots,
  BsList,
} from "react-icons/bs";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center fixed left-0 w-full">
      <div className="flex justify-between items-center w-full max-w-[1440px] py-4 px-2 md:px-4">
        <Link
          to="/"
          className="flex justify-center items-center gap-2 text-lg md:text-xl font-bold"
        >
          <img
            src="/icons/Bakir_Guitar_Icon.png"
            alt="logo"
            className="w-7 h-7 md:w-10 md:h-10"
          />
          BakirGuitar
        </Link>

        <div className="hidden md:flex md:justify-center md:items-center md:gap-8">
          <Link to="/" className="font-medium">
            Home
          </Link>
          <Link to="#about" className="font-medium">
            About
          </Link>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="border-none shadow-none cursor-pointer focus:ring-0 focus:outline-none">
                Products
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="font-medium text-md">
                  Acoustic
                </MenubarItem>
                <MenubarItem className="font-medium text-md">
                  Electric
                </MenubarItem>
                <MenubarItem className="font-medium text-md">
                  Classic
                </MenubarItem>
                <MenubarItem className="font-medium text-md">
                  Acoustic Classic
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="border-none shadow-none cursor-pointer focus:ring-0 focus:outline-none">
                Others
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="font-medium text-md">
                  Profile{" "}
                  <MenubarShortcut>
                    <BsPersonCircle />
                  </MenubarShortcut>
                </MenubarItem>
                <MenubarSub>
                  <MenubarSubTrigger className="font-medium text-base">
                    Theme
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem className="font-medium">
                      Light
                      <MenubarShortcut>
                        <BsSun />
                      </MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem className="font-medium">
                      Dark
                      <MenubarShortcut>
                        <BsMoonStars />
                      </MenubarShortcut>
                    </MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarItem className="font-medium text-md">
                  Settings
                  <MenubarShortcut>
                    <BsGear />
                  </MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        <div className="flex justify-center items-center gap-4 md:gap-6">
          <Button asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Link to="" className="text-lg md:text-xl">
            <BsSearch />
          </Link>
          <Link to="/cart" className="relative text-lg md:text-xl">
            <BsCart />
            <span className="absolute top-[-5px] right-[-6px] h-4 w-4 bg-primary text-white text-xs text-center rounded-full">
              0
            </span>
          </Link>
          <Link to="/chat" className="text-lg md:text-xl">
            <BsChatDots />
          </Link>
          <Sheet>
            <SheetTrigger className="block text-lg cursor-pointer md:hidden">
              <BsList />
            </SheetTrigger>
            <SheetContent side="bottom">
              <ul className="w-full flex flex-col justify-center items-center gap-4 py-3 ">
                <li className="">
                  <Link to="" className="font-medium">
                    Home
                  </Link>
                </li>
                <li className="">
                  <Link to="" className="font-medium">
                    About
                  </Link>
                </li>
                <li className="">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Link to="" className="font-medium">
                        Products
                      </Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link to="font-medium">Acoustic</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to="font-medium">Electric</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to="font-medium">Classic</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to="font-medium">Acoustic Classic</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li className="">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Link to="" className="font-medium">
                        Others
                      </Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link to="">Profile</Link>
                        <DropdownMenuShortcut>
                          <BsPersonCircle />
                        </DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem>
                              Light
                              <DropdownMenuShortcut>
                                <BsSun />
                              </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              Dark
                              <DropdownMenuShortcut>
                                <BsMoonStars />
                              </DropdownMenuShortcut>
                            </DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                      <DropdownMenuItem>
                        <Link to="">Settings</Link>
                        <DropdownMenuShortcut>
                          <BsGear />
                        </DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
