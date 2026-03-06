export const ActiveItems = ({ label, value, showSideItem, setShowSideItem }) => {
  const isActive = showSideItem === value;

  return (
    <div
      onClick={() => setShowSideItem(value)}
      className={`relative flex items-center gap-2.5 px-3 py-2 rounded-xl cursor-pointer transition-all duration-200
        ${isActive
          ? "bg-[#1877F2] text-white"
          : "text-gray-500 hover:bg-[#E7F3FF] hover:text-[#050505]"
        }`}
    >
      {/* Left accent bar */}
      <span className={`w-0.5 h-4 rounded-full flex-shrink-0 transition-all duration-200 ${isActive ? "bg-white" : "bg-transparent"}`} />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};