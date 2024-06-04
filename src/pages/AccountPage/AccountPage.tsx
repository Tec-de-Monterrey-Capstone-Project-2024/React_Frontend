import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { auth } from '../../firebase';
import { signOut, deleteUser } from 'firebase/auth';

import { useDataContext } from '../../context/DataContext';

import MyAccount from '../../components/DataDisplay/MyAccount';
import { ContentCard } from '../../components/Cards/ContentCard';

import './styles.css';

import profPic from '../../assets/img/profile-picture.png';

const AccountPage: React.FC = () => {
    const navigate = useNavigate();
    const { user, setUser, setArn, setSelectedQueueId } = useDataContext();
    const [searchParams, setSearchParams] = useSearchParams();
    const [tab, setTab] = useState(1);

    const changeTab = (tabIndex: number) => {
        setTab(tabIndex);
    };

    const handleLogOut = () => {
        signOut(auth).then(() => {
            setUser(null);
            localStorage.removeItem("user");
            localStorage.removeItem("instanceId");

            setArn('');
            localStorage.setItem("arn", '');

            setSelectedQueueId('all');
            
            console.log("Signed out succesfully")
        }).catch((error) => {
            console.log('an error happened')
        })
    }
    useEffect(() => {
        console.log(user);
        const urlTab = searchParams.get("tab");
        if (urlTab) {
            changeTab(parseInt(urlTab));
        } else {
            changeTab(1);
        }
    }, [searchParams]);

    return <>
        <section className='account'>
            <div className="section-container container">
                <ContentCard>
                    <div className="account-content">
                        <div className='info'>
                            <div className='img'>
                                <img src={profPic} alt="Profile Picture" width={720} height={720} />
                            </div>
                            <div className='data'>
                                <h2>{user?.firstName} {user?.lastName}</h2>
                                <p className='username'>{user?.username}</p>
                                <div className='inputs'>
                                    <div className='column'>
                                        <label htmlFor="email">Email</label>
                                        <input name='email' title='email' type="email" value={user?.email} disabled />
                                    </div>
                                    <div className='column'>
                                        <label htmlFor="sec-email">Secondary Email</label>
                                        <input name='sec-email' title='sec-email' type="email" value={user?.secondaryEmail} disabled />
                                    </div>
                                    <div className='column'>
                                        <label htmlFor="phone-number">Phone Number</label>
                                        <input name='phone-number' title='phone-number' type="text" value={user?.mobile} disabled />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bottom'>
                            <button onClick={handleLogOut} className="btn-type-4">Logout</button>
                        </div>
                        
                    </div>
                </ContentCard>
            </div>
        </section>
    </>;
};

export default AccountPage;
