import React from "react";
import './Notifications.css'
import {getLatestNotification} from './utils';
import closeIcon from './close-icon.png';

function Notifications () {
    return (
        <>
            <div className="Notifications">
                <p>Here is the list of notifications</p>
                <button style={{
                    float : 'right',
                    marginTop: '-70px',
                    backgroundColor: '#fff',
                    border: 'none',
                }} aria-label="close">
                    <img src={closeIcon} alt="close" />            
                </button>
                <ul>
                    <li data-priority="default">The first one has a default priority and says New course available</li>
                    <li data-priority="urgent">The second one has an urgent priority and says New resume available</li>
                    <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
                </ul>
            </div>
        </>
    )
}

export default Notifications;