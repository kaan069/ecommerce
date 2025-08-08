import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, Button, IconButton, Link, List, ListItem, Stack, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router";

const links = [
  { title: "Home", to: "/" },
  { title: "About", to: "/about" },
  { title: "Contact", to: "/contact" },
  { title: "Catalog", to: "/catalog" }

]

const activeStyle = {
  color: 'inherit',
  textDecoration: 'none',
  "&:hover": { color: 'secondary.main' },
  '&.active': { color: 'secondary.main' }
};

export default function Header() {

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6">E-Commerce</Typography>
          <Stack direction="row" sx={{ display: 'flex' }}>
            {links.map(link =>
              <Button component={NavLink} to={link.to} key={link.to} sx={activeStyle}>
                {link.title}
              </Button>
            )}
          </Stack>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'flex-end' }}>
          <IconButton size="large" edge="start" color="inherit">
            <Badge badgeContent="2" color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};