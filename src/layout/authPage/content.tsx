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
    <div className="flex items-center">
      <div className="w-1/2 flex flex-col items-center gap-y-5">
        <NameProject />
        <h1 className="text-2xl font-semibold text-center max-w-xs leading-tight">
          {authTitle}
        </h1>
        {children}
        <h3>
          {callAction}{" "}
          <Link
            to={href}
            className="text-[#f5261b] font-bold hover:underline cursor-pointer"
          >
            di sini
          </Link>
        </h3>
      </div>
      <img src="/images/loginPage/Illustrasi Login.png" className="w-1/2" />
    </div>
  );
}
