export default function ProductCard({
  image,
  title,
  tags = [],
  description,
  price,
  onAddToCart,
}) {
  return (
    <div className="bg-gradient-to-br from-purple-100 p-2 to-purple-200 rounded-2xl shadow-md overflow-hidden  w-[150px] hover:shadow-lg transition-all lg:w-[230px]">
      {/* Image Section */}
      <div className="relative flex items-center justify-center h-48">
        <img
          src={image}
          alt={title}
          className="max-h-36 object-contain drop-shadow-lg transform hover:scale-105 transition-transform duration-300"
        />

      </div>

      {/* Info Section */}
      <div className="bg-white p-4 rounded-t-2xl">
        <h3 className="text-gray-900 font-semibold text-sm mb-2">{title}</h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-500 text-xs leading-snug mb-3 line-clamp-3">
          {description}
        </p>

        {/* Price + Button */}
        <div className="flex flex-col items-center justify-between lg:flex-row gap-2">
          <div>
            <p className="text-[10px] text-gray-500 font-semibold">PRICE</p>
            <p className="text-gray-900 font-bold text-base">${price}</p>
          </div>
          <button
            onClick={onAddToCart}
            className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium px-4 py-2 rounded-lg transition "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
