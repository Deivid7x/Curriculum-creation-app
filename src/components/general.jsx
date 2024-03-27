import { useState } from "react";
import '../styles/style.css'
import GenericInput from "./Input";

function General() {
    const [displayName, setDisplayName] = useState('Your Name');
    const [displayEmail, setDisplayEmail] = useState('YourEmail@email.com');
    const [displayPhoneNumber, setDisplayPhoneNumber] = useState('11 0000-0000');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [generalEditButton, setGeneralEditButton] = useState('Edit');

    const generalEditFunction = () => {
        const btnGeneral = document.querySelector('.btnGeneral');

        const generalForm = document.querySelector('.generalForm')

        if (btnGeneral.textContent === 'Edit') {
            setGeneralEditButton('Submit');
            setName(displayName);
            setEmail(displayEmail);
            setPhoneNumber(displayPhoneNumber);

            generalForm.style.display = 'Block'

        }
        else {
            setGeneralEditButton('Edit');

            setDisplayName(name);
            setDisplayEmail(email);
            setDisplayPhoneNumber(phoneNumber);

            generalForm.style.display = 'None'
        };
    };


    return (
        <div>
            <h1>{displayName}</h1>
            <h2>{displayEmail} - {displayPhoneNumber}</h2>

            <form className='generalForm' action="">

                <GenericInput 
                    value={name}
                    placeholder='Name'
                    onChange={setName}
                /> <br />

                <GenericInput 
                    value={email}
                    placeholder='Email'
                    onChange={setEmail}
                />

                <GenericInput 
                    value={phoneNumber}
                    placeholder='Phone Number'
                    onChange={setPhoneNumber}
                />

            </form>

            <button className="btnGeneral" onClick={generalEditFunction}>{generalEditButton}</button>
        </div>
    );
};


export default General;