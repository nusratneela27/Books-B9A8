import { toast } from "react-toastify";

const getStoredBooks = () => {
    const storedBook = localStorage.getItem('read-books');
    if (storedBook) {
        return JSON.parse(storedBook);
    }
    return [];
}

const saveBooks = id => {
    const storedBooks = getStoredBooks();
    const exists = storedBooks.find(BookId => BookId === id);
    if (!exists) {
        storedBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedBooks))
        toast("You have read book successfully");
    }
    else {
        toast("Already read")
    }
}

const getWishlistBooks = () => {
    const wishlistBook = localStorage.getItem('wishlist-book');
    if (wishlistBook) {
        return JSON.parse(wishlistBook)
    }
    return [];
}

const saveWishlistBooks = id => {
    const wishlistBook = getWishlistBooks()
    const existsWishlist = wishlistBook.find(WishlistId => WishlistId === id);
    if (!existsWishlist) {
        wishlistBook.push(id)
        localStorage.setItem('wishlist-book', JSON.stringify(wishlistBook))
        toast("You have wishlist book successfully");
    }
    else {
        toast("Already wishlist book")
    }
}


export { getStoredBooks, saveBooks, getWishlistBooks, saveWishlistBooks }