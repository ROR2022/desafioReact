import * as React from "react";
import { Box, Button, Card, Container, CardContent } from "@mui/material";
import useDevto from "../../../hooks/useDevto";
import Checkbox from "@mui/material/Checkbox";
import DevtoNavbar from "../../DevtoNavBar/DevtoNavbar";
import DevtoFooter from "../../DevtoFooter/DevtoFooter";
import "./Settings.css";
import { Link } from "react-router-dom";

const Settings = () => {
  const [dataPosts,setDataPosts,dataUser] = useDevto();
  console.log("datauser:",dataUser)
  return (
    <>
      <div className="containerMain">
      <DevtoNavbar/>
        <Container fixed>
          <Box>
            <h1>
              <b>Settings for </b>
              <b className="userSettings">
                @{dataUser?.name ? dataUser.name : "User Name"}
              </b>
            </h1>
          </Box>
          <Box id="mainBox">
            <Box className="settingList">
              <ul className="settingsUl">
                <Link className="settingsLink"><li className="settingsLi">🙂 Profile</li></Link>
                <Link className="settingsLink"><li className="settingsLi">⚙️ Customization</li></Link>
                <Link className="settingsLink"><li className="settingsLiNotify">📭 Notifications</li></Link>
                <Link className="settingsLink"><li className="settingsLi">🌱 Account</li></Link>
                <Link className="settingsLink"><li className="settingsLi">💳 Billing</li></Link>
                <Link className="settingsLink"><li className="settingsLi">🏢 Organization</li></Link>
                <Link className="settingsLink"><li className="settingsLi">⚡ Extensions</li></Link>
              </ul>
            </Box>
            <Box>
              <Card className="cardContainer">
                <h2>Email Notifications</h2>
                <CardContent>
                  <p>
                    <Checkbox />
                    Send me weekly newsletter emails
                  </p>
                  <p>
                    <Checkbox />
                    Send me a periodic digest of top posts from my tags
                  </p>
                  <p>
                    <Checkbox defaultChecked />
                    Send me an email when someone replies to me in a comment thread
                  </p>
                  <p>
                    <Checkbox defaultChecked />
                    Send me an email when someone new follows me
                  </p>
                  <p>
                    <Checkbox defaultChecked />
                    Send me an email when someone mentions me
                  </p>
                  <p>
                    <Checkbox defaultChecked />
                    Send me an email when I receive a badge
                  </p>
                  <p>
                    <Checkbox defaultChecked />
                    Send me occasional reminders that I have unread notifications on DEV Community
                  </p>
                </CardContent>
              </Card>
              <Card className="cardContainer">
                <h2>Mobile Notifications</h2>
                <p>
                    <Checkbox defaultChecked />
                    Send me a push notification when someone replies to me in a comment thread
                  </p>
                  <p>
                    <Checkbox defaultChecked />
                    Send me a push notification when someone mentions me
                  </p>
              </Card>
              <Card className="cardContainer">
                <h2>General notifications</h2>
                <p>Notifications that only appear on the <a href="/notifications">notifications page</a>.</p>
                <p>
                    <Checkbox defaultChecked />
                    Send me occasional tips on how to enhance my DEV Community experience
                  </p>
                  <p>
                    <Checkbox defaultChecked />
                    Send notifications when someone reacts to my content, such as comments or posts
                  </p>
              </Card>
              <Card className="cardContainerBtn">
                <Button variant="contained" id="notifyBtn">
                    Save
                </Button>
              </Card>
            </Box>
          </Box>
        </Container>
        <DevtoFooter/>
      </div>
    </>
  );
};

export default Settings;
