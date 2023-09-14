const Card = () => {
    return (
        <div>
            <article className="max-w-[300px] p-3 bg-white rounded-xl">
                <img src="" alt="" className="w-full h-40 bg-slate-50 rounded-xl mb-4" />

                <div>
                    <h1 className="text-2xl font-bold leading-7 mb-4">
                        Introduction to C Programming
                    </h1>

                    <p className="mb-4 text-[#606C5D]">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>

                    <div className="flex justify-between items-center mb-6 text-[#606C5D]">
                        <p className="text-lg font-semibold">
                            <span>
                                $
                            </span>
                            <span>
                                Price :
                            </span> 15000
                        </p>

                        <p className="text-lg font-semibold">
                            Credit : 1hr
                        </p>
                    </div>

                    <button className="bg-blue-600 w-full py-3 text-xl text-white rounded-lg font-semibold cursor-pointer">
                        Select
                    </button>
                </div>
            </article>
        </div>
    );
};

export default Card;