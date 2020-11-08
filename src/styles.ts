import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(10),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    cryptoInputBox: {
        marginBottom: 30,
    },
    currencyInput: {
        minWidth: 'calc(70% - 10px)',
    },
    currencyType: {
        minWidth: '30%',
    },
    table: {
        minWidth: 650,
    },
    currencyIcon: {
        width: 18,
        height: 18,
        borderRadius: 30,
    },
}));

export default useStyles;