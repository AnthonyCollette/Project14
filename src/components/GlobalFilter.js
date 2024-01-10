const GlobalFilter = ({ setGlobalFilters, globalFilters, setActualPage }) => {
    return (
        <div className='search'>
            <label htmlFor="search">
                Search
            </label>
            <input type="text" name="search" value={globalFilters} onChange={(e) => { 
                setActualPage(0)
                setGlobalFilters(e.target.value) }} />
        </div>
    );
};

export default GlobalFilter;