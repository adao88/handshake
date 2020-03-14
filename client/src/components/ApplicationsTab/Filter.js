import React from 'react'

const Filter = ({handleStatusChange, handleReset}) => {
    return(
        <div>
            <button onClick={()=>handleStatusChange("Pending")}>Pending</button>
            <button onClick={()=>handleStatusChange("Reviewed")}>Reviewed</button>
            <button onClick={()=>handleStatusChange("Declined")}>Declined</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Filter