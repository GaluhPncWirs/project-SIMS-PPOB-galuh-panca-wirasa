import { AtSign, Check, Pencil, User } from "lucide-react";
import ContainerRoot from "../../layout/containerRoot/content";
import { useGetDataUser } from "../../hooks/useGetUserData/getUserData";
import React, { useState } from "react";
import { useGetToken } from "../../hooks/useGetToken/getToken";
import { fetchApi } from "../../services/api";
import Loading from "../../components/loading/content";
import ModalBox from "../../layout/modalBox/content";
import { useNavigate } from "react-router-dom";

export default function AccountPage() {
  const token = useGetToken();
  const dataUser = useGetDataUser();
  const [editProfile, setEditProfile] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleEditAccount(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const valueInput = event.target as HTMLFormElement;

    try {
      setIsLoading(true);
      const req = await fetchApi("/profile/update", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: valueInput.email.value,
          first_name: valueInput.firstName.value,
          last_name: valueInput.lastName.value,
        }),
      });

      const res = await req.json();
      if (res) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("gagal fetch api", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleEditImage(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.[0]) return;

    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    try {
      setIsLoading(true);
      const req = await fetchApi("/profile/image", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const res = await req.json();
      if (res) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("gagal fetch api", error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem("loginToken");
    navigate("/");
  }

  // amboi123@gmail.com
  // asdfghjkl

  return (
    <ContainerRoot>
      <div className="w-3/4 mx-auto">
        <div className="w-72 mx-auto">
          <div className="relative flex justify-center items-center">
            <img
              src={dataUser?.profile_image}
              alt="Profile"
              className="size-32 rounded-full"
            />
            <div className="absolute border-2 border-[#e8e8e8] bg-white p-1.5 rounded-full right-16 bottom-0">
              <label htmlFor="edit-image" className="cursor-pointer">
                <Pencil className="size-5" />
              </label>
              <input
                id="edit-image"
                type="file"
                accept=".jpg,.jpeg"
                onChange={handleEditImage}
                className="hidden"
              />
            </div>
          </div>
          <h1 className="mt-5 font-bold text-3xl text-center">
            {dataUser?.first_name} {dataUser?.last_name}
          </h1>
        </div>
        {editProfile ? (
          <form
            className="mt-10 grid grid-cols-1 gap-y-5"
            onSubmit={(e) => handleEditAccount(e)}
          >
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
                  defaultValue={dataUser?.email}
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
                  type="text"
                  className="pl-12 py-2.5 pr-4 border border-[#e8e8e8] placeholder:text-[#e8e8e8] w-full"
                  defaultValue={dataUser?.first_name}
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
                  type="text"
                  className="pl-12 py-2.5 pr-4 border border-[#e8e8e8] placeholder:text-[#e8e8e8] w-full"
                  defaultValue={dataUser?.last_name}
                />
                <User className="size-4.5 absolute left-3.5" />
              </div>
            </div>
            <button
              className="border-2 border-[#f5261b] text-[#f5261b] rounded-lg py-3 font-semibold tracking-wide text-lg"
              type="submit"
            >
              Simpan
            </button>
            <button
              className="bg-[#f5261b] text-[#e8e8e8] rounded-lg py-3 font-semibold tracking-wide text-lg"
              type="button"
              onClick={() => setEditProfile(false)}
            >
              Batalkan
            </button>
          </form>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-y-5">
            <div>
              <h3 className="font-semibold tracking-wide text-lg">Email</h3>
              <div className="h-12 border border-[#e8e8e8] w-full relative mt-3 flex items-center">
                <AtSign className="size-4.5 absolute left-3.5" />
                <span className="ml-12">{dataUser?.email}</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold tracking-wide text-lg">
                Nama Depan
              </h3>
              <div className="h-12 border border-[#e8e8e8] w-full relative mt-3 flex items-center">
                <User className="size-4.5 absolute left-3.5" />
                <span className="ml-12">{dataUser?.first_name}</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold tracking-wide text-lg">
                Nama Belakang
              </h3>
              <div className="h-12 border border-[#e8e8e8] w-full relative mt-3 flex items-center">
                <User className="size-4.5 absolute left-3.5" />
                <span className="ml-12">{dataUser?.last_name}</span>
              </div>
            </div>
            <button
              className="border-2 border-[#f5261b] text-[#f5261b] rounded-lg py-3 font-semibold tracking-wide text-lg"
              onClick={() => setEditProfile(true)}
              type="button"
            >
              Edit Profile
            </button>
            <button
              className="bg-[#f5261b] text-[#e8e8e8] rounded-lg py-3 font-semibold tracking-wide text-lg"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}

        <ModalBox isOpen={isSuccess}>
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500">
            <Check className="text-white size-7" strokeWidth={3} />
          </div>
          <p className="text-xl text-gray-600 font-semibold">
            Berhasil edit profile
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="mt-5 text-lg font-semibold text-[#f5261b]"
          >
            Oke
          </button>
        </ModalBox>
      </div>
      {isLoading && <Loading />}
    </ContainerRoot>
  );
}
