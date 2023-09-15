const Cart = ({ selectedCourse, totalCredit, totalCreditRemaining, totalPrice }) => {
    return (
        <div>
            <div className="max-w-[300px] bg-white p-4 rounded-xl">
                <h2 className="text-lg font-semibold mb-3 mt-2 text-[#2F80ED]">
                    Credit Hour Remaining {totalCreditRemaining} hr
                </h2>

                <hr className="mb-3" />

                <h2 className="text-lg font-semibold mb-4">
                    Course Name
                </h2>

                <ol className="list-decimal text-[#606C5D]">
                    {
                        selectedCourse.map(item => (
                            <li key={item.id} className=" ml-4 mb-2">
                                {item.title}
                            </li>
                        ))
                    }
                </ol>

                <hr className="my-4" />

                <p className="text-lg font-semibold text-[#606C5D]">
                    Total Credit Hour : {totalCredit}
                </p>

                <hr className="my-4" />

                <p className="text-lg font-semibold text-[#606C5D]">
                    Total Price : {totalPrice} USD
                </p>
            </div>
        </div>
    );
};

export default Cart;