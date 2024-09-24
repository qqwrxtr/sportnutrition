const BannerSovet = () => {
    return ( 
        <div className="banner__3 flex justify-center items-center xl:items-start  xl:flex-row flex-col gap-10 py-10 bg-green-600 w-full text-white px-5">
            <div className="text__part__1 w-full xl:max-w-[500px]">
                <div className="title text-2xl md:text-4xl font-medium text-center">
                    <h1>Physical activity when <br className="none sm:block"/> losing weight</h1>
                </div>
                <div className="subtitle mt-5 md:text-xl text-sm xl:text-start text-center">
                    <p>Doing physical activity will <br className="none sm:block"/> increase your energy expenditure</p>
                </div>
            </div>
            <div className="text__part__2 w-full xl:mt-0 mt-5 max-w-[800px]">
                <div className="title text-xl md:text-3xl font-medium text-center">
                    <h2>Energy is required during exercise to fuel the contracting muscles, increased breathing, heart rate and metabolism.</h2>
                </div>
                <div className="subtitle mt-5">
                    <p className="md:text-base text-sm xl:text-start text-center">
                        The benefits of physical activity go beyond just burning off calories and can help preserve muscle as you lose weight and increase the proportion of muscle in the body. We also know that physical activity, and spending less time sitting, can reduce your risk of developing several chronic diseases, such as heart disease.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BannerSovet;
