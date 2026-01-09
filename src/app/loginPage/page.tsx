import { AtSign, Lock, X } from "lucide-react";
import Input from "../../components/input/content";
import AuthPageLayout from "../../layout/authPage/content";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isWrongPassword, setIsWrongPassword] = useState({
    status: false,
    message: "",
  });
  const [isEmailWrong, setIsEmailWrong] = useState({
    status: false,
    message: "",
  });
  const navigate = useNavigate();

  async function handleLoginAccount(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const valueInput = event.target as HTMLFormElement;

    try {
      const req = await fetch(
        "https://take-home-test-api.nutech-integrasi.com/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: valueInput.email.value,
            password: valueInput.password.value,
          }),
        }
      );

      const res = await req.json();
      if (res.status === 102) {
        setIsEmailWrong({
          status: true,
          message: res.message,
        });
      } else if (res.status === 103) {
        setIsWrongPassword({
          status: true,
          message: res.message,
        });
      } else {
        setIsSuccess(true);
        navigate("/Homepage");
        localStorage.setItem("tokenJWT", res.data.token);
      }
    } catch (error) {
      console.error("gagal fetch api", error);
    }
  }

  return (
    <div>
      <AuthPageLayout
        authTitle="Masuk atau buat akun untuk memulai"
        callAction="belum punya akun? registrasi"
        href="/Registrasi"
      >
        <form
          onSubmit={(e) => handleLoginAccount(e)}
          className="grid grid-cols-1 gap-y-6 w-2/3"
        >
          <Input
            typeInput="email"
            placeholder="masukkan email anda"
            inputId="email"
            isError={false}
          >
            <AtSign />
          </Input>
          <Input
            typeInput="password"
            placeholder="masukkan password anda"
            inputId="password"
            isError={false}
          >
            <Lock />
          </Input>
          <button className="bg-[#f5261b] text-[#e8e8e8] tracking-wider font-semibold text-xl py-2.5 rounded-md cursor-pointer hover:bg-red-500">
            Login
          </button>
        </form>
        {isEmailWrong.status ? (
          <div className="bg-red-50 mt-5 px-5 py-3 w-10/12 font-semibold flex items-center text-sm justify-between">
            <h2>{isEmailWrong.message}</h2>
            <X
              className="cursor-pointer"
              // onClick={() => setIsSuccess(false)}
            />
          </div>
        ) : isWrongPassword.status ? (
          <div className="bg-red-50 mt-5 px-5 py-3 w-10/12 font-semibold flex items-center text-sm justify-between">
            <h2>{isWrongPassword.message}</h2>
            <X
              className="cursor-pointer"
              // onClick={() => setIsSuccess(false)}
            />
          </div>
        ) : (
          isSuccess && (
            <div className="bg-red-50 mt-5 px-5 py-3 w-10/12 font-semibold flex items-center text-sm justify-between">
              <h2>Login Berhasil</h2>
              <X
                className="cursor-pointer"
                onClick={() => setIsSuccess(false)}
              />
            </div>
          )
        )}
      </AuthPageLayout>
    </div>
  );
}

// pecahseribu123@gmail.com
// qwertyuiop
