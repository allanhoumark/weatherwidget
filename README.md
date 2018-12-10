### Clone form git


Install it and run:

```bash
npm install
npm run dev
```


###run test
```bash
npm run test
```


### notes
- Unittest and snapshot test is incomplete
- Some parts of the Weatherwidget component could/should be broken down into smaller components, like buttons etc.
- Not all winddirection are translated to danish
- index.js composition is done fast and not for a larger site ("hardcoded" the external css link)
- cleanup un-used configuration in setup/config files, package.json, jest.config.js etc.