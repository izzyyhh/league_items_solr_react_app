import { InputAdornment } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { Label, SearchWrapper, TextField } from "./Search.sc";
import SearchIcon from "@material-ui/icons/Search";

const Search: FunctionComponent = () => {
    return(
        <SearchWrapper>
            <Label>Search</Label>
            <TextField variant="outlined" InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>)}} />
        </SearchWrapper>
    );
};

export default Search;