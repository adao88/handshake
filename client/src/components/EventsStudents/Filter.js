import React from 'react'

const Filter = ({handleNameChange, handleReset}) => {
    return(
        <div>
            <div>
                Search by Name:
                <input
                    onChange={handleNameChange}
                />
                <button className="ui button primary" onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default Filter