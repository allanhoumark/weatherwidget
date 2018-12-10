### How to set it up

Clone from github

navigate into the directory you just cloned the project to, open a terminal and type

```bash
npm install
npm run dev
```

Open a browser on http://localhost:3000


### run test
In the terminal type
```bash
npm run test
```


### notes
- Unittest and snapshot test is incomplete
- Some parts of the Weatherwidget component could/should be broken down into smaller components, like buttons etc.
- Not all winddirection are translated to danish
- index.js composition is done fast and not for a larger site ("hardcoded" the external css link)
- cleanup unused configuration in setup/config files, package.json, jest.config.js etc.