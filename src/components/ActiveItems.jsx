export const ActiveItems = ({ label, value, showSideItem, setShowSideItem }) => (
  <div
    onClick={() => setShowSideItem(value)}
    className={`relative text-md fontfamily p-1 text-center rounded-full cursor-pointer transition duration-200
      ${showSideItem === value
        ? "bg-blue-500 text-white font-bold animate-ping z-0"
        : "text-gray-700 hover:scale-110 hover:text-blue-500 hover:bg-gray-100 z-2"
      }`}>
    {label}
  </div>
);