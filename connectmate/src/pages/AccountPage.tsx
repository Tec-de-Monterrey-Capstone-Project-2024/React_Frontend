import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ROUTES } from '../ROUTES';

import ContentCard from '../components/Cards/ContentCard';
//import { MetricCard } from '../components/MetricCard';

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
        <ContentCard>
            <section className='account'>
                <div className="account-container container">
                    <div className="content">
                        <div className="sidebar">
                            <div className="sidebar-container container">
                                <ul>
                                    <li>
                                        <button onClick={() => changeTab(1)} data-active={tab === 1}>
                                            My account
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => changeTab(2)} data-active={tab === 2}>
                                            Preferences
                                        </button>
                                    </li>
                                    {/* <li>
                                        <button onClick={logout}>
                                            {t("logout")}
                                            <img src={logoutIcon} alt="Logout icon" />
                                        </button>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <section className="tab-content">
                            {tab === 1 ? <>
                                <div className="tab-header">
                                    <div className="th-container">
                                        <div className="title">
                                            <h1>My account</h1>
                                            {/* <h2>Please complete your register</h2> */}
                                        </div>
                                        {/* <div className="logo">
                                            <img src={logo} alt="Logo" />
                                        </div> */}
                                    </div>
                                    <hr />
                                </div>
                                {/* <MyAccount /> */}
                            </> : tab === 2 ? <>
                                <div className="tab-header">
                                    <div className="th-container">
                                        <div className="title">
                                            <h1>Preferences</h1>
                                            {/* <h2>Please complete your register</h2> */}
                                        </div>
                                        {/* <div className="logo">
                                            <img src={logo} alt="Logo" />
                                        </div> */}
                                    </div>
                                    <hr />
                                </div>
                                {/* <Preferences /> */}
                            </> : <>
                                <p>Error</p>
                            </>}
                        </section>
                    </div>
                </div>
            </section>
        </ContentCard>
    </>;
};

export default AccountPage;
