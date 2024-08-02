import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1 className="p-5 bg-black text-white mb-6 ">Soy la clase 3</h1>
      <Link href="/clase3/leaf">
        <p>Leaf segment here</p>
      </Link>
    </div>
  );
};

export default Page;
