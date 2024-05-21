import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

const MyAccount = () => {
    const [userData, setUserData] = useState({
        name: '',
        lastname: '',
        email: ''
    });
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Call API or perform action to update user data
        console.log('Submitting form with user data:', userData);
    };

    return (
        <>
            <div className="tab-container container">
                <div className='columns-2'>
                    <div className='form-control'>
                        <label htmlFor="name"><b>Name</b></label>
                        <p>Elma</p>
                    </div>
                    <div className='form-control'>
                        <label htmlFor="lastname"><b> Last Name</b></label>
                        <p>Chucapapas</p>
                    </div>
                </div>
                <div className='form-control'>
                    <label htmlFor="email"><b>Email</b></label>
                    <p>elmachucapapas@gmail.com</p>
                </div>
            </div>
        </>
    );
};

export default MyAccount;