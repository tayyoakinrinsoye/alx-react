import React from "react";
import PropTypes from 'prop-types';


function NotificationItem ({type, html, value}) {
    return (
        <>
            {type && value ? <li data-notification-type={type}>{value}</li> : null}
            {html ? <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
        </>
    );
}

/*NotificationItem.defaultProps = {
    type: 'default',
    value: '',
    html: {},
  };*/
  
  /*NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
  };*/

export default NotificationItem;