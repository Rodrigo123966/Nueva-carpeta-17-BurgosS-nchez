
export default function CardProducto({
    id,
    title,
    category,
    stock,
    imageUrl,
    reviews
}) {
    return (
        <article className="product-card">

            <div className="product-image">
                <img src={imageUrl} alt={title} />
            </div>

            <div className="product-info">

                <span className="product-category">
                    {category}
                </span>

                <h3>{title}</h3>

                <p className="product-stock">
                    Stock disponible: {stock}
                </p>

                <p className="product-reviews">
                    {reviews?.length || 0} reseñas
                </p>

                <button className="product-button">
                    Ver producto
                </button>

            </div>
        </article>
    );
}
