# Testing Passport JS and OAuth

I hope this example helps. It works for the most basic happy path. If needed I can expand on it. The example uses EJS and a cookieSession for convenience. 

## Keys

In order to use the application you will need to create a `keys.js` file in `/config`. Add your unidays client id and secret. 

```
module.exports = {
        unidays: {
            clientID: '',
            clientSecret: ''
        },
        session: {
            cookieKey: 'testing'
        }
};
```

## Restore packages

`npm install`

## Run with JSON Server 
You need to run two commands: `npm run serve` and `npm run json-serve`. You can run these in two different terminals or run together in bash with something like: 

`(trap 'kill 0' SIGINT; npm run json-serve & npm run serve)` 

That will allow you to press `ctl+c` and kill both processes at once. 

## Notes: 

- This repo is just for testing the OAUth installation for Krew. 
- json-server obvs won't work in production (but it's great fun for testing!)
- let me know if there's any issues!

