const GlobalFilter = ({setGlobalFilters, globalFilters}) => {
    return (
        <div className='search'>
            <label htmlFor="search">
                Search
            </label>
            <input type="text" name="search" value={globalFilters} onChange={(e) => setGlobalFilters(e.target.value)} />
        </div>
    );
};

export default GlobalFilter;