interface CardProps {
  name: string;
  price: string;
}

export default function Card({ name, price }: CardProps) {
  return (
    <div className="border border-black rounded-lg p-4">
      <h2>name:{name}</h2>
      <p>Prezzo: {price} €</p>
    </div>
  );
}
