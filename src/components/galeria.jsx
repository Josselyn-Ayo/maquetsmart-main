// src/components/ProductCard.jsx
const MaquetCard = ({ title, imageName, priceCurrent, priceOriginal, rating }) => {
  const imageSrc = `/images/maqueta_${imageName}.jpg`;

  return (
    
    <div className="products-display-grid" >
      <div className="product-display-card_1 product-display-1">
        <div className="product-display-title">{title}</div>

        <div className="product-display-rating">
          <div className="rating-stars">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={`rating-star ${index < rating ? '' : 'star-empty'}`}>★</span>
            ))}
          </div>
          <span className="rating-number">(2)</span>
        </div>

        <div className="product-display-image">
          <img src={imageSrc} alt={title} />
        </div>

        <div className="product-display-price">
          <span className="price-current">${priceCurrent.toFixed(2)}</span>
          {priceOriginal && (
            <>
              <span className="price-original">${priceOriginal.toFixed(2)}</span>
              <span className="price-discount-badge">
                {Math.round(((priceOriginal - priceCurrent) / priceOriginal) * 100)}% OFF
              </span>
            </>
          )}
        </div>

        <div className="product-purchase-info">
          <span className="product-purchase-count">1.286 compras</span>
          <button className="product-favorite-btn">♡</button>
        </div>
      </div>
    </div>
  );
};

export default MaquetCard;
