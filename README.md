# MERN Stack Boilerplate

A completely flexible boilerplate for MERN stack (MongoDb, Express.js, React.js, Node.js)

## Stack List

- MongoDB
- Express
- React
  - Redux
  - Router
- Webpack (completely configured)
  - HMR
  - stylelint
  - postcss
    - precss
    - postcss-rtl
    - autoprefixer
  - Sass
- Node Js

## Usage

To start using this boilerplate, just start by cloning this repository:

```
git clone https://github.com/MeghdadHadidi/mern-stack-boilerplate.git
cd mern-stack-boilerplate
npm install
```

Then just simply run `npm run server` in main folder.
For running client side, you need to run followin commands separately:

```
cd client
npm install
```

Then return back to root folder (where the server and clients exist) like this:

```
cd ..
```

and then run:

```
npm run start:dev
```

Good Luck!

## Todo

- [ ] Project structure
- [ ] Adding React Router
- [x] Adding Redux
- [x] HMR configuration
- [x] Webpack Hot Middleware and Webpack Dev Middleware configuration
- [x] Post Css ~~> RTL Css
- [x] Optimization (unglify, ...)
