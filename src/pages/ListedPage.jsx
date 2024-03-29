import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ListedPageCard from "../components/ListedPageCard";
import { getStoredBooks, getWishlistBooks } from "../utility/localstorage";

const ListedPage = () => {
  const books = useLoaderData();
  const [allBooks, setAllBooks] = useState([]);
  const [sortBy, setSortBy] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const storedBookIds = getStoredBooks();
    const wishlistBookIds = getWishlistBooks();

    if (books.length > 0) {
      const readBooks = storedBookIds
        .map((id) => books.find((book) => book.id === id))
        .filter(Boolean);
      const wishlistBooks = wishlistBookIds
        .map((id) => books.find((book) => book.id === id))
        .filter(Boolean);

      const combinedBooks = [...readBooks, ...wishlistBooks];

      if (sortBy === "rating") {
        combinedBooks.sort((a, b) => b.rating - a.rating);
      } else if (sortBy === "pages") {
        combinedBooks.sort((a, b) => a.totalPages - b.totalPages);
      } else if (sortBy === "year") {
        combinedBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
      }

      setAllBooks(combinedBooks);
    }
  }, [books, sortBy]);

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleTabSelect = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="lg:mx-[100px] my-[40px] mt-[40px]">
      <div className="hero lg:h-[100px] bg-base-200 rounded-lg">
        <h1 className="text-center text-4xl font-bold my-[30px] ">Books</h1>
      </div>
      <div className="flex justify-center items-center">
        <details className="dropdown my-16">
          <summary className="m-1 btn mr-[20px] bg-[#23BE0A] font-bold text-white">
            Sort By
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <button onClick={handleSortByChange} value="rating">
                Rating
              </button>
            </li>
            <li>
              <button onClick={handleSortByChange} value="pages">
                Number of Pages
              </button>
            </li>
            <li>
              <button onClick={handleSortByChange} value="year">
                Published Year
              </button>
            </li>
          </ul>
        </details>
      </div>
      <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
        <TabList>
          <Tab className="hidden">All</Tab>
          <Tab>Read Books</Tab>
          <Tab>Wishlist</Tab>
        </TabList>
        <TabPanel>
          <div>
            {allBooks.map((ListedBook) => (
              <ListedPageCard key={ListedBook.id} ListedBook={ListedBook} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {allBooks
              .filter((ListedBook) => getStoredBooks().includes(ListedBook.id))
              .map((ListedBook) => (
                <ListedPageCard key={ListedBook.id} ListedBook={ListedBook} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {allBooks
              .filter((ListedBook) =>
                getWishlistBooks().includes(ListedBook.id)
              )
              .map((ListedBook) => (
                <ListedPageCard key={ListedBook.id} ListedBook={ListedBook} />
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedPage;
