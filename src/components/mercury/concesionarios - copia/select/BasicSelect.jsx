import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import s from "./BasicSelect.module.css"

export default function BasicSelect({provincia, setProvincia}) {

  return (
    <Box  sx={{ minWidth: 120 }} className={s.fontsize}>
      <FormControl fullWidth >
        <div className={s.labelMobile}>
          <InputLabel style = { {fontSize: "10px"}} className={s.fontsizeLabel} id="demo-simple-select-label">Provincia</InputLabel>
        </div>
        <div className={s.labelWeb}>
          <InputLabel style = { {fontSize: "15px"}} className={s.fontsizeLabel} id="demo-simple-select-label">Provincia</InputLabel>
        </div>
       
        <Select
          style = { {fontSize: "inherit"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={provincia}
          label="Provincia"
          className={s.fontsize}
          onChange= {(e) => setProvincia(e.target.value)}
        >
          <MenuItem className={s.fontsize} style = { {fontSize: "inherit"}} value={"Canning"}>Buenos Aires, Canning</MenuItem>
          <MenuItem className={s.fontsize} style = { {fontSize: "inherit"}} value={"Mendoza"}>Mendoza</MenuItem>
          <MenuItem className={s.fontsize} style = { {fontSize: "inherit"}} value={"Vicente Lopez"}>Buenos Aires, Vicente López</MenuItem>
          <MenuItem className={s.fontsize} style = { {fontSize: "inherit"}} value={"Otra"}>Otra</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
