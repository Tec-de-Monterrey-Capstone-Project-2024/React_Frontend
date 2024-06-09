import React from 'react';

import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

import { useDataContext } from '../../context/DataContext';

import { ContentCard } from '../../components/Cards/ContentCard';

import './styles.css';

import profPic from '../../assets/img/profile-picture.png';

const AccountPage: React.FC = () => {
    const { user, setUser, setArn, setSelectedQueueId } = useDataContext();

    const handleLogOut = () => {
        signOut(auth).then(() => {
            setUser(null);
            localStorage.removeItem("user");
            localStorage.removeItem("instanceId");

            setArn('');
            localStorage.setItem("arn", '');

            setSelectedQueueId('all');
            
            // console.log("Signed out succesfully")
        }).catch((error) => {
            console.error(error);
        })
    }

    return <>
        <section className='account'>
            <div className="section-container container">
                <ContentCard>
                    <div className="account-content">
                        <div className='info'>
                            <div className='img'>
                                <img data-testid="profPic" src={profPic} alt="Profile Picture" width={720} height={720} />
                            </div>
                            {user ? (
                                <div className='data'>
                                    <h2 data-testid="name">{user.firstName} {user.lastName}</h2>
                                    <p data-testid='username' className='username'>{user.username}</p>
                                    <div className='inputs'>
                                        <div className='column'>
                                            <label htmlFor="email">Email</label>
                                            <input data-testid='email' name='email' title='email' type="email" value={user.email} disabled />
                                        </div>
                                        <div className='column'>
                                            <label htmlFor="sec-email">Secondary Email</label>
                                            <input data-testid='sec-email' name='sec-email' title='sec-email' type="email" value={user.secondaryEmail} disabled />
                                        </div>
                                        <div className='column'>
                                            <label htmlFor="phone-number">Phone Number</label>
                                            <input data-testid='mobile' name='phone-number' title='phone-number' type="text" value={user.mobile} disabled />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <p data-testid="txt-loading">Loading...</p>
                            )}
                        </div>
                        <div className='bottom'>
                            <button data-testid="logout-btn" onClick={handleLogOut} className="btn-type-4">Logout</button>
                        </div>
                        
                    </div>
                </ContentCard>
            </div>
        </section>
    </>;
};

export default AccountPage;
