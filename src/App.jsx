/* eslint react/prop-types: 0 */

const categories = ["Reviews", "Report Guru", "BestTech"];

const reviewsData = [
  {
    image: "./images/image-colton.jpg",
    user: "Colton Smith",
    review: ` &quot;We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!&quot;`,
  },
  {
    image: "./images/image-irene.jpg",
    user: "Irene Roberts",
    review: `"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."`,
  },
  {
    image: "./images/image-anne.jpg",
    user: "Anne Wallace",
    review: `"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"`,
  },
];

function App() {
  return (
    <>
      <BackgroundTop />
      <BackgroundBottom />

      <div className="container">
        <section className="section-top">
          <div className="heading-box">
            <h1 className="heading">10,000+ of our users love our products.</h1>
            <p className="heading-text">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className="ratings-box">
            {categories.map((category, i) => (
              <Rating category={category} key={i} i={i} />
            ))}
          </div>
        </section>
        <section className="section-bottom">
          {reviewsData.map((review, i) => (
            <Review review={review} key={i} i={i} />
          ))}
        </section>
      </div>
    </>
  );
}

function BackgroundTop() {
  return (
    <picture className="background--top">
      <source
        srcSet="./images/bg-pattern-top-mobile.svg"
        media="(max-width: 375px)"
      />
      <img src="./images/bg-pattern-top-desktop.svg" alt="Pattern" />
    </picture>
  );
}

function BackgroundBottom() {
  return (
    <picture className="background--bottom">
      <source
        srcSet="./images/bg-pattern-bottom-mobile.svg"
        media="(max-width: 375px)"
      />
      <img src="./images/bg-pattern-bottom-desktop.svg" alt="Pattern" />
    </picture>
  );
}

function Rating({ category, i }) {
  return (
    <div className={`rating rating-${i + 1}`}>
      <div className="stars">
        <img src="./images/icon-star.svg" alt="star" />
        <img src="./images/icon-star.svg" alt="star" />
        <img src="./images/icon-star.svg" alt="star" />
        <img src="./images/icon-star.svg" alt="star" />
        <img src="./images/icon-star.svg" alt="star" />
      </div>
      <p className="rating-info">Rated 5 Stars in {category}</p>
    </div>
  );
}

function Review({ review, i }) {
  return (
    <div className={`review review-${i + 1}`}>
      <div className="details-box">
        <img src={review.image} alt="user img" className="review-photo" />
        <div className="reviewer-details">
          <p className="name">{review.user}</p>
          <p className="buyer">Verified Buyer</p>
        </div>
      </div>
      <blockquote className="blockquote">{review.review}</blockquote>
    </div>
  );
}

export default App;
