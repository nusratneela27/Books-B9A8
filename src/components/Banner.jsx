import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="lg:mx-[100px] my-[40px] mt-[40px]">
      <div className="hero lg:h-[480px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/2MpXgr1/79002.jpg"
            className="max-w-sm lg:ml-[50px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="my-[12px] lg:ml-[20px] text-3xl lg:text-5xl font-bold">
              Books to freshen <br></br> up your bookshelf
            </h1>

            <Link to={"/listed"}>
              <button className="btn  lg:mt-[40px] ml-[20px] bg-[#23BE0A] text-white font-bold">
                View the list
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
