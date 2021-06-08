import Solr, { TITLE_FIELD } from "./solr";
import glob from "glob";

const readline = require("readline");

const solr = new Solr();

(async () => {
    const solr = new Solr("http://localhost:8983/solr/lol");

    try {
        await solr.import(glob.sync("item.json"), false);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Enter query, empty to quit: ",
});

rl.prompt();
rl.on("line", async (line) => {
    if (line === "") {
        process.exit(0);
    }

    const results = await solr.search(line.trim());
    console.log(`Found ${results.numFound} results, showing top 5\n`);

    for (const result of results.docs.slice(0, 5)) {
        console.log(`${result[TITLE_FIELD]}: ${result.score}`);
    }

    rl.prompt();
});
