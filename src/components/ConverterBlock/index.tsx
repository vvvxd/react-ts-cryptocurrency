import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';

type IConverterBlock = {
    classes: any;
}

function ConverterBlock({classes}: IConverterBlock) {
    return (
        <Paper className={classes.paper}>
            <div className={classes.cryptoInputBox}>
                <FormControl className={classes.currencyInput}>
                    <TextField label="Сумма"/>
                </FormControl>
                <FormControl className={classes.currencyType}>
                    <InputLabel id="demo-simple-select-autowidth-label">Валюта</InputLabel>
                    <Select value={0}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className={classes.cryptoInputBox}>
                <FormControl className={classes.currencyInput}>
                    <TextField label="Сумма"/>
                </FormControl>
                <FormControl className={classes.currencyType}>
                    <InputLabel id="demo-simple-select-autowidth-label">Валюта</InputLabel>
                    <Select value={0}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </Paper>
    );
}

export default ConverterBlock;
