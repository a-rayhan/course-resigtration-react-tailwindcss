const Card = ({ course, handleSelectBtn }) => {
    const { img, title, description, price, credit } = course;

    return (
        <div>
            <article className="max-w-[300px] p-3 bg-white rounded-xl">
                <img src={img} alt="" className="w-full h-40 bg-slate-50 rounded-xl mb-4" />

                <div>
                    <h1 className="text-2xl font-bold leading-7 mb-4">
                        {title}
                    </h1>

                    <p className="mb-4 text-[#606C5D]">
                        {description}
                    </p>

                    <div className="flex justify-between items-center mb-6 text-[#606C5D]">
                        <p className="text-lg font-semibold">
                            <span>
                                $
                            </span>
                            <span>
                                Price :
                            </span> {price}
                        </p>

                        <p className="text-lg font-semibold">
                            Credit : {credit}hr
                        </p>
                    </div>

                    <button onClick={() => handleSelectBtn(course)} className="bg-blue-600 w-full py-3 text-xl text-white rounded-lg font-semibold cursor-pointer">
                        Select
                    </button>
                </div>
            </article>
        </div>
    );
};

export default Card;