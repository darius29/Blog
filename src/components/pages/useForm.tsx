import React, {useState} from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


export function useForm(intialFormValues : any){
    const [values, setValues] = useState(intialFormValues);

    const handleInputChange = (e: any,) => {
        const { name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
        console.log(name);
        console.log(e.target.value);
        console.log(values);
    }

    return {
        values,
        setValues,
        handleInputChange
    }

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        display: 'grid',
        flexDirection: 'column',
        justifyContent: 'center',
        
        
        

      },
    },
}));

export function Form(props: any) {
    const classes = useStyles();
    return (
        <form className={classes.root}>
            {props.children}
        </form>
        
    )
}
