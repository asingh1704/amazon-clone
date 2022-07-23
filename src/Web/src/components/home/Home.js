import Product from "../product/Product";
import { React, useState, useEffect } from "react";
import { getAllItems } from "../../services/catalogService";
import "./Home.css";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        let _result = await getAllItems();
        console.log(_result.data);
        await setItems(_result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStory();
    console.log(items);
  }, []);

  return (
    <div className="home">
      <img
        className="home__backImage"
        src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
        alt=""
      />

      <div className="home__products">
        {items.map((item) => (
          <Product
            id={item.id}
            title={item.name}
            price={item.price}
            rating={3}
            image={item.pictureUri}
          />
        ))}
      </div>

      <div className="home__products">
        <Product
          id="12123"
          title="Addidas Samba"
          price="2000"
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_2X._SY608_CB639746708_.jpg"
        />
        <Product
          id="12123"
          title="Addidas Samba"
          price="2000"
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_2X._SY608_CB639746708_.jpg"
        />
        <Product
          id="12123"
          title="Addidas Samba"
          price="2000"
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_2X._SY608_CB639746708_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
