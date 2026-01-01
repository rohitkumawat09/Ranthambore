import React from "react";
import "./Package.css";

const packages = [
  {
    title: "Mountain Adventure",
    desc: "Thrilling mountain treks and camping under stars.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
    people: "3 People",
    price: "₹6,999",
    oldPrice: "₹7,999",
    days: "7 Days 6 Nights",
    facilities: ["Hotel", "Transport", "Meals", "Safari", "Guided Tours"],
  },
  {
    title: "Jungle Relaxation",
    desc: "Explore high passes and monasteries.",
    img: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200",
    people: "4 People",
    price: "₹6,999",
    oldPrice: "₹7,999",
    days: "5 Days 4 Nights",
    facilities: ["Hotel", "Transport", "Meals", "Safari"],
  },
  {
    title: "Premium Package",
    desc: "Explore high passes and monasteries.",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200",
    people: "2 People",
    price: "₹3,999",
    oldPrice: "₹4,999",
    days: "2 Days 2 Nights",
    facilities: ["Hotel", "Transport", "Meals"],
  },
];

const Package = () => {
  return (
    <section className="packageSection">
      <p className="packageTag">PACKAGE</p>
      <h2 className="packageTitle">
        Ranthambore <span>Tour Packages</span>
      </h2>

      <div className="packageGrid">
        {packages.map((item, index) => (
          <div className="packageCard" key={index}>
            <div
              className="packageImage"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <span className="badge">Hotel</span>
              <span className="people">{item.people}</span>
            </div>

            <div className="packageContent">
              <h3>{item.title}</h3>
              <p className="desc">{item.desc}</p>

              <p className="facilityTitle">Included Facilities:</p>
              <ul>
                {item.facilities.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <p className="meta">{item.facilities.length} Facilities · {item.people} · {item.days}</p>

              <div className="priceRow">
                <div>
                  <span className="price">{item.price}</span>
                  <span className="oldPrice">{item.oldPrice}/person</span>
                </div>
                <button className="detailsBtn">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="allBtn">View All Packages</button>
    </section>
  );
};

export default Package;
