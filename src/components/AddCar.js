import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function Addcar(props) {
   const [open, setOpen] = React.useState(false);
   const [car, setCar] = React.useState({
      brand: '', model: '', color: '', fuel: '', year: '', price: ''
   });

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleInputChange = (event) => {
      setCar({...car, [event.target.name]: event.target.value })
   }

   const addCar = () => {
      props.saveCar(car);
      handleClose();
   }

  
  
  
   return(
      <div>
         <Button style={{margin: '10px'}} variant="outlined" onClick={handleClickOpen}>
            Add Car
         </Button>
         <Dialog open={open} onClose={handleClose}  style={{width:'15%', margin:'auto'}}>
            <DialogTitle style={{textAlign:"center", fontWeight:"bold", color:"darkblue"}}>Add a New Car</DialogTitle>
            <a style={{textAlign:"center"}}>List below <br></br>all the qualities of the car</a>
            <DialogContent>
               <TextField
                  name="brand"
                  value={car.brand}
                  onChange={e => handleInputChange(e)}
                  label="Brand"
                  fullWidth
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
                  fullWidth
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
            <DialogActions style={{margin:'auto'}}>
               <Button onClick={handleClose} style={{color:'red'}}>Cancel</Button>
               <Button onClick={addCar}>Save</Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}