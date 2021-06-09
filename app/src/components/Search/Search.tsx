import { InputAdornment } from "@material-ui/core";
import { ItemsContext } from "../../hooks/useItems/useItems";
import React, { ChangeEvent, FormEvent, FunctionComponent, useState, useContext } from "react";
import { Label, SearchWrapper, TextField } from "./Search.sc";
import SearchIcon from "@material-ui/icons/Search";
import { SettingsSystemDaydreamTwoTone } from "@material-ui/icons";

const solrURL = "http://localhost:8983/solr/lol";
const NAME_FIELD = "name_t";
const PLAINTEXT_FIELD = "plaintext_txt_en";
const GOLD_FIELD = "gold_i";
const TAGS_FIELD = "tags";

interface Props {
    setData: (item: any) => void
}

const Search: FunctionComponent<Props> = ({ setData }) => {
    const {filter} = useContext(ItemsContext);
    const [search, setSearch] = useState("*:*");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if(search === "") setSearch("*:*"); 
        const data = itemSearch(search, getString(filter));

        data.then(res => {
            if(res.response.numFound === 0) {
                // do spellcheck, suggestion
                const suggestion = getSuggestion(search);
                suggestion.then(sug => {
                    if(sug) {
                        const newData = itemSearch(sug, getString(filter));
                        newData.then(newRes => {
                            if(newRes.response.numFound != 0) setData(newRes.response.docs);
                        })
                    }
                })

            }else {
                setData(res.response.docs);
            }
        })
    }
    return(
        <SearchWrapper onSubmit={handleSubmit}>
            <Label>Search</Label>
            <TextField onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)} variant="outlined" InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>)}} />
        </SearchWrapper>
    );
};

const itemSearch = (query: String, filter: String, start: Number = 0, rows: Number = 221) => {
    return postSolrRequest("select", {
        params: {
            fl: "*,score",
            fq: `${filter}`,
            start,
            rows
        },
        query: {
            edismax: {
                query,
                qf: `${NAME_FIELD}^10 ${PLAINTEXT_FIELD}^5`,
                mm: "60%"
            },
        },
    });
}

const getSuggestion = async (query: String) => {
    const response = await postSolrRequest("spell", {
        params: {
            wt: "json",
            q: query,
            spellcheck: "on",
        }
    });

    try {

        const suggestion = response.spellcheck.suggestions[1].suggestion[0].word;
        
        if(suggestion) return suggestion;
        return false;
    } catch {
    }
}

const postSolrRequest = async (url:String, body: Object) => {
    const jsonResponse = await fetch(`${solrURL}/${url}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
    });


    if (!jsonResponse.ok) {
        throw new Error(jsonResponse.statusText);
    }

    const response = await jsonResponse.json();
    const result = response;
    return result;
}

const getString = (words: Array<string>) => {
    let output = "";
    words.forEach((word, idx) => {
        word = word
            .replace(/\s/g, "")
            .replace("&", "");

        if (idx > 0) {
            output += ` AND tags:${word}`;
        } else {
            output += `tags:${word}`;
        }
    });
    return output;
};

export default Search;