import { useState } from "react";
import '../styles/style.css'
import GenericInput from "./Input";

function Education() {
    const [displayCourse, setDisplayCourse] = useState('Course/Certificate');
    const [displaySchool, setDisplaySchool] = useState('School Name');
    const [displayDateCourse, setDisplayDateCourse] = useState('00/00/0000');

    const [course, setCourse] = useState('');
    const [school, setSchool] = useState('');
    const [dateCourse, setDateCourse] = useState('');

    const [educationEditButton, setEducationEditButton] = useState('Edit');

    const educationEditFunction = () => {
        const btnEducational = document.querySelector('.btnEducational');

        const educationalForm = document.querySelector('.educationalForm')

        if (btnEducational.textContent === 'Edit') {
            setEducationEditButton('Submit');
            setCourse(displayCourse);
            setSchool(displaySchool);
            setDateCourse(displayDateCourse);

            educationalForm.style.display = 'Block'

        }
        else {
            setEducationEditButton('Edit');

            setDisplayCourse(course);
            setDisplaySchool(school);
            setDisplayDateCourse(dateCourse);

            educationalForm.style.display = 'None'
        };
    };


    return (
        <div>
            <h2>{displayCourse}</h2>
            <h3>{displaySchool} - {displayDateCourse}</h3>

            <form className='educationalForm' action="">

                <GenericInput 
                    value={course}
                    placeholder='Course/Certificate'
                    onChange={setCourse}
                /> <br />

                <GenericInput 
                    value={school}
                    placeholder='School'
                    onChange={setSchool}
                />

                <GenericInput 
                    value={dateCourse}
                    placeholder='Date of study'
                    onChange={setDateCourse}
                />

            </form>

            <button className="btnEducational" onClick={educationEditFunction}>{educationEditButton}</button>
        </div>
    );
};


export default Education;