import { Eye } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center gap-x-3 h-40">
      <div className="basis-1/2 h-full px-7 flex flex-col gap-y-4">
        <img
          src="/images/globalImg/Profile Photo.png"
          alt="Profile"
          className="size-14"
        />
        <div>
          <h4 className="text-lg tracking-wide">Selamat datang,</h4>
          <h1 className="text-3xl tracking-wide font-semibold">
            Kristanto Wibowo
          </h1>
        </div>
      </div>
      <div className="bgSaldo basis-2/3 h-full px-7 py-5 text-[#e8e8e8] flex flex-col gap-y-2">
        <h3 className="font-semibold text-xl">Saldo anda</h3>
        <h1 className="font-bold flex gap-x-2">
          <span className="text-3xl">Rp</span>
          <span className="text-6xl leading-0">.......</span>
        </h1>
        <h4 className="font-medium flex gap-x-2 items-center">
          <span>Lihat Saldo</span>
          <button className="cursor-pointer">
            <Eye className="size-5" />
          </button>
        </h4>
      </div>
    </div>
  );
}
