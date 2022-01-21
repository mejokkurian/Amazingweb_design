import * as React from 'react';
import TabHead from "../component/tab/TabHead"
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import './home.css'
import { useState } from "react";

function Home() {
    const [value, setValue] = React.useState(0);
    const [navOne, setnavOne] = useState(true);
    const [navTwo, setnavTwo] = useState(false);
    const [navThree, setnavThree] = useState(false);

    const changeone = ()=>{
        setnavOne(true)
        setnavTwo(false)
        setnavThree(false)
    }

    const changTwo = ()=>{
        setnavOne(false)
        setnavTwo(true)
        setnavThree(false) 
    }

    const changThree = ()=>{
        setnavOne(false)
        setnavTwo(false)
        setnavThree(true) 
    }
    return <div>
     


        <div className='flex justify-center '>
        {navOne&&<TabHead one = "home" two = "hom2"  three = "home3" />}
        {navThree && <TabHead one = "about" two = "about2"  three = "about3" />}
        {navTwo && <TabHead one = "menu" two = "menu1"  three = "menu2" /> }
        </div>
        <footer className="fixed inset-x-0 bottom-0 flex justify-center ">
            <Box sx={{ width: 500 }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction onClick={changeone}
                        
                     label="Nav1" />
                    <BottomNavigationAction onClick = {changTwo} label="Nav2" />
                    <BottomNavigationAction onClick = {changThree} label="Nav3" />
                </BottomNavigation>
            </Box>
        </footer>




    </div>;
}

export default Home;

