import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import '../App.css';

export default function Editcar(props) {
   const [open, setOpen] = React.useState(false);
   const [car, setCar] = React.useState({
      brand: '', model: '', color: '', fuel: '', year: '', price: ''
   });

   const handleClickOpen = () => {
      setCar({
         brand: props.car.brand,
         model: props.car.model,
         color: props.car.color,
         fuel: props.car.fuel,
         year: props.car.year,
         price: props.car.price
      })
      setOpen(true);
      console.log(props.car);
      console.log(props.link);
    
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleInputChange = (event) => {
      setCar({...car, [event.target.name]: event.target.value })
   }

   const updateCar = () => {
      console.log(car);
      props.editCar(props.link, car);
      handleClose();
   }

   return(
      <div>
         <Button style={{margin: '10px'}} variant="outlined" onClick={handleClickOpen}>
            Edit 
         </Button>
         <Dialog open={open} onClose={handleClose} style={{width:'15%', margin:'auto'}}>
            <DialogTitle>Edit Selected Car</DialogTitle>
            <DialogContent>
               <TextField
                  name="brand"
                  value={car.brand}
                  onChange={e => handleInputChange(e)}
                  label="Brand"
                  variant="standard"
                  />
               <TextField
                  name="model"
                  value={car.model}
                  onChange={e => handleInputChange(e)}
                  label="Model"
                  variant="standard"
                  />
               <TextField
                  name="color"
                  value={car.color}
                  onChange={e => handleInputChange(e)}
                  label="Color"
                  variant="standard"
                  />  
               <TextField
                  name="fuel"
                  value={car.fuel}
                  onChange={e => handleInputChange(e)}
                  label="Fuel"
                  variant="standard"
                  />
               <TextField
                  name="year"
                  value={car.year}
                  onChange={e => handleInputChange(e)}
                  label="Year"
                  variant="standard"
                  />
               <TextField
                  name="price"
                  value={car.price}
                  onChange={e => handleInputChange(e)}
                  label="Price"
                  variant="standard"
                  />
            </DialogContent>
            <DialogActions style={{ margin:'auto'}}>
               <Button onClick={handleClose} style={{color:'red'}}>Cancel</Button>
               <Button onClick={updateCar}>Save</Button>
            </DialogActions>
         </Dialog>
      </div>
   );





}