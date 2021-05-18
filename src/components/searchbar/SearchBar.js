import React from 'react'
import './Searchbar.css'


function SearchBar(props) {
    

    return (
        <div>
            <div className='radiobtns'>
                
                    <label class="c">
                        <input type="radio" checked="checked" name="radio" value='actor'/>
                        <span class="checkmark"></span>
                        Actor
                    </label>
                
                    <label class="c">
                        <input type="radio" checked="checked" name="radio" value='show'/>
                        <span class="checkmark"></span>
                        Show
                    </label>
            </div>
            <div className='search'>
                <input className='searchbar' type='search' placeholder='Type query' onChange={props.onSearchChange}/>
                <button onClick={props.onSearch}>Search</button>
            </div>
        </div>
    )
}

export default SearchBar
