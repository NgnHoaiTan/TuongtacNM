import React, { useState } from 'react'
import { TabList, TabContext, TabPanel } from '@mui/lab'
import { Tab, Box } from '@mui/material'

import ArticleListUser from '../ArticleListUser/ArticleListUser'
import VideoListUser from '../VideoListUser/VideoListUser'

const HomeUser = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', padding: '10px 0 0 40px' }}>
                    <TabList onChange={handleChange} aria-label="" textColor='secondary' indicatorColor="secondary">
                        <Tab label="Bài viết" value="1" sx={{fontWeight:600,fontSize:'16px'}}/>
                        <Tab label="Video" value="2" sx={{fontWeight:600,fontSize:'16px'}}/>
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <ArticleListUser />
                </TabPanel>
                <TabPanel value="2">
                    <VideoListUser />
                </TabPanel>
            </TabContext>
        </div>
    )
}

export default HomeUser