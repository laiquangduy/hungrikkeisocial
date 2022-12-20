import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Unstable_Grid2";

function Feed() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `http://127.0.0.1:8000/api/v1/users/${Cookies.get("userID")}`
      );
      const json = await data.json();

      setUserData(json);
    };
    fetchData();
  }, []);
  if (userData.length === 0) {
    return null;
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={1.5}></Grid>

        <Grid xs={2}>
          <div className='block'>
            <div className='background-ava'>
              <img
                src='https://htmlcolorcodes.com/assets/images/colors/mint-green-color-solid-background-1920x1080.png'
                className='background-image'
                alt=''
              />
              <img src={userData[0].avatar} className='feed-ava' alt='' />
            </div>

            <div className='feed-name'>{userData[0].fullName}</div>
            <p className='feed-bio'>{userData[0].jobs}</p>
            <div className='feed-title'>Connection</div>
            <div className='feed-title'>My items</div>
          </div>
          <div className='block-community-panel'>
            <div className='community-panel'>Groups</div>
            <div className='community-panel'>Events</div>
            <div className='community-panel'>Followed Hashtags</div>
          </div>
        </Grid>
        <Grid xs={4}>
          <div className='block'>
            This is postdfs fsdasfa a dhasdkasjd kasjk djasdlkdjaskljd klasjlkd
            jaskljdlaskjd lasjdl asjlkd jsaljdlkasjd klasjdl jaskldj aslkdj
            lksajd lkasjd lsjald jaslkd jaslkjd lskjdkl asjlkd jaslkjd lkasjd
            ksajd klasjd lkasjdkl sajdlk asjld jasl
          </div>
          <div className='block'>
            This is postdfs fsdasfa a dhasdkasjd kasjk djasdlkdjaskljd klasjlkd
            jaskljdlaskjd lasjdl asjlkd jsaljdlkasjd klasjdl jaskldj aslkdj
            lksajd lkasjd lsjald jaslkd jaslkjd lskjdkl asjlkd jaslkjd lkasjd
            ksajd klasjd lkasjdkl sajdlk asjld jasl
          </div>
          <div className='block'>
            This is postdfs fsdasfa a dhasdkasjd kasjk djasdlkdjaskljd klasjlkd
            jaskljdlaskjd lasjdl asjlkd jsaljdlkasjd klasjdl jaskldj aslkdj
            lksajd lkasjd lsjald jaslkd jaslkjd lskjdkl asjlkd jaslkjd lkasjd
            ksajd klasjd lkasjdkl sajdlk asjld jasl
          </div>
          <div className='block'>
            This is postdfs fsdasfa a dhasdkasjd kasjk djasdlkdjaskljd klasjlkd
            jaskljdlaskjd lasjdl asjlkd jsaljdlkasjd klasjdl jaskldj aslkdj
            lksajd lkasjd lsjald jaslkd jaslkjd lskjdkl asjlkd jaslkjd lkasjd
            ksajd klasjd lkasjdkl sajdlk asjld jasl
          </div><div className='block'>
            This is postdfs fsdasfa a dhasdkasjd kasjk djasdlkdjaskljd klasjlkd
            jaskljdlaskjd lasjdl asjlkd jsaljdlkasjd klasjdl jaskldj aslkdj
            lksajd lkasjd lsjald jaslkd jaslkjd lskjdkl asjlkd jaslkjd lkasjd
            ksajd klasjd lkasjdkl sajdlk asjld jasl
          </div><div className='block'>
            This is postdfs fsdasfa a dhasdkasjd kasjk djasdlkdjaskljd klasjlkd
            jaskljdlaskjd lasjdl asjlkd jsaljdlkasjd klasjdl jaskldj aslkdj
            lksajd lkasjd lsjald jaslkd jaslkjd lskjdkl asjlkd jaslkjd lkasjd
            ksajd klasjd lkasjdkl sajdlk asjld jasl
          </div><div className='block'>
            This is postdfs fsdasfa a dhasdkasjd kasjk djasdlkdjaskljd klasjlkd
            jaskljdlaskjd lasjdl asjlkd jsaljdlkasjd klasjdl jaskldj aslkdj
            lksajd lkasjd lsjald jaslkd jaslkjd lskjdkl asjlkd jaslkjd lkasjd
            ksajd klasjd lkasjdkl sajdlk asjld jasl
          </div>
          <div className='block'>
            This is postdfs fsdasfa a dhasdkasjd kasjk djasdlkdjaskljd klasjlkd
            jaskljdlaskjd lasjdl asjlkd jsaljdlkasjd klasjdl jaskldj aslkdj
            lksajd lkasjd lsjald jaslkd jaslkjd lskjdkl asjlkd jaslkjd lkasjd
            ksajd klasjd lkasjdkl sajdlk asjld jasl
          </div><div className='block'>
            This is postdfs fsdasfa a dhasdkasjd kasjk djasdlkdjaskljd klasjlkd
            jaskljdlaskjd lasjdl asjlkd jsaljdlkasjd klasjdl jaskldj aslkdj
            lksajd lkasjd lsjald jaslkd jaslkjd lskjdkl asjlkd jaslkjd lkasjd
            ksajd klasjd lkasjdkl sajdlk asjld jasl
          </div><div className='block'>
            This is postdfs fsdasfa a dhasdkasjd kasjk djasdlkdjaskljd klasjlkd
            jaskljdlaskjd lasjdl asjlkd jsaljdlkasjd klasjdl jaskldj aslkdj
            lksajd lkasjd lsjald jaslkd jaslkjd lskjdkl asjlkd jaslkjd lkasjd
            ksajd klasjd lkasjdkl sajdlk asjld jasl
          </div><div className='block'>
            This is postdfs fsdasfa a dhasdkasjd kasjk djasdlkdjaskljd klasjlkd
            jaskljdlaskjd lasjdl asjlkd jsaljdlkasjd klasjdl jaskldj aslkdj
            lksajd lkasjd lsjald jaslkd jaslkjd lskjdkl asjlkd jaslkjd lkasjd
            ksajd klasjd lkasjdkl sajdlk asjld jasl
          </div><div className='block'>
            This is postdfs fsdasfa a dhasdkasjd kasjk djasdlkdjaskljd klasjlkd
            jaskljdlaskjd lasjdl asjlkd jsaljdlkasjd klasjdl jaskldj aslkdj
            lksajd lkasjd lsjald jaslkd jaslkjd lskjdkl asjlkd jaslkjd lkasjd
            ksajd klasjd lkasjdkl sajdlk asjld jasl
          </div>
          
        </Grid>

        <Grid xs={2.5} className='feed-right-block'>
          <div className='block'>Add to your feed</div>
          <div></div>

          <ul className='footer'>
            <img
              src='https://htmlcolorcodes.com/assets/images/colors/baby-blue-color-solid-background-1920x1080.png'
              className='banner-ad'
              alt=''
            />
            <li>
              <span>About</span>
            </li>

            <li>
              <span>Accessibility</span>
            </li>
            <li>
              <span>Help Center</span>
            </li>
            <li>
              <span>Privacy & Terms</span>
            </li>
            <li>
              <span>Ad Choices </span>
            </li>
            <li>
              <span>Advertising</span>
            </li>
            <li>
              <span>Business Services</span>
            </li>
            <li>
              <span>Get the LinkedIn app</span>
            </li>
            <li>
              <span>More</span>
            </li>
          </ul>
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
    </>
  );
}

export default Feed;
