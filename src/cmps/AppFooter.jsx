import { Paper } from '@material-ui/core'
import React from 'react'

const AppFooter = () => {
    return (
        <footer>
            <Paper elevation={10}>
            <small>© arikxl {new Date().getFullYear()}</small>
            </Paper>
        </footer>
    )
}

export default AppFooter
