import React, { useEffect }from 'react'

import {makeStyles} from "@material-ui/core/styles";

import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Grid
} from "@material-ui/core"
import styles from "./DashBoard.module.css";

import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import { selectData, fetchAsyncGetData } from "../covidSlice"
import SwitchPrefecture from "../SwitchPrefecture/SwitchPrefecture"
import Cards from "../Cards/Cards"
import Chart from "../Chart/Chart"

const useStyles = makeStyles((theme) =>({
    title: {
        flexGrow: 1,
    },
    content: {
        marginTop: 85,
    }
}))

const DashBoard: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const data = useSelector(selectData)
    const latestData = data[data.length -1]

    useEffect(()=>{
        dispatch(fetchAsyncGetData("Niigata"))
    }, [dispatch])
    return (
        <div>
            <AppBar position="absolute">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <div>
                            <Typography>
                                {new Date(`${latestData.year}/${latestData.month}/${latestData.date}`).toDateString()}
                            </Typography>
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container className={classes.content}>
                <div className={styles.container}>
                    <SwitchPrefecture />
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                        <Cards />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Chart />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default DashBoard
