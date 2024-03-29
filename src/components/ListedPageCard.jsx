import React from "react";
import { Link } from "react-router-dom";

const ListedPageCard = ({ ListedBook }) => {
  const {
    id,
    image,
    bookName,
    author,
    totalPages,
    category,
    publisher,
    rating,
    yearOfPublishing,
    tags,
  } = ListedBook;
  const [first, second] = tags;
  return (
    <div>
      <div className="flex border rounded-lg mb-5 p-7 gap-9">
        <div>
          <figure>
            <img
              src={image}
              alt="Book Cover"
              className="rounded-xl w-[300px] h-[230px]"
            />
          </figure>
        </div>
        <div>
          <h2 className="text-2xl font-bold">{bookName}</h2>
          <p>by: {author}</p>
          <div>
            <span className="font-bold">Tags:</span>
            <button className="mr-[20px]- ml-[40px] bg-[#23BE0A0D] p-[10px] #23BE0A0D text-[#23BE0A]">
              {first}
            </button>
            <button className="ml-[30px] bg-[#23BE0A0D] p-[10px] #23BE0A0D text-[#23BE0A]">
              {second}
            </button>
          </div>
          <p>yearOfPublishing : {yearOfPublishing}</p>
          <div className="flex gap-6">
            <p>publisher : {publisher}</p>
            <p>totalPages: {totalPages}</p>
          </div>
          <hr className="border-solid my-2"></hr>
          <button className="mr-[20px] mt-2 rounded-lg bg-[#799ccd51] p-[10px] text-[#221d81]">
            Category : {category}
          </button>
          <button className="mr-[20px] mt-2 rounded-lg bg-[#e2c68ad1] p-[10px] text-[#88561e]">
            Rating : {rating}
          </button>
          <Link to={`/book/${id}`}>
            <button className="mr-[20px] mt-2 rounded-lg bg-[#22be0af7] p-[10px] text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedPageCard;
