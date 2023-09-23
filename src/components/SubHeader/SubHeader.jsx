import { useSelector, useDispatch } from "react-redux"
import { tabSelected } from "../../features/filters/filtersSlice";

const SubHeader = () => {
    const { tabFilterKey } = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const handleTabFilter = (key) => {
        dispatch(tabSelected(key))
    }
    return (
        <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>
            <div className="flex items-center space-x-4">
                <button onClick={() => handleTabFilter("all")} className={`lws-filter-btn ${tabFilterKey === "all" ? "active-filter" : null}`}>All</button>
                <button onClick={() => handleTabFilter("featured")} className={`lws-filter-btn ${tabFilterKey === "featured" ? "active-filter" : null}`}>Featured</button>
            </div>
        </div>
    );
};

export default SubHeader;