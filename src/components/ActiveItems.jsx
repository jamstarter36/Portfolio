export const ActiveItems = ({ label, value, showSideItem, setShowSideItem }) => (
  <div
    onClick={() => setShowSideItem(value)}
    className={`text-[15px] font-bold p-2 rounded-md cursor-pointer transition duration-200
      ${showSideItem === value
        ? "bg-black/10 text-blue-500"
        : "text-gray-500 hover:scale-105 hover:text-blue-500"
      }`}>
    {label}
  </div>
);