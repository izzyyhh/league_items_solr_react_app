import fetch from "node-fetch";
import fs from "fs";

export const NAME_FIELD = "name_t";
export const PLAINTEXT_FIELD = "plaintext_txt_en";
export const GOLD_FIELD = "gold_i";
export const TAGS_FIELD = "tags";

export default class Solr {
    constructor(solrUrl = "http://localhost:8983/solr/lol") {
        this.solrUrl = solrUrl;
    }

    async import(json, deleteAll = false) {
        if (deleteAll) {
            await this.deleteAll();
        }

        const jsonContent = fs.readFileSync(json[0]);
        const itemsData = JSON.parse(jsonContent).data;

        for (let itemId in itemsData) {
            const item = itemsData[itemId];
            const name = item.name;
            const gold = item.gold.base;
            const plaintext = item.plaintext;
            const tags = item.tags;

            await this.addDocument(itemId, this.buildDocument(name, plaintext, gold, tags));
        }

        await this.commit();
    }

    buildDocument(name, plaintext, gold, tags) {
        const document = {};
        document[NAME_FIELD] = name;
        document[PLAINTEXT_FIELD] = plaintext;
        document[GOLD_FIELD] = gold;
        document[TAGS_FIELD] = tags;

        return document;
    }

    async commit() {
        await this.postSolrRequest("update?commit=true");
    }

    async addDocument(uniqueId, fields) {
        await this.postSolrRequest("update?overwrite=true&commitWithin=1000", [{ id: uniqueId, ...fields }]);
    }

    async deleteAll() {
        await this.postSolrRequest("update?commit=true", {
            delete: {
                query: "*:*",
            },
        });
    }

    async search(query, start = 0, rows = 10) {
        return await this.postSolrRequest("select", {
            params: {
                fl: "*,score",
                /* TODO: Put further common query parameters (https://lucene.apache.org/solr/guide/common-query-parameters.html) here. */
            },
            query: {
                edismax: {
                    query,
                    /* TODO: Put further edismax query parameters (https://lucene.apache.org/solr/guide/8_5/the-extended-dismax-query-parser.html) here. */
                },
            },
        });
    }

    async postSolrRequest(url, body) {
        const jsonResponse = await fetch(`${this.solrUrl}/${url}`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" },
        });

        if (!jsonResponse.ok) {
            throw new Error(jsonResponse.statusText);
        }

        const response = await jsonResponse.json();
        return response.response;
    }
}
