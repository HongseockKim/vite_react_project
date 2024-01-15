import {observer} from "mobx-react";
import {counterMobx} from "../mobx/CounterMobx.js";
import {Grid, Typography} from "@mui/material";

const Main = observer(()=>{
    const handleClik = () => {
        counterMobx.increment();
    }
    return(
        <Grid container direction='space-around' direction="row"
              justifyContent="space-around"
              alignItems="center">
            <Grid item xs={2}>
                <button type='button' onClick={handleClik} >upup</button >
            </Grid >
            <Grid item xs={8}><Typography variant='g5'>{counterMobx.value}</Typography></Grid >
        </Grid >
    )
})

export default Main