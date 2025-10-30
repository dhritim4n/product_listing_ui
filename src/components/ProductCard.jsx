export default function ProductCard({
  image,
  title,
  tags = [],
  description,
  price,
  onAddToCart,
}) {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-md overflow-hidden w-[180px] hover:shadow-lg transition-all">
      {/* Image Section */}
      <div className="relative flex items-center justify-center h-48">
        <img
          src={image}
          alt={title}
          className="max-h-36 object-contain drop-shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 bg-white/70 hover:bg-white p-2 rounded-full shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-purple-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.239-4.5-5-4.5s-5 2.015-5 4.5c0 2.485 2.239 4.5 5 4.5s5-2.015 5-4.5zM12 21v-6M12 15H9m3 0h3"
            />
          </svg>
        </button>
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
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-gray-500 font-semibold">PRICE</p>
            <p className="text-gray-900 font-bold text-base">${price}</p>
          </div>
          <button
            onClick={onAddToCart}
            className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium px-4 py-2 rounded-lg transition"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
