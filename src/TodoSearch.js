import React from 'react';


function TodoSearch({
    searchValue,
    setSearchValue
}) {

    return (
        <input type="text"
            value={searchValue}
            placeholder="Search task" onChange={
                (event) => {
                    setSearchValue(event.target.value);
                }
            } />
    );
}
export { TodoSearch }