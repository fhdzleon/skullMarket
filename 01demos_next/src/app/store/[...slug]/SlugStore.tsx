import { ProductParams } from "@/interfaces/interfaces";

const SlugStore: React.FC<ProductParams> = ({ params }) => {
  return (
    <div>
      <h1>Ejemplo</h1>
      <p>{params.name}</p>
      <p>{params.price}</p>
    </div>
  );
};

export default SlugStore;
