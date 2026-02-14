export const ActiveItems = ({ label, value, showSideItem, setShowSideItem }) => (
  <div
    onClick={() => setShowSideItem(value)}
    className={`text-md fontfamily p-1 rounded-md cursor-pointer transition duration-200
      ${showSideItem === value
        ? "bg-black/10 text-blue-500"
        : "text-gray-700 hover:scale-105 hover:text-blue-500"
      }`}>
    {label}
  </div>
);