import React, { useState, useEffect, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-dark.css';
import Addcar from './AddCar';
import Editcar from './EditCar'
import Button from '@mui/material/Button';
import '../App.css';

export default function Carlist() {
   const [cars, setCars] = useState([]);
   const gridRef = useRef();

   useEffect(() => fetchData , []);
   
   const fetchData = () => {
      fetch('https://carstockrest.herokuapp.com/cars')
      .then(res => res.json())
      .then(data => setCars(data._embedded.cars))  
   }

   const columns = [
    {field: "brand", sortable: true, filter: 'agTextColumnFilter',floatingFilter: true,},
    {field: "model", sortable: true, filter: 'agTextColumnFilter', floatingFilter: true, },
    {field: "color", sortable: true, filter: 'agTextColumnFilter', floatingFilter: true, },
    {field: "fuel", sortable: true, filter: 'agTextColumnFilter', floatingFilter: true,},
    {field: "year", sortable: true, filter: 'agTextColumnFilter', floatingFilter: true, },
    {field: "price", sortable: true, filter: 'agNumberColumnFilter',floatingFilter: true, width:70},
      {headerName: '', field: '_links.self.href', width: 80, 
      cellRendererFramework: params =>
         <Editcar link={params.value} car={params.data} editCar={editCar}/>
      },
      {headerName: '', field: '_links.self.href', width: 100,
      cellRendererFramework: params =>
         <Button style={{marginLeft: "7px", marginBottom:"10px", color:"red"}} variant="outlined" onClick={() => deleteCar(params.value)}>
            Delete 
         </Button>
      }
      
   ]

   const deleteCar = (link) => {
     if(window.confirm('Are you sure?')) {
        fetch(link, {method: 'DELETE'})
        .then(response => fetchData())
        .catch(err => console.error(err))
     }   
   }


   const saveCar = (car) => {
      fetch('https://carstockrest.herokuapp.com/cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
      })
      .then(response => fetchData())
      .catch(err => console.error(err))
   }
   
   const editCar = (link, car) => {
      fetch(link, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
      })
      .then(res => fetchData())
      .catch(err => console.error(err))
   }
 
   

   return(
      <div className="ag-theme-material-dark">
      <Addcar saveCar={saveCar} style={{color:"green"}}/>
      <AgGridReact
        ref={gridRef}
        onGridReady={ params => gridRef.current = params.api }
        rowSelection='single'
        columnDefs={columns}
        rowData={cars}>
      </AgGridReact>
      </div>
   );
}