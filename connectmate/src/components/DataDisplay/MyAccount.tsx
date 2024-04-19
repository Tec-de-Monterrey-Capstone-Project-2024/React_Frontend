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
            <div className="myaccount-container container">
                <div className="content">
                    <div className="prof-data">
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-6'>
                                    <input name='name' title='name' type="text" value={userData.name} onChange={handleInputChange} />
                                </div>
                                <div className='col-6'>
                                    <input name='lastname' title='lastname' type="text" value={userData.lastname} onChange={handleInputChange} />
                                </div>
                                <div className='col-12'>
                                    <input name='email' title='email' type="email" value={userData.email} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="buttons">
                                <button className="save" type="submit">
                                    Update data
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyAccount;