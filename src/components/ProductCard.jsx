import { IoLocationSharp } from 'react-icons/io5';

function ProductCard(props) {
  const { name, img, price, location, description } = props.productData;

  return (
    <div className="card card-compact bg-base-100 w-full shadow-md border-[3px] border-gray-200">
      <figure>
        <img src={img} alt={name} className="w-full h-60 object-contain" />
      </figure>
      <div className="card-body">
        <p className="text-lg font-semibold">৳ {price}</p>
        <h2 className="card-title">{name}</h2>
        <p className="text-sm flex items-center text-gray-700">
          <IoLocationSharp />
          {'  ' + location}
        </p>
        <p className="text-gray-600">{description.length > 90 ? description.slice(0, 95) + '...' : description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-success">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
