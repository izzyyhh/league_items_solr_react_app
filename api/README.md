# Setup

1. Install [Vagrant](https://www.vagrantup.com/)
    * When using WSL [make sure to install Vagrant in WSL](https://www.vagrantup.com/), not in Windows.
2. `npm install`
3. Create a new Solr core inside the VM, reachable at http://localhost:8983/solr/lol

```shell script
cd solr-8.8.2/
./bin/solr create -c lol
```
4. Create new MULTIVALUED field called 'tags'
5. Enable CORS in Apache Solr -> web.xml
6. Configure spellcheck -> solrconf.xml

# Format code

```bash
npm run lint-fix
```

# Start CLI

```bash
npm run cli
```

