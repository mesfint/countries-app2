import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styles from './CountryPagination.module.css';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    '& .MuiPaginationItem-root': {
      color: "orangered",
      fontSize: "2.0rem",
      fontWeight: "bold",
      
     
    },
  },

});

const CountryPagination = ({ count, page, onChange }) => {
  const classes = useStyles();

  const numberOfPages = Math.ceil(count / 9);

  return (
    <div className={styles.pagination}>
    <Stack spacing={2}  >
      <Pagination count={numberOfPages} page={page} onChange={onChange}  className={classes.root} />
    </Stack>

    </div>
  );
};

export default CountryPagination;
