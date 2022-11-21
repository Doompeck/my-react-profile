import * as React from 'react';
// import XX from '@mui/material/XX';

function Navbar({ handlePageChange }) {
    const [value, setValue] = React.useState('about');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Navbar funcitonality goes here.
}
export default Navbar;