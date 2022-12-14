import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img1 from "../../img/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png";
import Avatar1 from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsInputAntennaIcon from "@mui/icons-material/SettingsInputAntenna";
import Divider from "@mui/material/Divider";

export default function Avatar() {
  const bull = (
    <Box
      component='span'
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant='h5' component='div'>
          Analytics
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <div className='t-iconeye'>
            <VisibilityIcon style={{ fontSize: 20 }} />{" "}
            <p style={{ fontSize: 15, marginLeft: 5 }}>Private to you</p>
          </div>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <div className='t-people'>
            <PeopleAltIcon style={{ fontSize: 25 }} />{" "}
            <div style={{ marginLeft: 5 }}>
              <b>3 Profile views</b>
              <p style={{ fontSize: 15, marginLeft: 5 }}>
                Discover who's viewed your profile
              </p>
            </div>
          </div>
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const card1 = (
    <React.Fragment>
      <CardContent>
        <Typography variant='h5' component='div'>
          Resources
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <div className='t-iconeye'>
            <VisibilityIcon style={{ fontSize: 20 }} />{" "}
            <p style={{ fontSize: 15, marginLeft: 5 }}>Private to you</p>
          </div>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <div className='t-people'>
            <PeopleAltIcon style={{ fontSize: 25 }} />{" "}
            <div style={{ marginLeft: 7 }}>
              <b>Creator mode</b>
              <p style={{ fontSize: 15 }}>
                Get discoverred, showcase content on your profile, and access to
                creator tools
              </p>
            </div>
          </div>{" "}
        </Typography>
        <Divider style={{ maxWidth: 800, fontSize: 20 }} />
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <div className='t-people' style={{ marginTop: 8 }}>
            <SettingsInputAntennaIcon style={{ fontSize: 25 }} />{" "}
            <div style={{ marginLeft: 7 }}>
              <b>My network</b>
              <p style={{ fontSize: 15 }}>
                See and anage your connections and interests
              </p>
            </div>
          </div>
        </Typography>
        <Divider style={{ maxWidth: 800, fontSize: 20 }} />
      </CardContent>
    </React.Fragment>
  );

  const card2 = (
    <React.Fragment>
      <CardContent>
        <Typography variant='h5' component='div'>
          Activity
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          <a className='t-linkfr' href='#'>
            5 followers
          </a>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          <div>
            <b>You haven't posted lately</b>
          </div>{" "}
          <div>
            <p style={{ fontSize: 15 }}>
              Recent posts you share or comment or will be displayed here
            </p>
          </div>
        </Typography>
        <Divider style={{ maxWidth: 800, fontSize: 20 }} />
      </CardContent>
      <CardActions className='t-btncreatepost'>
        <Button id='btn-addprf' size='big'>
          Start a post
        </Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <div style={{ marginTop: "8px" }}>
      <Card sx={{ maxWidth: 782 }}>
        <div style={{ maxWidth: 782, height: 197 }}>
          <CardMedia
            style={{ width: "100%", height: "100%" }}
            component='img'
            alt='green iguana'
            image={img1}
          />
        </div>{" "}
        <div className='t-avtandpen'>
          <Avatar1
            alt='Remy Sharp'
            src={img1}
            sx={{ width: 150, height: 150 }}
            style={{ marginTop: -100 }}
          />
          <div className='t-pen'>
            <i class='fa-solid fa-pen'></i>
          </div>
        </div>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            <h1 className='name'>Lizard</h1>
            <div className='companyjob'>Coder at Rikkei</div>
          </Typography>

          <Typography variant='body2' color='text.secondary'>
            Hanoi,Hanoi,VietNam -
            <a href='#' className='infocontainer'>
              &nbsp;Contact info
            </a>
          </Typography>
          <div>
            <a
              href='#'
              className='infocontainer'
              style={{ fontSize: "14px", fontWeight: 500 }}
            >
              5 connections
            </a>
          </div>
        </CardContent>
        <CardActions>
          <Button id='btn-open' size='small'>
            Open to
          </Button>
          <Button id='btn-addprf' size='small'>
            Add profile selection
          </Button>
          <Button id='btn-more' size='small'>
            More
          </Button>
        </CardActions>
      </Card>
      <Box sx={{ maxWidth: 784, marginTop: 1 }}>
        <Card>{card}</Card>
      </Box>
      <Box sx={{ maxWidth: 784, marginTop: 1 }}>
        <Card>{card1}</Card>
      </Box>
      <Box sx={{ maxWidth: 784, marginTop: 1 }}>
        <Card>{card2}</Card>
      </Box>
    </div>
  );
}
