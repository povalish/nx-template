# NX Template


## How to run

Before run any command

```bash
$ yarn install
```

### Web App

```bash
$ npx nx run web:start # start dev server
$ npx nx run web:build # build static site
```

### Desktop App
```bash
$ npx nx run desktop:start # start electron app for development
$ npx nx run desktop:package # build binary file
```

### Mobile App
```bash
$ npx npx nx run mobile:start # start dev server, need to run before start iOS/Android app
$ npx nx run mobile:run-android # start android app
$ npx nx run mobile:run-ios # start ios app
```

### Storybook for React
```bash
$ npx nx run storybook-react:build # build stories
$ npx nx run storybook-react:start # start storybook for react components
```

### Storybook for React Native
```bash
$ npx nx run storybook-native:build # build stories
$ npx nx run storybook-native:start # start dev server
$ npx nx run storybook-native:run-android # run storybook on android
$ npx nx run storybook-native:run-ios # run storybook on ios
```


## Unit Tests

```bash
$ npx nx run mobile:test
$ npx nx run desktop:test
$ npx nx run web:test
$ npx nx run mobules:test
$ npx nx run ui-kit:test
```


## E2E Tests
```bash
$ npx nx run web-e2e:run
$ npx nx run desktop-e2e:run
$ npx nx run mobile-e2e:run
$ npx nx run mobile-e2e:test-android
$ npx nx run mobile-e2e:test-ios
```