import React from "react";
import ReactDom from "react-dom";
// import AppBar from "@material-ui/core/AppBar";
// import ToolBar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/core/Menu";
// import Typography from "@material-ui/core/Typography";
import "./styles.css";
//import SearchBar from "./SearchBar";

// const Header = () => (ReactDom.render(
//     <header id="main-header">
//     <AppBar position="static">
//         <ToolBar>
//             <IconButton>
//                 <MenuIcon>aa</MenuIcon>
//             </IconButton>
//             <Typography variant="title" color="inherit">aa</Typography>
//         </ToolBar>
//     </AppBar>
//     </header>,
//     document.getElementById('root')
// ));

// export default Header;


const Header = () => (
    <header id="main-header">
        <div className="isoheader">
            <input></input>
            <h1>Isobar.fm</h1>
        </div>
        
    </header>
);

 export default Header;
