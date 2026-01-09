export default function TopUpSaldo({ saldo }: { saldo: string }) {
  return (
    <button className="border-2 border-[#e8e8e8] px-5 py-3">{saldo}</button>
  );
}
