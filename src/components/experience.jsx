import { useState } from "react";
import '../styles/style.css'
import GenericInput from "./Input";

function Experience() {
    const [displayCompany, setDisplayCompany] = useState('Company name');

    const [displayPosition, setDisplayPosition] = useState('Position Title');

    const [displayResponsabilities, setDisplayResponsabilities] = useState('Responsabilities');

    const [displayStartDateExpirience, setDisplayStartDateExpirience] = useState('Start Date');
    
    const [displayEndDateExpirience, setDisplayEndDateExpirience] = useState('Finish Date');



    const [company, setCompany] = useState('');

    const [position, setPosition] = useState('');

    const [responsabilities, setResponsabilities] = useState('');

    const [startDateExpirience, setStartDateExpirience] = useState('');

    const [endDateExpirience, setEndDateExpirience] = useState('');


    const [expirienceEditButton, setExpirienceEditButton] = useState('Edit');

    const expirienceEditFunction = () => {
        const btnExpirience = document.querySelector('.btnExpirience');

        const expirienceForm = document.querySelector('.expirienceForm')

        if (btnExpirience.textContent === 'Edit') {
            setExpirienceEditButton('Submit');

            setCompany(displayCompany);

            setPosition(displayPosition);

            setResponsabilities(displayResponsabilities);

            setStartDateExpirience(displayStartDateExpirience);

            setEndDateExpirience(displayEndDateExpirience);


            expirienceForm.style.display = 'Block'

        }
        else {
            setExpirienceEditButton('Edit');


            setDisplayCompany(company);

            setDisplayPosition(position);

            setDisplayResponsabilities(responsabilities);

            setDisplayStartDateExpirience(startDateExpirience);

            setDisplayEndDateExpirience(endDateExpirience);
            

            expirienceForm.style.display = 'None'
        };
    };


    return (
        <div>
            <h2>{displayCompany}</h2>
            <h3>{displayPosition}</h3>
            <p>{displayResponsabilities}</p>
            <p>{displayStartDateExpirience} - {displayEndDateExpirience}</p>

            <form className='expirienceForm' action="">

                <GenericInput 
                    value={company}
                    placeholder='Company name'
                    onChange={setCompany}
                /> <br />

                <GenericInput 
                    value={position}
                    placeholder='Position'
                    onChange={setPosition}
                />

                <GenericInput 
                    value={responsabilities}
                    placeholder='Responsabilities'
                    onChange={setResponsabilities}
                />

                <GenericInput 
                    value={startDateExpirience}
                    placeholder='Start at'
                    onChange={setStartDateExpirience}
                />

                <GenericInput 
                    value={endDateExpirience}
                    placeholder='Finish at'
                    onChange={setEndDateExpirience}
                />

            </form>

            <button className="btnExpirience" onClick={expirienceEditFunction}>{expirienceEditButton}</button>
        </div>
    );
};


export default Experience;