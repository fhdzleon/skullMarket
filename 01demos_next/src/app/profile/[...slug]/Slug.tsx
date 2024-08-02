import { SlugProps } from "@/interfaces/interfaces";

const Slug: React.FC<SlugProps> = ({ params }) => {
  return (
    <div>
      <h1>Estamos en el path: {params.slug}</h1>
    </div>
  );
};

export default Slug;
