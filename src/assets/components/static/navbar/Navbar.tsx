import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import './Navbar.css';
import { Style } from "@material-ui/icons";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "Currículo", "Portfolio", "Sobre mim"];

export default function Navbar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
/* 
! essa const drawer é a função de vizualizar no celular em menu hamburguer, 
*/
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }} >
            <Typography variant="h6" sx={{ my: 2 }}>
                Menu
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;
/* AppBar é o header, nele foi colocado a classe navbar para mudar a cor padrão para amarelo*/
    return (
        <Box sx={{ display: "flex" }} justifyContent={"center"}>
            <CssBaseline /> 
            <AppBar component="nav" style={{backgroundColor: "var(--cor-terciaria)"}} > 
                <Toolbar> 
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h4"
                        component="div"
                        style={{color: "var(--cor-primaria)"}}
                        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }}}
                    >Samantha Alexandra
                    </Typography> 
                    <Box sx={{ display: { xs: "none", sm: "block" } }} >
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: "#FBFEED", fontSize:"1rem", fontWeight:"700", }} className="item" > 
                                {item}
                            </Button> /* Cor das letras no item no menu */
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}