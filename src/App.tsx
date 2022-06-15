import * as React from 'react';
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import SplitButton from "./SplitButton";
import { features } from "./features";

export default function App() {
  const [feature, setFeature] = React.useState(features[0]);

  let navigate = useNavigate();

  const onSelectFeature = (index: number) => {
    setFeature(features[index]);
    navigate(features[index].path, {replace: true});
  };

  return (
    <>
      <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
            <SplitButton options={features} onSelect={onSelectFeature}/>
          </Toolbar>
        </AppBar>

      </Box>

      <Routes>
        {features.map(feature => (
          <Route key={feature.name} element={<feature.component/>} path={feature.path}/>
        ))}
      </Routes>
    </>
  );

}
