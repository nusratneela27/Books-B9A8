import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, tags, bookName, author, category, rating, id } = book;
  const [first, second] = tags;
  return (
    <div className="flex justify-center md:w-1/2 lg:w-1/4 mb-4 mx-auto">
      <Link to={`/book/${id}`}>
        <div className="card w-[350px] bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={image} className="rounded-xl w-[300px] h-[230px]" />
          </figure>
          <div className="mt-[20px]">
            <button className="mr-[20px]- ml-[40px] bg-[#23BE0A0D] p-[10px] #23BE0A0D text-[#23BE0A]">
              {first}
            </button>
            <button className="ml-[30px] bg-[#23BE0A0D] p-[10px] #23BE0A0D text-[#23BE0A]">
              {second}
            </button>
          </div>
          <div className="card-body ">
            <h2 className="card-title">{bookName}</h2>
            <p>by:{author}</p>
            <hr className="border-dotted border-2"></hr>
            <div className="flex justify-between">
              <div>
                <p>{category}</p>
              </div>

              <div>
                <p className="flex items-center">
                  <FaRegStar />
                  {rating}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
