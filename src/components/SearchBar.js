import '../App.css';

function SearchBar({ handleSearch, search, handleCategoryFilter, categoryFilter }) {

    return (
        <div>
            <input type="text" placeholder="Search.." value={search} onChange={handleSearch}></input>
            <select name="categories" id="categories" value={categoryFilter} onChange={handleCategoryFilter}>
                <option value="all">All</option>
                <option value="classic">Classic</option>
                <option value="basic">Basic</option>
                <option value="tiki">Tiki</option>
                <option value="latin">Latin</option>
                <option value="other">Other</option>
                <option value="userAdded">User Added</option>
            </select>
        </div>
    )
}

export default SearchBar;