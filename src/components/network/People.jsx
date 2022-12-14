import React, { useState, useEffect } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import img1 from "../../img/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png";
import Avatar from "@mui/material/Avatar";

function People() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <div>
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
                People in IT Services and IT Consulting industry are following
              </h2>
              <div className='t-right-seeall'>
                <p>See all</p>
              </div>
            </ListSubheader>
          }
        >
          <div className='t-cardcontainer'>
            <Card sx={{ maxWidth: 244, marginTop: 2 }}>
              <CardActionArea>
                <div className='imgcontainer'>
                  <CardMedia component='img' image={img1} alt='green iguana' />
                </div>
                <CardContent>
                  <Avatar
                    style={{ width: 120, height: 120 }}
                    alt='Remy Sharp'
                    src={img1}
                  />
                  <Typography gutterBottom variant='h5' component='div'>
                    Lizard
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Follow
                </Button>
              </CardActions>
            </Card>{" "}
            <Card sx={{ maxWidth: 244, marginTop: 2 }}>
              <CardActionArea>
                <div className='imgcontainer'>
                  <CardMedia component='img' image={img1} alt='green iguana' />
                </div>
                <CardContent>
                  <Avatar
                    style={{ width: 120, height: 120 }}
                    alt='Remy Sharp'
                    src={img1}
                  />
                  <Typography gutterBottom variant='h5' component='div'>
                    Lizard
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Follow
                </Button>
              </CardActions>
            </Card>{" "}
            <Card sx={{ maxWidth: 244, marginTop: 2 }}>
              <CardActionArea>
                <div className='imgcontainer'>
                  <CardMedia component='img' image={img1} alt='green iguana' />
                </div>
                <CardContent>
                  <Avatar
                    style={{ width: 120, height: 120 }}
                    alt='Remy Sharp'
                    src={img1}
                  />
                  <Typography gutterBottom variant='h5' component='div'>
                    Lizard
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Follow
                </Button>
              </CardActions>
            </Card>{" "}
            <Card sx={{ maxWidth: 244, marginTop: 2 }}>
              <CardActionArea>
                <div className='imgcontainer'>
                  <CardMedia component='img' image={img1} alt='green iguana' />
                </div>
                <CardContent>
                  <Avatar
                    style={{ width: 120, height: 120 }}
                    alt='Remy Sharp'
                    src={img1}
                  />
                  <Typography gutterBottom variant='h5' component='div'>
                    Lizard
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Follow
                </Button>
              </CardActions>
            </Card>{" "}
            <Card sx={{ maxWidth: 244, marginTop: 2 }}>
              <CardActionArea>
                <div className='imgcontainer'>
                  <CardMedia component='img' image={img1} alt='green iguana' />
                </div>
                <CardContent>
                  <Avatar
                    style={{ width: 120, height: 120 }}
                    alt='Remy Sharp'
                    src={img1}
                  />
                  <Typography gutterBottom variant='h5' component='div'>
                    Lizard
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Follow
                </Button>
              </CardActions>
            </Card>{" "}
            <Card sx={{ maxWidth: 244, marginTop: 2 }}>
              <CardActionArea>
                <div className='imgcontainer'>
                  <CardMedia component='img' image={img1} alt='green iguana' />
                </div>
                <CardContent>
                  <Avatar
                    style={{ width: 120, height: 120 }}
                    alt='Remy Sharp'
                    src={img1}
                  />
                  <Typography gutterBottom variant='h5' component='div'>
                    Lizard
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Follow
                </Button>
              </CardActions>
            </Card>{" "}
            <Card sx={{ maxWidth: 244, marginTop: 2 }}>
              <CardActionArea>
                <div className='imgcontainer'>
                  <CardMedia component='img' image={img1} alt='green iguana' />
                </div>
                <CardContent>
                  <Avatar
                    style={{ width: 120, height: 120 }}
                    alt='Remy Sharp'
                    src={img1}
                  />
                  <Typography gutterBottom variant='h5' component='div'>
                    Lizard
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Follow
                </Button>
              </CardActions>
            </Card>{" "}
            <Card sx={{ maxWidth: 244, marginTop: 2 }}>
              <CardActionArea>
                <div className='imgcontainer'>
                  <CardMedia component='img' image={img1} alt='green iguana' />
                </div>
                <CardContent>
                  <Avatar
                    style={{ width: 120, height: 120 }}
                    alt='Remy Sharp'
                    src={img1}
                  />
                  <Typography gutterBottom variant='h5' component='div'>
                    Lizard
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Follow
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
        </List>
      </div>
    </>
  );
}

export default People;
