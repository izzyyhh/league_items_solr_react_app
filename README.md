# Setup

1. Install [Vagrant](https://www.vagrantup.com/)
    * When using WSL [make sure to install Vagrant in WSL](https://www.vagrantup.com/), not in Windows.
2. `npm install`
3. Create a new Solr core inside the VM, reachable at http://localhost:8983/solr/simplewiki

```shell script
cd solr-8.8.2/
./bin/solr create -c simplewiki
```

# Implementation

1. Add your implementation in `solr.js` by addressing the `TODO` entries.
2. Check that tests run successfully.
3. Format the code before committing your implementation to make the code easier to read.
4. Check that the build runs successfully on GitLab.

# Format code

```bash
npm run lint-fix
```

# Start CLI

```bash
npm run cli
```

# Run tests

```bash
npm run test
```
