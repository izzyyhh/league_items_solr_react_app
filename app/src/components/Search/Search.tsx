import { InputAdornment } from "@material-ui/core";
import React, { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import { Label, SearchWrapper, TextField } from "./Search.sc";
import SearchIcon from "@material-ui/icons/Search";

const solrURL = "http://localhost:8983/solr/lol";
const NAME_FIELD = "name_t";
const PLAINTEXT_FIELD = "plaintext_txt_en";
const GOLD_FIELD = "gold_i";
const TAGS_FIELD = "tags";

const Search: FunctionComponent = () => {
    const [search, setSearch] = useState("");
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log("Submit", search);
        console.log("search result is:")
        itemSearch(search);
    }
    return(
        <SearchWrapper onSubmit={handleSubmit}>
            <Label>Search</Label>
            <TextField onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)} variant="outlined" InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>)}} />
        </SearchWrapper>
    );
};

const itemSearch = async (query: String, start: Number = 0, rows: Number = 10) => {
    console.log(query)
    return await postSolrRequest("select", {
        params: {
            fl: "*,score",
            /* TODO: Put further common query parameters (https://lucene.apache.org/solr/guide/common-query-parameters.html) here. */
        },
        query: {
            edismax: {
                query,
                qf: `${NAME_FIELD}^10 ${PLAINTEXT_FIELD}^5`
                /* TODO: Put further edismax query parameters (https://lucene.apache.org/solr/guide/8_5/the-extended-dismax-query-parser.html) here. */
            },
        },

    });
}

const postSolrRequest = async (url: String, body: Object) => {
    const jsonResponse = await fetch(`${solrURL}/${url}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
    });


    if (!jsonResponse.ok) {
        throw new Error(jsonResponse.statusText);
    }

    const response = await jsonResponse.json();
    console.log(response.response)
    return response.response;
}

export default Search;