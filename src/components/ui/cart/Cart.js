import React,{ useState } from "react";
import { makeStyles,withStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";


import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) =>({
 
    
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
    
    langContainer:{
        width:"auto"
    },
    
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
    grouped: {
      margin: theme.spacing(0.5),
      border: 'none',
      '&:not(:first-child)': {
        borderRadius: "50%",
      },
      '&:first-child': {
        borderRadius: "50%",
      },
    },
  }))(ToggleButtonGroup);

function Cart() {

const [alignment, setAlignment] = React.useState('left');

const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

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
            <Grid container direction="row" className={classes.langContainer}>
            
            <StyledToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton
             value="left" 
             aria-label="left aligned"
             className ={classes.ruButton}
            >
            RU
            </ToggleButton>
           
            <ToggleButton
             
             value="center" 
             aria-label="centered"
             className ={classes.roButton}
            
            >
            RO
            </ToggleButton>
            
            </StyledToggleButtonGroup>
        </Grid>


        </Grid>
    </Grid>
  );
}

export default Cart;
