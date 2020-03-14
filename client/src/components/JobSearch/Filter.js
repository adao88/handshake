import React from 'react'

const Filter = ({handleCategoryChange, handleLocationChange, handleReset}) => {
    return(
        <div>
            <div>
                Location:
                <input
                    onChange={handleLocationChange}
                />
            </div>
            <button onClick={()=>handleCategoryChange("Part-Time")}>Part-Time</button>
            <button onClick={()=>handleCategoryChange("Full-Time")}>Full-Time</button>
            <button onClick={()=>handleCategoryChange("On-Campus")}>On-Campus</button>
            <button onClick={()=>handleCategoryChange("Internship")}>Internship</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Filter