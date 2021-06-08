import fetch from "node-fetch";

/* TODO: Configure which field names Solr should use for title and text. */
export const TITLE_FIELD = "";
export const TEXT_FIELD = "";

export default class Solr {
    constructor(solrUrl = "http://localhost:8983/solr/simplewiki") {
        this.solrUrl = solrUrl;
    }

    async import(filenames, deleteAll = false) {
        if (deleteAll) {
            await this.deleteAll();
        }

        for (const filename of filenames) {
            /* TODO: Get a unique and stable ID for this document, ie. no random values + based on the document somehow */
            const id = "";
            const title = ""; /* TODO: Get the human-readable title for this document. */
            const text = ""; /* TODO: Get the text for this document. */

            await this.addDocument(id, this.buildDocument(title, text));
        }

        await this.commit();
    }

    buildDocument(title, text) {
        const document = {};
        document[TITLE_FIELD] = title;
        document[TEXT_FIELD] = text;
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
