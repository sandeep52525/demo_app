import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);

  //API call for table data
  const fetchData = async () => {
    await axios
      .get("http://universities.hipolabs.com/search?country=United+States")
      .then((data) => {
        setData(data.data.slice(0, 50));
        setLoaded(true);
      })
      .catch(() => {
        alert("Error");
        setLoaded(true);
      });
  };

  //fetching data on first render/reload
  useEffect(() => {
    fetchData();
  }, []);

  if (!loaded) return <Loader />;

  if (loaded)
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: 18, fontWeight: 600 }}>Code</TableCell>
              <TableCell sx={{ fontSize: 18, fontWeight: 600 }}>
                University Name
              </TableCell>
              <TableCell sx={{ fontSize: 18, fontWeight: 600 }}>
                Country
              </TableCell>
              <TableCell sx={{ fontSize: 18, fontWeight: 600 }}>
                Domain
              </TableCell>
              <TableCell sx={{ fontSize: 18, fontWeight: 600 }}>
                Webpage Link
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.alpha_two_code}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.country}</TableCell>
                <TableCell>
                  {row.domains.length > 0 ? row.domains : "-"}
                </TableCell>
                <TableCell>
                  {row.web_pages.length > 0 ? row.web_pages : "-"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default App;
