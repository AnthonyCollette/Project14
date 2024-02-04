const GlobalFilter = ({ setGlobalFilters, globalFilters, setActualPage }) => {
    return (
        <div className='search'>
            <label htmlFor="searchInput" id="searchInputLabel">
                Search
            </label>
            <input type="text" name="searchInput" id="searchInput" aria-labelledby="searchInputLabel" value={globalFilters} onChange={(e) => { 
                setActualPage(0)
                setGlobalFilters(e.target.value) }} />
        </div>
    );
};

export default GlobalFilter;