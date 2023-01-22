import * as React from 'react';
import './Tabs.css'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import GridOnIcon from '@mui/icons-material/GridOn';
import ViewListIcon from '@mui/icons-material/ViewList';
import Grid from '../Grid/Grid';
import List from '../List/List';
import Button from '../../Common/Button/Button';

export default function LabTabs({ coins, setSearch }) {
  const [value, setValue] = React.useState('Grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    color: "var(--white)",
    "& .Mui-selected": {
      color: "green !important",
    },
    fontFamily: "Inter,sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
  };

  return (
   
      <TabContext value={value}>
        <div sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} fullwidth>
            < Tab label="Grid" value="Grid" sx={style} />
            < Tab label="List" value="List" sx={style} /> 
          </TabList>
        </div>
        <TabPanel value="Grid">
        <div className="grid-flex">
          {coins.length > 0 ? (
            coins.map((coin, i) => (
              <Grid coin={coin} key={i} delay={(i % 4) * 0.2} />
            ))
          ) : (
            <div>
              <h1 style={{ textAlign: "center" }}>
                Sorry, Couldn't find the coin you're looking for 😞
              </h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "2rem",
                }}
              >
                <Button text="Clear Search" onClick={() => setSearch("")} />
              </div>
            </div>
          )}
        </div>
        </TabPanel>
        <TabPanel value="List"><table className="list-flex">
          {coins.length > 0 ? (
            coins.map((coin, i) => (
              <List coin={coin} key={i} delay={(i % 8) * 0.2} />
            ))
          ) : (
            <div>
              <h1 style={{ textAlign: "center" }}>
                Sorry, Couldn't find the coin you're looking for 😞
              </h1>
              <div
                style={{
                  display: "block",
                  justifyContent: "center",
                  margin: "2rem",
                  width:'90%'
                }}
              >
                <Button text="Clear Search" onClick={() => setSearch("")} />
              </div>
            </div>
          )}
        </table></TabPanel>
      </TabContext>

  );
}