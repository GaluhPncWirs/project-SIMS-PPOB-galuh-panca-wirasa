import { MinusIcon, PlusIcon } from "lucide-react";
import Header from "../../components/header/content";
import ContainerRoot from "../../layout/containerRoot/content";
import { useEffect, useMemo, useState } from "react";
import { fetchApi } from "../../services/api";
import { useGetToken } from "../../hooks/useGetToken/getToken";
import { formatRupiah } from "../../hooks/useFormatRupiah/formatRupiah";
import { formatDate } from "../../hooks/useformatDate/formatDate";
import Loading from "../../components/loading/content";

type transaksiType = {
  invoice_number: string;
  transaction_type: string;
  description: string;
  total_amount: number;
  created_on: string;
};

type HistoryResponse = {
  offset: number;
  limit: number;
  records: transaksiType[];
};

export default function TransactionPage() {
  const [allRecords, setAllRecords] = useState<transaksiType[]>([]);
  const [historyTransaksi, setHistoryTransaksi] =
    useState<HistoryResponse | null>(null);
  const token = useGetToken();
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const limit = 5;

  async function fetchTransaksi(offset: number) {
    setIsLoading(true);
    try {
      const response = await fetchApi(
        `/transaction/history?offset=${offset}&limit=${limit}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      setHistoryTransaksi(data.data);

      if (offset === 0) {
        setAllRecords(data.data.records);
      } else {
        setAllRecords((prev) => [...prev, ...data.data.records]);
      }

      setHasMore(data.data.records.length === limit);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchTransaksi(0);
  }, [token]);

  const sortedData = useMemo(() => {
    return [...allRecords].sort(
      (a, b) =>
        new Date(b.created_on).getTime() - new Date(a.created_on).getTime()
    );
  }, [allRecords]);

  const handleShowMore = () => {
    const newOffset = offset + limit;
    setOffset(newOffset);
    fetchTransaksi(newOffset);
  };

  return (
    <ContainerRoot>
      <Header />
      <div className="mt-7">
        <h1 className="tracking-wide font-semibold text-xl">Semua Transaksi</h1>

        <div className="mt-5 grid grid-cols-1 gap-y-7">
          {sortedData.map((trx) => (
            <div
              key={trx.invoice_number}
              className="border-2 border-[#e8e8e8] py-3 px-7"
            >
              <div className="flex justify-between items-center mb-2.5">
                <div
                  className={`flex gap-x-3 items-center ${
                    trx.transaction_type === "PAYMENT"
                      ? "text-[#f5261b]"
                      : "text-emerald-500"
                  }`}
                >
                  {trx.transaction_type === "PAYMENT" ? (
                    <MinusIcon className="size-6" />
                  ) : (
                    <PlusIcon className="size-6" />
                  )}

                  <h3 className="text-xl font-semibold tracking-wider">
                    {formatRupiah(trx.total_amount)}
                  </h3>
                </div>

                <h3 className="text-sm font-medium">{trx.description}</h3>
              </div>

              <h4 className="text-slate-400 tracking-wide text-sm">
                {formatDate(trx.created_on)}
              </h4>
            </div>
          ))}
        </div>

        {isLoading && <Loading />}

        {!isLoading && hasMore && (
          <button
            onClick={handleShowMore}
            className="text-[#f5261b] font-semibold tracking-wide mt-5 text-lg text-center w-full hover:underline"
          >
            Show more
          </button>
        )}

        {!isLoading && !hasMore && sortedData.length > 0 && (
          <p className="text-center mt-5 text-gray-500 text-sm">
            Tidak ada transaksi lainnya
          </p>
        )}

        {!isLoading && sortedData.length === 0 && (
          <p className="text-center mt-5 text-gray-500">Belum ada transaksi</p>
        )}
      </div>
    </ContainerRoot>
  );
}
