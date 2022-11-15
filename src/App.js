import { Toolbar,AppBar, Typography } from '@mui/material';
import './App.css';
import Carlist from './components/Carlist';

function App() {
  return (
    <div className="App">
      <AppBar position="static" sx={{ backgroundColor:"gray", height:"100px"}}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1,  backgroundColor:"gray", marginTop:"30px"}}>
            Car shop
          </Typography>
        </Toolbar>
      </AppBar>
    <Carlist/>
    </div>
  );
}
export default App;
