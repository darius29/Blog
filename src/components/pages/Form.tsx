import React, {useState} from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, TextField } from "@material-ui/core";
import {useForm, Form} from "./useForm";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        diplay: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
        

      },
    },
}));
const initialFormValues = {
    id: 0,
    title: '',
    date: '',
    imgUrl: '',
    content: '',
    details: '',
    
}



export default function Forms(){
    const classes = useStyles();
    
   
    const {
        values,
        setValues,
        handleInputChange
    }= useForm(initialFormValues);

    

    return (
       
        <Form className={classes.root}>

            
            <Grid container>
                <Grid item xs={6}>
                <TextField
                    id="standard-select-currency"
                    variant="outlined"
                    name="title"
                    label=" Title"
                    value={values.title}
                    onChange={handleInputChange}
                /> 

                <TextField
                id="standard-select-currency"
                variant="outlined"
                name="date"
                label=" Date"
                value={values.date}
                onChange={handleInputChange}
                /> 

                <TextField
                id="standard-select-currency"
                variant="outlined"
                name="imgUrl"
                label=" ImgUrl"
                value={values.imgUrl}
                onChange={handleInputChange}
                /> 

                <TextField
                id="standard-select-currency"
                variant="outlined"
                name="content"
                label=" Content"
                value={values.content}
                onChange={handleInputChange}
                /> 

                <TextField
                id="standard-select-currency"
                variant="outlined"
                name="details"
                label=" Details"
                value={values.details}
                onChange={handleInputChange}
                />

                
                
                
                </Grid>
                <Grid item>

                </Grid>
            </Grid>
        </Form>
        
    )

}

