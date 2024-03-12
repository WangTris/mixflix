// import React, { useEffect } from "react";
// import {
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   ListSubheader,
//   ListItemIcon,
//   Box,
//   CircularProgress,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useTheme } from "@mui/material/styles";

// // logos
// import lightLogo from "../../assets/logo/light.png";
// import darkLogo from "../../assets/logo/dark.png";

// const categories = [
//   { label: "Popular", value: "popular" },
//   { label: "Top Rated", value: "top_rated" },
//   { label: "Upcoming", value: "upcoming" },
// ];

// const Sidebar = ({ setMobileOpen }) => {
//   const theme = useTheme();

//   return (
//     <>
//       <Link
//         to="/"
//         style={{ display: "flex", justifyContent: "center", padding: "10% 0" }}
//       >
//         <img
//           src={theme.palette.mode === "light" ? lightLogo : darkLogo}
//           alt="MixFlix Logo"
//           style={{ width: "70%" }}
//         />
//       </Link>
//       <Divider />
//       <List>
//         <ListSubheader>Categories</ListSubheader>
//         {categories.map(({ label, value }) => (
//           <Link
//             key={value}
//             to="/"
//             style={{
//               color: "theme.palette.text.primary",
//               textDecoration: "none",
//             }}
//           >
//             <ListItem
//               onClick={() => dispatch(selectGenreOrCategory(value))}
//               button
//             >
//               <ListItemIcon>
//                 <img
//                   src={genreIcons[label.toLowerCase()]}
//                   height={30}
//                   style={{
//                     filter:
//                       theme.palette.mode === "dark" ? "dark" : "invert(1)",
//                   }}
//                   alt="Genre logo"
//                 />
//               </ListItemIcon>
//               <ListItemText primary={label} />
//             </ListItem>
//           </Link>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         <ListSubheader>Genres</ListSubheader>
//         {categories.map(({ label, value }) => (
//           <Link
//             key={value}
//             to="/"
//             style={{
//               color: "theme.palette.text.primary",
//               textDecoration: "none",
//             }}
//           >
//             <ListItem
//               onClick={() => dispatch(selectGenreOrCategory(value))}
//               button
//             >
//               <ListItemIcon>
//                 <img
//                   src={genreIcons[label.toLowerCase()]}
//                   height={30}
//                   style={{
//                     filter:
//                       theme.palette.mode === "dark" ? "dark" : "invert(1)",
//                   }}
//                   alt="Genre logo"
//                 />
//               </ListItemIcon>
//               <ListItemText primary={label} />
//             </ListItem>
//           </Link>
//         ))}
//       </List>
//     </>
//   );
// };

// export default Sidebar;
