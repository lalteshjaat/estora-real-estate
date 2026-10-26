import { useState } from "react";
import "./App.css";

const CONTACT_PHONE_1 = "919694517620";
const DISPLAY_PHONE_1 = "+91 9694517620";

const CONTACT_PHONE_2 = "917425847714";
const DISPLAY_PHONE_2 = "+91 7425847714";






const properties = [
{
id: 1,
name: "The Willow Residence",
location: "Jaipur, Rajasthan",
price: "₹1.85 Cr",
beds: 4,
baths: 3,
area: "2,450 sq.ft.",
image:
"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
type: "Luxury Villa",
},
{
id: 2,
name: "Serene Garden House",
location: "Gurugram, Haryana",
price: "₹2.40 Cr",
beds: 4,
baths: 4,
area: "3,100 sq.ft.",
image:
"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
type: "Modern Home",
},
{
id: 3,
name: "The Olive Apartment",
location: "New Delhi, India",
price: "₹95 Lac",
beds: 3,
baths: 2,
area: "1,650 sq.ft.",
image:
"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
type: "Apartment",
},
];

function App() {
const [search, setSearch] = useState("");
const [favorites, setFavorites] = useState<number[]>([]);
const [selected, setSelected] = useState<(typeof properties)[number] | null>(
null
);

const filteredProperties = properties.filter((property) =>
`${property.name} ${property.location} ${property.type}`
.toLowerCase()
.includes(search.toLowerCase())
);

return ( <main> <nav className="navbar">
 <a className="logo" href="#">
ESTORA<span>.</span> </a> <div className="nav-links">
 <a href="#properties">Properties</a>
 <a href="#about">About</a>

<div className="nav-contact-group">
  <a className="nav-contact" href={`tel:+${CONTACT_PHONE_1}`}>
    Call 1: {DISPLAY_PHONE_1}
  </a>

  <a className="nav-contact" href={`tel:+${CONTACT_PHONE_2}`}>
    Call 2: {DISPLAY_PHONE_2}
  </a>

  <a
    className="nav-contact"
    href={`https://wa.me/${CONTACT_PHONE_1}`}
    target="_blank"
    rel="noreferrer"
  >
    WhatsApp
  </a>
</div>


</div>
</nav>


  <section className="hero">
    <div className="hero-content">
      <span className="eyebrow">A MORE THOUGHTFUL WAY HOME</span>
      <h1>
        Find a place
        <br />
        <em>to call yours.</em>
      </h1>
      <p>
        Discover considered homes and exceptional spaces
        <br className="desktop-break" /> designed around the way you want
        to live.
      </p>
      <a className="button button-dark" href="#properties">
        Explore properties <span>↗</span>
      </a>
    </div>
    <div className="hero-image">
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90"
        alt="Beautiful contemporary luxury home"
      />
      <div className="image-caption">
        <span>01 — SELECTED RESIDENCE</span>
        <span>Architecture meets nature</span>
      </div>
    </div>
    <div className="hero-bottom">
      <span>FIND YOUR SPACE. FIND YOUR PLACE.</span>
      <span>JAIPUR · NEW DELHI · GURUGRAM</span>
    </div>
  </section>

  <section className="properties-section" id="properties">
    <div className="section-heading">
      <div>
        <span className="eyebrow">CURATED FOR YOU</span>
        <h2>Spaces worth <em>coming home to.</em></h2>
      </div>
      <p>Thoughtfully selected homes for your next chapter.</p>
    </div>

    <div className="search-box">
      <span>⌕</span>
      <input
        type="search"
        placeholder="Search by property, city or home type..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <span className="search-label">SEARCH</span>
    </div>

    <div className="property-grid">
      {filteredProperties.map((property) => (
        <article className="property-card" key={property.id}>
          <div className="property-image-wrap">
            <img src={property.image} alt={property.name} />
            <span className="property-type">{property.type}</span>
            <button
              className={`favorite ${
                favorites.includes(property.id) ? "is-favorite" : ""
              }`}
              onClick={() =>
                setFavorites((current) =>
                  current.includes(property.id)
                    ? current.filter((id) => id !== property.id)
                    : [...current, property.id]
                )
              }
              aria-label="Toggle favorite"
            >
              {favorites.includes(property.id) ? "♥" : "♡"}
            </button>
          </div>
          <div className="property-info">
            <div className="property-location">{property.location}</div>
            <h3>{property.name}</h3>
            <div className="property-features">
              <span>{property.beds} Beds</span>
              <span>{property.baths} Baths</span>
              <span>{property.area}</span>
            </div>
            <div className="property-bottom">
              <div>
                <small>ASKING PRICE</small>
                <strong>{property.price}</strong>
              </div>
              <button
                className="details-button"
                onClick={() => setSelected(property)}
              >
                View details ↗
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>

    {filteredProperties.length === 0 && (
      <p className="no-results">
        No properties found. Try searching for Jaipur, Delhi or Gurugram.
      </p>
    )}

    <p className="demo-note">
      Property listings are illustrative examples. Verify prices,
      availability and property details independently.
    </p>
  </section>

  <section className="about-section" id="about">
    <span className="eyebrow">THE ESTORA DIFFERENCE</span>
    <h2>
      A home is more than
      <br />
      <em>four walls.</em>
    </h2>
    <p>
      We believe finding a home should feel as special as living in one.
      Explore spaces chosen with care, clarity and a little inspiration.
    </p>
    <a className="button button-light" href="mailto:hello@estora.example">
      Start your journey ↗
    </a>
  </section>

  <footer className="footer">
    <a className="logo" href="#">
      ESTORA<span>.</span>
    </a>
    <p>Find your space. Find your place.</p>
    <span>© 2026 ESTORA · DEMO WEBSITE</span>
  </footer>

  {selected && (
    <div className="modal-backdrop" onClick={() => setSelected(null)}>
      <section
        className="property-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={() => setSelected(null)}
          aria-label="Close details"
        >
          ×
        </button>
        <img src={selected.image} alt={selected.name} />
        <div className="modal-content">
          <div className="eyebrow">{selected.location}</div>
          <h2>{selected.name}</h2>
          <strong className="modal-price">{selected.price}</strong>
          <p>
            {selected.type} · {selected.beds} bedrooms · {selected.baths}{" "}
            bathrooms · {selected.area}
          </p>
          <p>
            This is an illustrative demo listing. Confirm property details,
            pricing and availability before making any decisions.
          </p>
          <a
            className="button button-dark"
            href="mailto:hello@estora.example"
          >
            Enquire about this home ↗
          </a>
        </div>
      </section>
    </div>
  )}
</main>


);
}

export default App;
