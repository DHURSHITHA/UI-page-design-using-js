// import React, { useState } from 'react';
// import { AppBar, Box, Toolbar, Button, Container, IconButton, Menu, MenuItem, Select } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { NavLink } from 'react-router-dom';
// import ForestIcon from '@mui/icons-material/Forest';

// const pages = [
//   { name: 'Products', path: '/products' },
//   { name: 'Why Us', path: '/why-us' },
//   { name: 'About Us', path: '/about-us' },
//   { name: 'Cases', path: '/cases' },
//   { name: 'Blog', path: '/blog' },  // ✅ Blog added here
// ];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [language, setLanguage] = useState('English'); // Default language

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar position="fixed" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', borderBottom: '1px solid #ddd' }}>
//       <Container maxWidth="xl">
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          
//           {/* Left Side: Logo and Navigation */}
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
//             {/* Logo */}
//             <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'Roboto, sans-serif' }}>
//               <ForestIcon sx={{ fontSize: '2rem', marginRight: 1 }} />
//               Monotree
//             </Box>

//             {/* Desktop Navigation */}
//             <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
//               {pages.map((page) => (
//                 <Button
//                   key={page.name}
//                   component={NavLink}
//                   to={page.path}
//                   sx={{
//                     color: 'black',
//                     fontWeight: 500,
//                     textTransform: 'none',
//                     fontFamily: 'Roboto, sans-serif',
//                     '&.active': { borderBottom: '2px solid black' },
//                   }}
//                 >
//                   {page.name}
//                 </Button>
//               ))}
//             </Box>
//           </Box>

//           {/* Right Side: Book a Demo & Language Selector */}
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//             {/* "Book a Demo" Button */}
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: '#f0f0f0',
//                 color: 'black',
//                 textTransform: 'none',
//                 fontWeight: 500,
//                 '&:hover': { backgroundColor: '#333' },
//               }}
//             >
//               Book a demo
//             </Button>

//             {/* Language Selector */}
//             <Select
//               value={language}
//               onChange={(event) => setLanguage(event.target.value)}
//               sx={{
//                 backgroundColor: 'white',
//                 color: 'black',
//                 fontWeight: 500,
//                 textTransform: 'none',
//                 border: '1px solid #ddd',
//                 height: '36px',
//                 '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
//               }}
//             >
//               <MenuItem value="English">English</MenuItem>
//               <MenuItem value="Spanish">Español</MenuItem>
//               <MenuItem value="French">Français</MenuItem>
//             </Select>
//           </Box>

//           {/* Mobile Menu (Hamburger) - Positioned on the Right */}
//           <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
//             <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               anchorEl={anchorElNav}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//               transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page.name} onClick={handleCloseNavMenu} component={NavLink} to={page.path}>
//                   {page.name}
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default ResponsiveAppBar;
import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Button, Container, IconButton, Menu, MenuItem, Select } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import ForestIcon from '@mui/icons-material/Forest';

const pages = [
  { name: 'Products', path: '/products' },
  { name: 'Why Us', path: '/why-us' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Cases', path: '/cases' },
  { name: 'Blog', path: '/blog' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [language, setLanguage] = useState('English'); // Default language

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', borderBottom: '1px solid #ddd' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

          {/* Left Side: Logo and Navigation */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'Roboto, sans-serif' }}>
              <ForestIcon sx={{ fontSize: '2rem', marginRight: 1 }} />
              Monotree
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={NavLink}
                  to={page.path}
                  sx={{
                    color: 'black',
                    fontWeight: 500,
                    textTransform: 'none',
                    fontFamily: 'Roboto, sans-serif',
                    '&.active': { borderBottom: '2px solid black' },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Right Side: Book a Demo & Language Selector */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* "Book a Demo" Button - Hidden on 320px */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#f0f0f0',
                color: 'black',
                textTransform: 'none',
                fontWeight: 500,
                '&:hover': { backgroundColor: '#333' },
                display: { xs: 'none', sm: 'block' }, // Hide only when width is 320px
                '@media (max-width: 320px)': {
                  display: 'none', // Hide button on 320px width
                },
              }}
            >
              Book a demo
            </Button>

            {/* Language Selector */}
            <Select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              sx={{
                backgroundColor: 'white',
                color: 'black',
                fontWeight: 500,
                textTransform: 'none',
                border: '1px solid #ddd',
                height: '36px',
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
              }}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Spanish">Español</MenuItem>
              <MenuItem value="French">Français</MenuItem>
            </Select>
          </Box>

          {/* Mobile Menu (Hamburger) */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu} component={NavLink} to={page.path}>
                  {page.name}
                </MenuItem>
              ))}

              {/* Book a Demo - Only Visible at 320px */}
              <MenuItem
                sx={{
                  display: 'none', // Default: Hidden
                  '@media (max-width: 320px)': {
                    display: 'block', // Show only when screen width is 320px
                  },
                }}
                onClick={handleCloseNavMenu}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#f0f0f0',
                    color: 'black',
                    textTransform: 'none',
                    fontWeight: 500,
                    width: '100%', // Full width inside menu
                    '&:hover': { backgroundColor: '#333' },
                  }}
                >
                  Book a demo
                </Button>
              </MenuItem>
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
