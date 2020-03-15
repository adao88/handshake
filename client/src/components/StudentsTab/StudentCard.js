import React  from 'react'
import { Link } from 'react-router-dom';

const StudentCard = ({id, name, schoolname, skillset}) => {


    
    return(
        <div className="ui items">
            <div className="item">
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta">{schoolname}</div>
                    <div className="description">{skillset}</div>
                    <Link to={{
                        pathname:'/studentProfile',
                        id: id
                        }}>
                        <button variant="raised">
                            See Profile
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default StudentCard