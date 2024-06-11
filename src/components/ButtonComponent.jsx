// ButtonComponent.jsx
export default function ButtonPrimary({onClick,color,title}) {
  return (
    <div>
      <button onClick={onClick} className={`${color ? color : "bg-blue-500"} text-white px-3 py-2 rounded-md`}>
        {title}
      </button>
    </div>
  );
}

export function ButtonSecondary() {
  return (
    <div>
      <button className="bg-gray-500 text-white px-3 py-2 rounded-md">
        Secondary
      </button>
    </div>
  );
}
