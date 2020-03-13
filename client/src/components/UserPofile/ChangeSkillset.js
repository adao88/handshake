import React, {useState} from 'react'


const ChangeSkillset = ({showSkillsForm, hideSkillsForm, submitSkillsForm}) => {

    const[newSkills, setNewSkills] = useState('')

    const handleSkillsChange = (e) => {
        setNewSkills(e.target.value)
    }

    const handleSubmit = () => {

        let Skillset = {
            skillset: newSkills
        }

        submitSkillsForm(Skillset)

        console.log('new skillset info...', Skillset)

        setNewSkills('')
    }

    let show = showSkillsForm ? "modal display-block" : "modal display-none"

    return(
        <div className={show}>
            <div className="modal-main">
                <form class="ui form">
                    <div class="field">
                        <label>Skills</label>
                        <input type="text" name="skills" placeholder="Skills" value={newSkills} onChange={handleSkillsChange}></input>
                    </div>             
                    <button type="button" onClick={handleSubmit}>Submit</button>
                    <button type="button" onClick={hideSkillsForm}>Close</button>
                </form>
            </div>    
        </div>
    )

}

export default ChangeSkillset