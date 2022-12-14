import React, { useState, useEffect } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img1 from "../../img/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png";
import Avatar1 from "@mui/material/Avatar";

function Manage() {
  return (
    <>
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
            <h2 className='t-managemynetwork'>No pending invitations</h2>
            <div className='t-right'>
              <p>Manage</p>
            </div>
          </ListSubheader>
        }
      ></List>
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
            <h2 className='t-managemynetwork'>Invitations</h2>
            <div className='t-right'>
              <p>Manage</p>
            </div>
          </ListSubheader>
        }
      >
        <div className='t-fradd'>
          <div className='t-aboutfradd'>
            <div>
              <Avatar1
                style={{ marginTop: 0, width: "65px", height: "65px" }}
                alt='avt'
                src={img1}
              />
            </div>
            <div style={{ marginLeft: 10 }}>
              <b>Đức Thịnh</b>
              <p style={{ fontSize: 15, color: "#5A6066", marginTop: "4px" }}>
                Đại học đời
              </p>
              <p style={{ fontSize: 12, color: "#5A6066", marginTop: "4px" }}>
                Rikkei Soft
              </p>
            </div>
          </div>
          <div>
            <Button id='btn-ignore' size='big'>
              Ignore
            </Button>{" "}
            <Button id='btn-accept' size='big'>
              Accept
            </Button>
          </div>
        </div>
      </List>
    </>
  );
}

export default Manage;
