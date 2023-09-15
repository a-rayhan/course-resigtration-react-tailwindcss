import { useState } from "react";
import Cards from "./Components/Cards";
import Cart from "./Components/Cart";

const App = () => {

  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalCreditRemaining, setTotalCreditRemaining] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectBtn = course => {
    let credit = course.credit;
    let price = course.price;

    selectedCourse.forEach(item => {
      credit += item.credit;
      price += item.price;
    })

    const creditRemaining = 20 - credit;

    if (credit > 20 || creditRemaining < 0) {
      return alert('no more')
    } else {
      setTotalCredit(credit);
      setTotalPrice(price);
      setTotalCreditRemaining(creditRemaining);
      setSelectedCourse([...selectedCourse, course]);
    }

  }

  return (
    <div className="bg-[#F3F3F3]">
      <h1 className="text-3xl font-bold text-center mb-12 max-w-5xl mx-auto pt-16">
        Course Registration
      </h1>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 pb-16 justify-center items-center md:items-start">
        <Cards handleSelectBtn={handleSelectBtn} />
        <Cart selectedCourse={selectedCourse} totalCredit={totalCredit} totalCreditRemaining={totalCreditRemaining} totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default App;