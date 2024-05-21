import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ROUTES } from '../../ROUTES';

import MyAccount from '../../components/DataDisplay/MyAccount';

import { ContentCard } from '../../components/Cards/ContentCard';

import './styles.css';


const AccountPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [tab, setTab] = useState(1);

    const changeTab = (tabIndex: number) => {
        setTab(tabIndex);
    };

    useEffect(() => {
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
                    <div className="content">
                        <div className="sidebar">
                            <div className="sidebar-container container">
                                <div className="user">
                                    <h2>Diego Zepeda</h2>
                                    <p className='subtitle'>Supervisor</p>
                                </div>
                                <ul>
                                    <li>
                                        <button>
                                            Logout
                                            {/* <img src={logoutIcon} alt="Logout icon" /> */}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab">
                            {tab === 1 ? <>
                                <div className="tab-header">
                                    <div className="title">
                                        <h3>Account</h3>
                                    </div>
                                </div>
                                <MyAccount />
                            </> : tab === 2 ? <>
                                <div className="tab-header">
                                    <div className="title">
                                        <h3>Preferences</h3>
                                    </div>
                                </div>
                                {/* <Preferences /> */}
                            </> : <>
                                <p>Error</p>
                            </>}
                        </div>
                    </div>
                </ContentCard>
            </div>
        </section>
    </>;
};

export default AccountPage;
