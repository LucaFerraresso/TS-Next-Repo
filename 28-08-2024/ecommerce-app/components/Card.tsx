interface CardProps {
  item: {
    _id: string;
    name: string;
    price: string;
    description: string;
  };
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function Card({ item, onEdit, onDelete }: CardProps) {
  return (
    <div className="w-[300px] border border-gray-300 rounded-lg shadow-md p-6 flex flex-col items-center bg-white hover:bg-gray-50 hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <h2 className="text-xl font-bold text-blue-600 mb-2">
        name: {item.name}
      </h2>
      <p className="text-lg text-gray-700 mb-4">Prezzo: {item.price} €</p>
      <p className="text-gray-600 mb-6">{item.description}</p>
      <p className="text-sm text-gray-500 mb-4">ID: {item._id}</p>
      <div className="flex gap-4 flex-row">
        {onEdit && (
          <button
            onClick={onEdit}
            className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition-colors duration-300"
          >
            Edit
          </button>
        )}
        {onDelete && (
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
