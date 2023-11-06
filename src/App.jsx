import { useState } from "react";

import imgOne from "./assets/img3.jpg";
import imgTwo from "./assets/img1.jpg";
import imgThree from "./assets/img4.jpg";
import imgFour from "./assets/img2.jpg";

import "./App.css";

function App() {
  const [checked, setChecked] = useState(1);

  return (
    <>
      <header>
        <a href="#" className="logo">
          Logo
        </a>
        <div className="toggle"></div>
      </header>
      <section className="slider">
        <input type="radio" name="slider" checked={checked === 1} onChange={evt => setChecked(evt.target.checked ? 1 : 0)} />
        <div className="img-box">
          <img src={imgOne} />
          <div className="content-box">
            <h2>Slider One</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              eum cupiditate? Autem praesentium numquam eius nisi expedita
              quibusdam cumque nobis, molestias tempora quos magni, delectus
              iusto voluptatem ipsam provident mollitia.
            </p>
            <a href="/">Read More</a>
          </div>
        </div>
        <input type="radio" name="slider" checked={checked === 2} onChange={evt => setChecked(evt.target.checked ? 2 : 0)} />
        <div className="img-box">
          <img src={imgTwo} />
          <div className="content-box">
            <h2>Slider Two</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              eum cupiditate? Autem praesentium numquam eius nisi expedita
              quibusdam cumque nobis, molestias tempora quos magni, delectus
              iusto voluptatem ipsam provident mollitia.
            </p>
            <a href="/">Read More</a>
          </div>
        </div>
        <input type="radio" name="slider"  checked={checked === 3} onChange={evt => setChecked(evt.target.checked ? 3 : 0)} />
        <div className="img-box">
          <img src={imgThree} />
          <div className="content-box">
            <h2>Slider Three</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              eum cupiditate? Autem praesentium numquam eius nisi expedita
              quibusdam cumque nobis, molestias tempora quos magni, delectus
              iusto voluptatem ipsam provident mollitia.
            </p>
            <a href="/">Read More</a>
          </div>
        </div>
        <input type="radio" name="slider" checked={checked === 4} onChange={evt => setChecked(evt.target.checked ? 4 : 0)} />
        <div className="img-box">
          <img src={imgFour} />
          <div className="content-box">
            <h2>Slider Four</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              eum cupiditate? Autem praesentium numquam eius nisi expedita
              quibusdam cumque nobis, molestias tempora quos magni, delectus
              iusto voluptatem ipsam provident mollitia.
            </p>
            <a href="/">Read More</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
