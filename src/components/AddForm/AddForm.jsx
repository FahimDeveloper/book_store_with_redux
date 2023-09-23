import { useEffect, useState } from "react";
import { useAddBookMutation } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";


const AddForm = () => {
    const [addBook, { isLoading, isSuccess, isError }] = useAddBookMutation();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [featured, setFeatured] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, author, thumbnail, price, rating, featured };
        addBook(data)
    };
    const restForm = () => {
        setName("");
        setAuthor("");
        setThumbnail("");
        setPrice("");
        setRating("");
        setFeatured(false)
    }
    useEffect(() => {
        if (isSuccess) {
            restForm();
            navigate("/")
        }
    }, [isSuccess, navigate])
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div className="container">
            <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                <h4 className="mb-8 text-xl font-bold text-center">Add a Book</h4>
                <form onSubmit={handleSubmit} className="book-form">
                    <div className="space-y-2">
                        <label htmlFor="lws-bookName">Book Name</label>
                        <input onChange={(e) => setName(e.target.value)} value={name} required className="text-input" type="text" id="lws-bookName" name="name" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="lws-author">Author</label>
                        <input onChange={(e) => setAuthor(e.target.value)} value={author} required className="text-input" type="text" id="lws-author" name="author" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="lws-thumbnail">Image Url</label>
                        <input onChange={(e) => setThumbnail(e.target.value)} value={thumbnail} required className="text-input" type="text" id="lws-thumbnail" name="thumbnail" />
                    </div>

                    <div className="grid grid-cols-2 gap-8 pb-4">
                        <div className="space-y-2">
                            <label htmlFor="lws-price">Price</label>
                            <input onChange={(e) => setPrice(e.target.value)} value={price} required className="text-input" type="number" id="lws-price" name="price" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="lws-rating">Rating</label>
                            <input onChange={(e) => setRating(e.target.value)} value={rating} required className="text-input" type="number" id="lws-rating" name="rating" min="1"
                                max="5" />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input id="lws-featured" type="checkbox" onChange={() => setFeatured(!featured)} checked={featured} name="featured" className="w-4 h-4" />
                        <label htmlFor="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
                    </div>

                    <button type="submit" className="submit" id="lws-submit">Add Book</button>
                </form>
                {isError && <div className="error">There was an error occured</div>}
            </div>
        </div>
    );
};

export default AddForm;