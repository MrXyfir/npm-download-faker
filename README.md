Inflate the download stats for your npm packages.

# FAQ

**Why?** Just because.

**Does this actually work?** Yes.

**Will this work with *any* package?** Yes.

**I'm not seeing any changes!** Check again tomorrow.

**How many downloads can I add?** Probably as many as you want.

**Should I use this?** Probably not.

# Usage

After cloning this repo:

```
cd npm-download-faker
npm install -g
npm-download-faker run -d my-package -d my-other-package!25 -d another-package!15!1.0.3
```

Use `-d` to specify a package to download in the following format: `package-name!downloads!version`. Only `package-name` is required. `downloads` defaults to `10`, and `version` to `1.0.0`. The version you pick really doesn't matter, so long as it's a valid version for your package.