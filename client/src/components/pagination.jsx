import React from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";

import useStyles from "./styles";
import { Link } from "react-router-dom";

const Paginate = () => {
    const classes = useStyles();

    return (
        <Pagination 
         classes={{ ul: classes.ul }}
         count={5}
         page={1}
         variant="outlined"
         color="primary"
         renderItem={(item) => (
            <PaginationItem  component={Link}
            to={`/posts${item.page === 1 ? '' : `?page=${item.page}`}`}
            {...item}/>
         )}
         />
    );
};

export default Paginate;