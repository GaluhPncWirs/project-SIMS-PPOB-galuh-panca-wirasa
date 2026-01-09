import Header from "../../components/header/content";
import Input from "../../components/input/content";
import TopUpSaldo from "../../components/topUpSaldo/content";
import ContainerRoot from "../../layout/containerRoot/content";

export default function TopUpPage() {
  return (
    <ContainerRoot>
      <Header />
      <div className="mt-7">
        <h2>Silahkan Masukkan</h2>
        <h1 className="text-2xl font-semibold tracking-wide">Nominal Top Up</h1>
        <div className="flex gap-x-5 items-center mt-7">
          <div className="basis-3/5">
            <Input placeholder="masukkan nominal Top Up" typeInput="number">
              <img src="/images/topUpPage/nominal.png" alt="nominal" />
            </Input>
            <button className="bg-[#D6D4D5] text-white mt-7 w-full py-3 font-semibold tracking-wide text-lg">
              Top Up
            </button>
          </div>
          <div className="basis-2/5 grid grid-cols-3 gap-y-6 gap-x-3">
            <TopUpSaldo saldo="Rp.10.000" />
            <TopUpSaldo saldo="Rp.20.000" />
            <TopUpSaldo saldo="Rp.50.000" />
            <TopUpSaldo saldo="Rp.100.000" />
            <TopUpSaldo saldo="Rp.250.000" />
            <TopUpSaldo saldo="Rp.500.000" />
          </div>
        </div>
      </div>
    </ContainerRoot>
  );
}
