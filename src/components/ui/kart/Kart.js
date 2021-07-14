import React,{ useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";


import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
    mainContainer:{

    },
    phoneContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
        marginRight:"50px"
    },
    phone:{
        color: "#fff",
        fontWeight: "300",
        fontFamily: "Philosopher",
        fontSize: "30px",
        lineHeight: "27px",
       

        "&:hover": {
            backgroundColor: "transparent",
            color:"#8cca67",
            cursor: "pointer"
          }
    },
    iconContainer:{
        
        display:"flex",
        alignItems:"center"
    },
    searchButton:{
        ...theme.typography.iconButton,
        fontSize:"20px",
    },
    cartButton:{
        color:"#FFFF",     
        fontSize:"15px",
        "&:hover":{
           color:"#ffbb37",
           backgroundColor:"transparent",
        }
    },
    ruButton:{
        ...theme.typography.iconButton,
    },
    roButton:{
        ...theme.typography.iconButton,
    },
}));

function Kart() {

 const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container direction="column" className={classes.mainContainer}>
        <Grid item  className={classes.phoneContainer} >
            <Button  className={classes.phone}>
                060134345
            </Button>
        </Grid>
        <Grid container direction="row" className={classes.iconContainer}>

            <Grid item >
            <IconButton className ={classes.searchButton}>
               <SearchIcon /> 
            </IconButton>
            </Grid>
           
           
            <Grid item>
            <Button
             className ={classes.cartButton}
             startIcon={<ShoppingCartIcon />}
            >
            Корзина
            </Button>
            </Grid>
            
            <Grid item>
            <Button
             className ={classes.ruButton}
            >
            RU
            </Button>
            </Grid>
            <Grid item>
            <Button
             className ={classes.roButton}
            >
            RO
            </Button>
            </Grid>
        </Grid>
    </Grid>
  );
}

export default Kart;
