import React from 'react';
import Paper from '@material-ui/core/Paper';


const AppHeader = () => {
    return (
        <Paper elevation={3} square style={{ padding: "5px", display: "flex" }}>
            <img className="app-header-logo" src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/default-album/artboard-7.png?sfvrsn=dcf3d007_1" alt="" />
            <h1 className="header-headline">React App</h1>
        </Paper>
    )
}

export default AppHeader
