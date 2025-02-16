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
  BsList,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function ResponsiveNavbar() {
  return (
    <Sheet>
      <SheetTrigger className="block text-lg cursor-pointer md:hidden">
        <BsList />
      </SheetTrigger>
      <SheetContent side="bottom">
        <ul className="w-full flex flex-col gap-4 py-3 px-4">
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
          <li>
            <Button asChild className="block text-center">
              <Link to="/login">Login</Link>
            </Button>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
