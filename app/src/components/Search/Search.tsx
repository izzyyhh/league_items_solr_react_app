import { InputAdornment } from "@material-ui/core";
import React, { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import { Label, SearchWrapper, TextField } from "./Search.sc";
import SearchIcon from "@material-ui/icons/Search";

const Search: FunctionComponent = () => {
    const [search, setSearch] = useState("");
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log("Submit", search);
    }
    return(
        <SearchWrapper onSubmit={handleSubmit}>
            <Label>Search</Label>
            <TextField onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)} variant="outlined" InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>)}} />
        </SearchWrapper>
    );
};

export default Search;