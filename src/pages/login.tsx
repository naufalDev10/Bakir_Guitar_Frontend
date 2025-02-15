import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { BsGoogle, BsFacebook } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="w-full px-3 md:py-5 md:px-5 md:border md:border-muted-foreground md:max-w-sm md:rounded-md">
        <h1 className="text-2xl font-bold text-primary">Login</h1>
        <p className="text-muted-foreground">
          Welcome back, please enter your details to login
        </p>
        <form className="mt-5">
          <div className="">
            <Label htmlFor="email" className="text-md">
              Email
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              autoComplete="off"
              className="block mt-2"
            />
          </div>
          <div className="mt-4 mb-5">
            <Label
              htmlFor="password"
              className="flex justify-between items-center text-md"
            >
              Password
              <Link
                to="/"
                className="text-sm font-normal text-md hover:font-semibold duration-300"
              >
                Forgot your password?
              </Link>
            </Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="block mt-2"
            />
          </div>
          <Button type="button" className="cursor-pointer w-full">
            Login
          </Button>
        </form>
        <div className="flex items-center gap-1 my-4 px-1">
          <div className="flex-grow border-t border-muted-foreground"></div>
          <span className="text-muted-foreground text-sm font-md">
            Or continue with
          </span>
          <div className="flex-grow border-t border-muted-foreground"></div>
        </div>
        <Button
          type="button"
          variant="outline"
          className="flex justify-center items-center gap-2 cursor-pointer w-full"
        >
          <BsGoogle />
          Login with Google
        </Button>
        <Button
          type="button"
          variant="outline"
          className="flex justify-center items-center gap-2 cursor-pointer w-full mt-3"
        >
          <BsFacebook />
          Login with Facebook
        </Button>
        <div className="flex justify-center items-center mt-4">
          <span className="">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold border-b border-primary"
            >
              Register
            </Link>
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <span className="flex justify-center items-center gap-2 text-sm font-medium text-muted-foreground">
          <FaRegCopyright /> 2025 Bakir Guitar Official,
        </span>
        <span className="text-sm font-medium text-muted-foreground">
          All Rights Reserve.
        </span>
      </div>
    </div>
  );
}
