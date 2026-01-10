type modalBox = {
  isOpen: boolean;
  children: React.ReactNode;
};

export default function ModalBox({ isOpen, children }: modalBox) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative bg-white w-90 rounded-xl shadow-lg px-6 py-8 text-center">
        {children}
      </div>
    </div>
  );
}
