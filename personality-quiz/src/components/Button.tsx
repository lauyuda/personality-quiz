export const Button = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="px-5 py-3 bg-[#3B8BBD] text-white rounded-lg shadow-md"
    >
      {label}
    </button>
  );
};
