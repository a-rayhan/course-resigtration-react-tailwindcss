import Cards from "./Components/Cards";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <h1 className="text-3xl font-bold text-center mb-12 max-w-5xl mx-auto pt-16">
        Course Registration
      </h1>

      <div className="max-w-7xl mx-auto flex gap-4 pb-16">
        <Cards />
        <Cart />
      </div>
    </div>
  );
};

export default App;