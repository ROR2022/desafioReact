import { Box } from '@mui/material';
import "./Notifications.css";
import * as React from 'react';
import { Link } from 'react-router-dom';

const Notifications = () => {

    return(
        <Box id="mainBox">
            <Box>
                <h1 className='notificationText'>Notifications</h1>
            </Box>
            <Box>
                <Link to="/settings/notifications" className='SettingsLink'>Settings</Link>
            </Box>
            <Box>
              <ul>
                <li>All</li>
                <li>Comment</li>
                <li>Posts</li>
              </ul>
            </Box>
            <Box>
                <div>
                </div>
                <div></div>
            </Box>
        </Box>
    );
}

export default Notifications