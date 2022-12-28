import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Footer from "./Footer";
function Notifications() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={1.5}></Grid>
        <Grid xs={2}>
          <div className='block-community-panel'>
            <div>Manage your Notifications</div>
            <div>View Settings</div>
          </div>
        </Grid>
        <Grid xs={4}></Grid>
        <Grid xs={2.5}>
        <Footer/>
        </Grid>
        <Grid xs={2}>  
        </Grid>
      </Grid>
    </>
  );
}

export default Notifications;
