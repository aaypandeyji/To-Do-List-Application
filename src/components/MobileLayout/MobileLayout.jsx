export default function MobileLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-2">
      <div className="relative w-full max-w-[390px] h-[97vh] bg-white overflow-hidden shadow-xl">
        {children}
      </div>
    </div>
  );
}
