import { AtSign, Pencil, User } from "lucide-react";
import ContainerRoot from "../../layout/containerRoot/content";

export default function AccountPage() {
  return (
    <ContainerRoot>
      <div className="w-3/4 mx-auto">
        <div className="w-72 mx-auto">
          <div className="relative flex justify-center items-center">
            <img
              src="/images/globalImg/Profile Photo.png"
              alt="Profile"
              className="size-32"
            />
            <div className="absolute border-2 border-[#e8e8e8] bg-white p-1.5 rounded-full right-16 bottom-0">
              <Pencil className="size-5" />
            </div>
          </div>
          <h1 className="mt-5 font-bold text-3xl text-center">
            Kristanto Wibowo
          </h1>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-y-5">
          <>
            <div>
              <h3 className="font-semibold tracking-wide text-lg">Email</h3>
              <div className="h-12 border border-[#e8e8e8] w-full relative mt-3 flex items-center">
                <AtSign className="size-4.5 absolute left-3.5" />
                <span className="ml-12">testing@gmail.com</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold tracking-wide text-lg">
                Nama Depan
              </h3>
              <div className="h-12 border border-[#e8e8e8] w-full relative mt-3 flex items-center">
                <User className="size-4.5 absolute left-3.5" />
                <span className="ml-12">Kristanto</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold tracking-wide text-lg">
                Nama Belakang
              </h3>
              <div className="h-12 border border-[#e8e8e8] w-full relative mt-3 flex items-center">
                <User className="size-4.5 absolute left-3.5" />
                <span className="ml-12">Wibowo</span>
              </div>
            </div>
            <button className="border-2 border-[#f5261b] text-[#f5261b] rounded-lg py-3 font-semibold tracking-wide text-lg">
              Edit Profile
            </button>
            <button className="bg-[#f5261b] text-[#e8e8e8] rounded-lg py-3 font-semibold tracking-wide text-lg">
              Logout
            </button>
          </>
          {/* <>
            <div>
              <label
                htmlFor="email"
                className="font-semibold tracking-wide text-lg"
              >
                Email
              </label>
              <div className="relative flex items-center mt-3">
                <input
                  id="email"
                  type="email"
                  className="pl-12 py-2.5 pr-4 border border-[#e8e8e8] placeholder:text-[#e8e8e8] w-full"
                  defaultValue=""
                />
                <AtSign className="size-4.5 absolute left-3.5" />
              </div>
            </div>
            <div>
              <label
                htmlFor="firstName"
                className="font-semibold tracking-wide text-lg"
              >
                Nama Depan
              </label>
              <div className="relative flex items-center mt-3">
                <input
                  id="firstName"
                  type="email"
                  className="pl-12 py-2.5 pr-4 border border-[#e8e8e8] placeholder:text-[#e8e8e8] w-full"
                  defaultValue=""
                />
                <User className="size-4.5 absolute left-3.5" />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="font-semibold tracking-wide text-lg"
              >
                Nama Belakang
              </label>
              <div className="relative flex items-center mt-3">
                <input
                  id="lastName"
                  type="email"
                  className="pl-12 py-2.5 pr-4 border border-[#e8e8e8] placeholder:text-[#e8e8e8] w-full"
                  defaultValue=""
                />
                <User className="size-4.5 absolute left-3.5" />
              </div>
            </div>
            <button className="bg-[#f5261b] text-[#e8e8e8] rounded-lg py-3 font-semibold tracking-wide text-lg">
              Simpan
            </button>
          </> */}
        </div>
      </div>
    </ContainerRoot>
  );
}
