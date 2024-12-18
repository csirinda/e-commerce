// rafce
import ContentCarousel from "../components/home/ContentCarousel";
import BestSeller from "../components/home/BestSeller";
import NewProduct from "../components/home/NewProduct";

const Home = () => {
  return (
    <div>
      <ContentCarousel />

      <p className="text-2xl text-center my-4">Best Seller</p>
      <BestSeller />

      <p className="text-2xl text-center my-4">New Arrival</p>
      <NewProduct />



    </div>
  );
};

export default Home;
