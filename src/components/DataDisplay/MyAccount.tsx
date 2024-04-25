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
                <form onSubmit={handleSubmit}>
                    <div className='columns-2'>
                        <div className='form-control'>
                            <label htmlFor="name">Name</label>
                            <input name='name' title='name' type="text" value={userData.name} onChange={handleInputChange} />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="lastname">Last Name</label>
                            <input name='lastname' title='lastname' type="text" value={userData.lastname} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input name='email' title='email' type="email" value={userData.email} onChange={handleInputChange} />
                    </div>
                    <div className="buttons">
                        <button className="save" type="submit">
                            Update data
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default MyAccount;