import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <div className="mt-[100px]">
      <h1 className="text-center text-3xl font-bold">Oops!</h1>
      <p className="text-center mt-[16px]">Sorry, an unexpected error has occurred.</p>
      <p className=" text-center mt-[20px] text-4xl font-bold">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
       <Link to="/"><button className="btn bg-[#59C6D2] ml-[150px] lg:ml-[600px] mt-[20px] text-white ">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;