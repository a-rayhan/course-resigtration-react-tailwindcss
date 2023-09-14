const Cart = () => {
    return (
        <div>
            <div className="max-w-[300px] bg-white p-4 rounded-xl">
                <h2 className="text-lg font-semibold mb-3 mt-2 text-[#2F80ED]">
                    Credit Hour Remaining 7 hr
                </h2>

                <hr className="mb-3" />

                <h2 className="text-lg font-semibold mb-4">
                    Course Name
                </h2>

                <ol className="list-decimal text-[#606C5D]">
                    <li className=" ml-4 mb-2">
                        Introduction to c programming
                    </li>
                </ol>

                <hr className="my-4" />

                <p className="text-lg font-semibold text-[#606C5D]">
                    Total Credit Hour : 13
                </p>

                <hr className="my-4" />

                <p className="text-lg font-semibold text-[#606C5D]">
                    Total Price : 48000 USD
                </p>
            </div>
        </div>
    );
};

export default Cart;