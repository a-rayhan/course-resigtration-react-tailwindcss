import { useState } from "react";
import Cards from "./Components/Cards";
import Cart from "./Components/Cart";

const App = () => {

  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalCreditRemaining, setTotalCreditRemaining] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectBtn = course => {
    if (totalCredit >= 20 || totalCreditRemaining <= 0) {
      return alert('No More')
    } else {
      let credit = course.credit;
      let price = course.price;

      selectedCourse.forEach(item => {
        credit += item.credit;
        price += item.price;
      })
      setTotalCredit(credit);
      setTotalPrice(price);

      const creditRemaining = 20 - credit;
      setTotalCreditRemaining(creditRemaining);
    }

    setSelectedCourse([...selectedCourse, course]);
  }

  return (
    <div className="bg-[#F3F3F3]">
      <h1 className="text-3xl font-bold text-center mb-12 max-w-5xl mx-auto pt-16">
        Course Registration
      </h1>

      <div className="max-w-7xl mx-auto flex gap-4 pb-16">
        <Cards handleSelectBtn={handleSelectBtn} />
        <Cart selectedCourse={selectedCourse} totalCredit={totalCredit} totalCreditRemaining={totalCreditRemaining} totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default App;