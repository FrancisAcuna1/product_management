import React, { useState, useEffect }  from "react";
import Dashboard from "../components/dashboard";
import Navbar from "../components/navbar";
import { Box, Grid, TextField, Button, Stack, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, styled, tableCellClasses, Paper, Modal} from '@mui/material';
import { width } from "@mui/system";
// import { width } from "@mui/system";
// import { Delete } from "@mui/icons-material";


 
export default function Category({ setCateg, categ}){
    const [count, setCount] = useState (1)
    // const [categ, setCateg] = useState([]); // this array is nasa dashbaord na 
    const [newcateg, setNewCateg] = useState({
        id: '',
        categories: '',
    });

    const handleSubmitCateg = (event) => {
        event.preventDefault();
        if (newcateg.categories === '') {
            alert("Enter Category Value!");
        } else {
            const newcateglist = ({
                id: count,
                categories: newcateg.categories,
            });

            setCount(count+1)
            setCateg([...categ, newcateglist]);
            setNewCateg({
                id: '',
                categories: '',
            });
            console.log(newcateg);

            // sendarray([...categ, newcateglist])
           
        }
    };

    const handleNewCateg = (event) => {
        const {value} = event.target;

        setNewCateg({
            ...newcateg,
            id: count,
            categories: value,
        });
    };
    // Closing of adding category


    const DeleteCategory = (categlistid) => {
        const CategoryList = [...categ];
        CategoryList.splice(categlistid, 1);
        setNewCateg(CategoryList);
        setCateg(CategoryList);
    }

    // Update Code
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [editCategoryValue, setEditCategoryValue] = useState("");

    const handleEditCategory = (categlist) => {
        setSelectedCategory(categlist);
        setEditCategoryValue(categlist.categories);
    };

    const handleUpdateCategory = () => {
        const updatedCategories = categ.map((category) =>
        category === selectedCategory
            ? { ...category, categories: editCategoryValue }
            : category
        );

        setCateg(updatedCategories);
        handleCloseModal(); // Close the modal after updating
    };

    const handleCloseModal = () => {
        setSelectedCategory(null);
        setEditCategoryValue("");
    };
    // Closing Code



    // styled of table this code
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
          border: "2px black",
        },
    }));



    return(
        <>  
            <Navbar/>
            <Box sx={{ display: 'flex', justifyContent: "center", backgroundColor: 'white'}}>
                {/* <Dashboard/> */}
                <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop:"-20px" }}>
                    <form
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '2px solid black',
                            padding: '16px',
                            marginTop:'30px'
                           

                        }}
                        onSubmit={handleSubmitCateg}
                       
                        >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={1.3}>
                               <TextField
                                    required
                                    id="outlined-required"
                                    label="ID"
                                    name="id"
                                    value={count}
                                    onChange={handleNewCateg}
                                    variant="outlined"
                                    fullWidth
                                
                              
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Category"
                                    name="category"
                                    value={newcateg.categories}
                                    onChange={handleNewCateg}
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>

                          
                            <Grid item xs={12} sm={4.7}>
                            <Stack direction="row" spacing={1} style={{width: "90%", alignItems: "center"}}>
                                <Button variant="contained" sx={{p: 2, width: "100%", background:"black" }} type="submit">SUBMIT</Button>
                            </Stack>
                            </Grid>
                        </Grid>
                    </form>

                    <Box height={50}/>
                    <Grid container />
                    
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 300}} aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">ID</StyledTableCell>                            
                                <StyledTableCell align="center">Categories</StyledTableCell>
                                <StyledTableCell align="center">Action</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {categ.map((categlist, value) => (
                                <StyledTableRow key={value}>
                                <StyledTableCell align="center">{categlist.id}</StyledTableCell>
                                <StyledTableCell align="center">{categlist.categories}</StyledTableCell>
                                <StyledTableCell align="center">

                                    <Stack direction="row" spacing={1}  style={{display: "flex", justifyContent:"center", width: "100%", alignItems: "center", height: 35,}}>
                                        <Button variant="contained" size="small" color="success" sx={{p: 1, width: "10%", justifyContent:"center", alignItems:"center"}} type="submit" onClick={() => handleEditCategory(categlist)}>EDIT</Button>
                                        <Button variant="contained" size="small"  color="error" sx={{p: 1, width: "10%", justifyContent:"center", alignItems:"center"}} type="submit" onClick={() => DeleteCategory(value)}>DELETE</Button>
                                    </Stack>
                                </StyledTableCell>
                                
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Grid/>
                    <Modal
                        open={Boolean(selectedCategory)}
                        onClose={handleCloseModal}
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                    >
                        <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            background: "white",
                            padding: "20px",
                            outline: "none",
                        }}
                        >
                        <h2 id="modal-title">Edit Category</h2>
                        <TextField
                            label="Category"
                            variant="outlined"
                            fullWidth
                            value={editCategoryValue}
                            onChange={(e) => setEditCategoryValue(e.target.value)}
                        />
                        <Button variant="contained" color="primary" sx={{marginTop: 2}} onClick={handleUpdateCategory}>
                            Update
                        </Button>
                        </div>
                    </Modal>




                </Box>
               
            </Box>
           
          
           
           
        </>
    );
}