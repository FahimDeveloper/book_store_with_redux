import { useParams } from "react-router-dom";
import EditForm from "../../components/EditForm/EditForm";
import { useGetBookQuery } from "../../features/api/apiSlice";


const EditBook = () => {
    const { bookId } = useParams();
    const { data: book, isLoading, isError } = useGetBookQuery(bookId)
    let content;
    if (isLoading) {
        content = <div>Loading...</div>
    }
    if (!isLoading && isError) {
        content = <div className="error">There was an error occured</div>
    }
    if (!isLoading && !isError && !book?.id) {
        content = <div>No Books found</div>
    }
    if (!isLoading && !isError && book?.id) {
        content = <EditForm book={book} />
    }
    return content;
};

export default EditBook;