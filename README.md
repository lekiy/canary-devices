
# Overview

Canary Device Viewer is a web viewer application to display a users current devices and data readings that they collect.

# Setup

After cloning the Repository you can setup the environment from the terminal by running:
```
npm install
```

You can then run the project by running:
```
npm start
```

# Project structure

The main entry point for this application is App.js. Than inside the src folder you have: 
- UI - which contains the applications UI components.
- Util/Hooks - Which contains the useHooks for the application

# Testing

You can run the existing Unit Tests by running: 
```
npm test
```

# Application Stack

This applications code is based off of the following technologies

- React
- MaterialUI
- Recharts
- React-Testing-Libraries

# Known Issues

- Device data charts only resize to the current view size on reload
- New devices or Readings are not actually added, as the API does not support a Post function
