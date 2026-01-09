import { Link, useLocation } from "react-router-dom";
import NameProject from "../nameProject/content";

export default function NavigationBar() {
  const { pathname } = useLocation();
  return (
    <nav className="border-b-2 border-[#e8e8e8] flex justify-between items-center px-16 h-20">
      <NameProject />
      <div className="flex gap-x-10 font-semibold text-xl">
        <Link to="/" className={`${pathname === "/" && `text-[#f5261b]`}`}>
          Home
        </Link>
        <Link
          to="/Topup"
          className={`${pathname === "/Topup" && `text-[#f5261b]`}`}
        >
          Top Up
        </Link>
        <Link
          to="/Transaction"
          className={`${pathname === "/Transaction" && `text-[#f5261b]`}`}
        >
          Transaction
        </Link>
        <Link to="">Akun</Link>
      </div>
    </nav>
  );
}
