import React, { Fragment } from 'react';
import './Notifications.css'
import closeBtn from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';


function Notifications() {
  return (
    <Fragment>
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button style={{float:'right', background: 'none', border: 'none'}}
      arial-label="Close"
      onClick={()=>console.log("Close button has been clicked")}>

      <img src={closeBtn} alt="X" />
      </button>
      
      <ul>
            <NotificationItem type='default' value='New course available' />
            <NotificationItem type='urgent' value='New resume available' />
            <NotificationItem
              type='urgent'
              html={{ __html: getLatestNotification() }}
            />
      </ul>
    </div>
    </Fragment>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;