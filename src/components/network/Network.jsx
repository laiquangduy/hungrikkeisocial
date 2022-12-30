import React from "react";
import Manage from "./Manage";
import Managenetwork from "./Managenetwork";
import People from "./People";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";

const Network = ({ users, friendadd, btnAccept, btnremove, btnAdding }) => {
  {
    console.log(users);
  }
  return (
    <>
      <div className='t-displayfollow'>
        <span>
          <Managenetwork />
        </span>
        <span>
          <div className='t-linkedincontai'>
            <Manage
              btnAccept={btnAccept}
              btnremove={btnremove}
              friendadd={friendadd}
            />
          </div>
          <div className='t-linkedincontai'>
            <List
              className='t-listcontainer'
              sx={{ width: "100%", maxWidth: 783, bgcolor: "background.paper" }}
              component='nav'
              aria-labelledby='nested-list-subheader'
              subheader={
                <ListSubheader
                  component='div'
                  id='nested-list-subheader'
                  className='t-managetop'
                >
                  <h2 className='t-managemynetwork'>
                    People in IT Services and IT Consulting industry are
                    following
                  </h2>
                  <div className='t-right-seeall'>
                    <p>See all</p>
                  </div>
                </ListSubheader>
              }
            >
              <div className='t-friendscanconnect'>
                {users.map((user) => (
                  <People
                    key={user.id}
                    user={user}
                    btnAdding={btnAdding}
                    friendadd={friendadd}
                  />
                ))}
              </div>
            </List>
          </div>
        </span>
      </div>
    </>
  );
};

export default Network;
