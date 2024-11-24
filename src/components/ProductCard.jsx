import { IoLocationSharp } from 'react-icons/io5';

function ProductCard(props) {
  const { name, img, price, location, description } = props.productData;

  return (
    <div className="card card-compact w-full p-3 shadow-md text-white border-2 border-[#a0e23544] cursor-pointer">
      <figure className="">
        <img src={img} alt={name} className="w-full h-60 object-contain !rounded-md overflow-hidden" />
      </figure>
      <div className="card-body">
        <p className="text-lg font-semibold">৳ {price}</p>
        <h2 className="card-title">{name}</h2>
        <p className="text-sm flex items-center text-gray-300">
          <IoLocationSharp />
          {'  ' + location}
        </p>
        <p className="text-gray-400">{description.length > 90 ? description.slice(0, 95) + '...' : description}</p>

        <div className="card-actions justify-end my-2">
          <button className="px-3 py-2 bg-[#a0e235b3] text-white rounded-md hover:bg-[#a0e2357d]">আরো দেখুন</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
