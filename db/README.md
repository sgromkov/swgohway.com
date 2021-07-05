# Database update

## What to do before database update
1. update file `__mocks__/characters.json`
2. add key `"type": "module"` in `package.json`

## Order filling database
1. alignments:
```bash
npm run db db/alignments/add.js
```

2. roles:
```bash
npm run db db/roles/add.js
```

3. fractions:
```bash
npm run db db/fractions/add.js
```

4. characters:
```bash
npm run db db/characters/add.js
```

5. images:
```bash
npm run db db/images/add.js
```
