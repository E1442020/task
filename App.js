import TextField from '@mui/material/TextField';
import './App.css';

function App() {
  return (
    <>
    <h2>Change the border color of an outlined text field component to <span> #1d72e7 </span> color</h2>
    <div className='text-field'>
     <TextField id="outlined-basic" label="Outlined" variant="outlined" className='text' />
     </div>
    </>
  );
}

export default App;
