import React, { FC, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import DialogActions from '@mui/material/DialogActions';

import FormControlLabel from '@mui/material/FormControlLabel';
import { pink } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // اضافه کردن CssBaseline

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const App: FC<{ name: string }> = ({ name }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [age, setAge] = useState(10); // مقدار اولیه برای Select

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (key) => ({
    checked: selectedValue === key,
    onChange: handleChange,
    value: key,
    name: 'radio-button-demo',
    inputProps: { 'aria-label': key },
  });

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <h1>Hello {name}!</h1>
        <p>Start editing to see some magic happen :)</p>
        <Button color="secondary" onClick={handleDialogOpen}>
          Open Dialog
        </Button>
        <br />
        <br />
        <Button variant="contained" color="success">
          Success
        </Button>
        <br />
        <br />
        <Button variant="outlined" color="error">
          Error
        </Button>

        {/* از متغیر label به عنوان متن چک باکس‌ها استفاده نکنید */}
        <Checkbox defaultChecked />
        <Checkbox defaultChecked color="secondary" />
        <Checkbox defaultChecked color="success" />
        <Checkbox defaultChecked color="default" />
        <Checkbox
          defaultChecked
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />

        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>

        <Radio {...controlProps('a')} />
        <Radio {...controlProps('b')} color="secondary" />
        <Radio {...controlProps('c')} color="success" />
        <Radio {...controlProps('d')} color="default" />
        <Radio
          {...controlProps('e')}
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />

      
<Dialog
  open={openDialog}
  onClose={handleDialogClose}
  fullWidth // دیالوگ را به عرض کامل نمایش دهید
  maxWidth="md" // محدود کنید maxWidth به عرض برای تعیین حداکثر عرض دیالوگ
>
  <DialogTitle>Select an Age</DialogTitle>
  <DialogContent>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleAgeChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleDialogClose} color="secondary">
      Cancel
    </Button>
    <Button onClick={handleDialogClose} color="primary">
      OK
    </Button>
  </DialogActions>
</Dialog>
      </div>
    </ThemeProvider>
  );
};
