# noronatest.me
NoronaTest.me Website

To install/test do the following:
1. Init submodules
```
git submodule init code/themes/hugo-product-launch
```

1.5 Pull submodules
```
git submodule update --recursive --remote
```

2. Install node modules
```
cd code
npm install
```

Recurrent:
After editing your tailwind.config.js or other style related objects, also postcss/purgecss files, run:
```
npm run test
npm run format
hugo --gc
hugo -D
```

Have fun!
