import BookCard from "../../components/BookCard/BookCard";
import { useSelector } from "react-redux"
import SubHeader from "../../components/SubHeader/SubHeader";
import { useGetBooksQuery } from "../../features/api/apiSlice";


const Home = () => {
    const { data: books, isLoading, isError } = useGetBooksQuery();
    const { tabFilterKey, searchKey } = useSelector(state => state.filters)
    const tabFilter = (book) => {
        switch (tabFilterKey) {
            case "featured":
                return book.featured
            default:
                return book
        }
    }
    const handleSearch = (book) => {
        if (searchKey.length > 0) {
            return book?.name?.toLowerCase().includes(searchKey.toLowerCase())
        }
        return book
    }
    let content;
    if (isLoading) {
        content = <div>Loading...</div>
    }
    if (!isLoading && isError) {
        content = <div>There was an occured</div>
    }
    if (!isLoading && !isError && books.length === 0) {
        content = <div>No Books found</div>
    }
    if (!isLoading && !isError && books.length > 0) {
        content =
            <>
                {
                    books.filter(tabFilter).filter(handleSearch).map(book => <BookCard key={book.id} book={book} />)
                }
            </>
    }
    return (
        <main className="py-12 px-6 2xl:px-6 container">
            <div className="order-2 xl:-order-1">
                <SubHeader />
                <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {content}
                </div>
            </div>
        </main>
    );
};

export default Home;