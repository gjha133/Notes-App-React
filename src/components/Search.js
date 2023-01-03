import React from "react"
import { MdSearch } from "react-icons/md"

export default function Search({handleSearchNote}) {

    return ( 
        <div className="search">
            <MdSearch 
                className="search-icon"
                size="1.3rem"
            />
            <input 
                type='text'
                placeholder="Type to Search..."
                onChange={(event) => 
                    handleSearchNote(event.target.value)
                }
            />
        </div>
    )
}