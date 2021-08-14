# Database update

## What to do before database update
1. update file `__mocks__/characters.json`
2. update file `__mocks__/ships.json`
3. add key `"type": "module"` in `package.json`
4. remove all existing collection in database

## Order filling database
1. alignments:
```bash
npm run db db/alignments/add.js
```

2. roles:
```bash
npm run db db/roles/add.js
```

3. factions:
```bash
npm run db db/factions/add.js
```

4. characters:
```bash
npm run db db/characters/add.js
```

5. ship roles:
```bash
npm run db db/shipRoles/add.js
```

5. ships:
```bash
npm run db db/ships/add.js
```

7. images:
```bash
# remove "type": "module" from package.json first
npm run db db/images/add.js
```
