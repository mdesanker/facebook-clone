# Fakebook

A Facebook clone made with React.

Live demo [here](https://mdesanker.github.io/facebook-clone)

### Ideas for the future

User list is stored in a redux slice, which is not persistent. Would it be better to add new user data to a firestore collection? Would you then want to use a slice to store users at all?

Another option would be to implement redux-persist.

## How to setup

```
git clone https://github.com/mdesanker/facebook-clone.git
cd facebook-clone
npm install
npm start
```

## Built with

- React
- React Router
- styled-components
- Redux
- Firebase - Firestore
