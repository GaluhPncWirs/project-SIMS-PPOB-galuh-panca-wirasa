import type React from "react";
import { Link } from "react-router-dom";
import NameProject from "../../components/nameProject/content";

type authPageLayoutProps = {
  authTitle: string;
  children: React.ReactNode;
  callAction: string;
  href: string;
};

export default function AuthPageLayout(props: authPageLayoutProps) {
  const { authTitle, children, callAction, href } = props;

  return (
    <div className="flex flex-col lg:flex-row items-center min-h-screen px-4 py-8 lg:py-0">
      <div className="w-full lg:w-1/2 flex flex-col items-center gap-y-4 md:gap-y-5 max-w-md lg:max-w-none">
        <NameProject />
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center max-w-xs lg:max-w-sm leading-tight px-4">
          {authTitle}
        </h1>
        {children}
        <h3 className="text-sm sm:text-base text-center px-4">
          {callAction}{" "}
          <Link
            to={href}
            className="text-[#f5261b] font-bold hover:underline cursor-pointer"
          >
            di sini
          </Link>
        </h3>
      </div>
      <img
        src="/images/loginPage/Illustrasi Login.png"
        className="w-full lg:w-1/2 max-w-sm lg:max-w-none mt-8 lg:mt-0 object-contain"
        alt="Login Ilustrasi"
      />
    </div>
  );
}
