import React  from "react";
import Navbar from "../components/navbar";
import Dashboard from "../components/dashboard";
import { Box } from "@mui/system";
import {Grid, styled, Stack, Table, TableBody, TableContainer, TableHead, TableRow, Paper, Button} from "@mui/material";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';


export default function Report(orderHistory, setOrderHistory){
    console.log(orderHistory)
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
    //  border: "2px black",
    },
}));


    return(
        <>  
            <Navbar/>
            <Box height={30}/>
            <Box sx={{ display: 'flex'  }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    {console.log(orderHistory)}

    <Box height={530} overflow="auto">
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">ID</StyledTableCell>
                        <StyledTableCell align="center">PRODUCT</StyledTableCell>
                        <StyledTableCell align="center">PRICE</StyledTableCell>
                        <StyledTableCell align="center">STOCKS</StyledTableCell>
                        <StyledTableCell align="center">ACTION</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.isArray(orderHistory) &&
                        orderHistory.map((order, index) => (
                            <React.Fragment key={index}>
                                <StyledTableRow>
                                    <StyledTableCell align="center">{order.id}</StyledTableCell>
                                    <StyledTableCell align="center">{/* Render order-level data */}</StyledTableCell>
                                    <StyledTableCell align="center">{/* Render order-level data */}</StyledTableCell>
                                    <StyledTableCell align="center">{/* Render order-level data */}</StyledTableCell>
                                    <StyledTableCell align="center">{/* Render order-level actions */}</StyledTableCell>
                                </StyledTableRow>

                                {Array.isArray(order.items) &&
                                    order.items.map((item, itemIndex) => (
                                        <StyledTableRow key={itemIndex}>
                                            <StyledTableCell align="center">{item.id}</StyledTableCell>
                                            <StyledTableCell align="center">{item.product}</StyledTableCell>
                                            <StyledTableCell align="center">₱ {item.price}.00</StyledTableCell>
                                            <StyledTableCell align="center">{item.stocks}</StyledTableCell>
                                            <StyledTableCell align="center">
                                                <Stack direction="row" spacing={1} style={{ width: "85%", alignItems: "center", height: 49, marginRight: "-180px" }}>
                                                    <Button variant="contained" size="small" color="success" sx={{ p: 1, width: "50%" }} type="submit">
                                                        Edit
                                                    </Button>
                                                    <Button variant="contained" size="small" color="error" sx={{ p: 1, width: "50%" }} type="submit">
                                                        Delete
                                                    </Button>
                                                </Stack>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                            </React.Fragment>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
</Box>;

            </Box>
           
          
           
           
        </>
    );
}