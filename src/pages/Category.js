import React, { useState }  from "react";
import Dashboard from "../components/dashboard";
import Navbar from "../components/navbar";
import { Box, Grid, TextField, Button, Stack, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, styled, tableCellClasses, Paper, Modal} from '@mui/material';
// import { width } from "@mui/system";
// import { Delete } from "@mui/icons-material";


 
export default function Category(){
    const [categ, setCateg] = useState([]);
    const [newcateg, setNewCateg] = useState({
        id: '',
        categories: '',
    });

    const handleCategory = (event) => {
        event.preventDefault();
        if (newcateg.categories === '') {
            alert("Enter Category Value!");
        } else {
            setCateg([...categ, newcateg]);
            setNewCateg({
                id: '',
                categories: '',
            });
            console.log(newcateg);
        }
    };

    const handleNewCateg = (event) => {
        const { value } = event.target;

        setNewCateg({
            ...newcateg,
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
    // const DeleteCategory = (value) =>{
    //     DelCateg(value);
    // }

    // const DeleteCategory = (categlistid) => {
    //     const updatedCategories = categ.filter((category) => category.value !== categlistid);
    //     setCateg(updatedCategories);
    // };

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
            <Box height={30}/>
            <Box sx={{ display: 'flex'  }}>
                <Dashboard/>
                <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop:"10px" }}>
                    <h1 style={{display: "flex", marginLeft:"-1px"}}>CATEGORY</h1>
                
                    <form
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '2px solid black',
                            padding: '20px',
                            width: "50%"
                        }}
                        onSubmit={handleCategory}
                       
                        >
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={7}>
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

                          
                            <Grid item xs={11} sm={5}>
                            <Stack direction="row" spacing={4} style={{width: "100%", alignItems: "center"}}>
                                <Button variant="contained" sx={{p: 2, width: "100%", background:"black" }} type="submit">SUBMIT</Button>
                            </Stack>
                            </Grid>
                        </Grid>
                    </form>

                    <Box height={50}/>
                    <Grid container />
                    
                    <TableContainer component={Paper} sx={{width: "50%"}}>
                        <Table sx={{ minWidth: 300}} aria-label="customized table">
                            <TableHead>
                            <TableRow>                            
                                <StyledTableCell align="center">categories</StyledTableCell>
                                <StyledTableCell align="center">Action</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {categ.map((categlist, value) => (
                                <StyledTableRow key={value}>
                                <StyledTableCell align="center">{categlist.categories}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Stack direction="row" spacing={1}  style={{display: "flex", justifyContent:"center", width: "100%", alignItems: "center", height: 49,}}>
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

                       {/* Modal for editing category */}
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