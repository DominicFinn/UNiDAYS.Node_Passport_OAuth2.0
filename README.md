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

## Data 

User data is stored in a JSON file using json-server. It's just a handy way of stashing the data and checking it's there. This data will persist over sessions but the data won't commit to source control unless .gitignore is changed. 

An example user looks like: 

```
    {
      "id": "7X1AOcesrI48+fsrfsdfsdsdss3354456=",
      "email": "billy.manilly@example.com",
      "given_name": "Billy",
      "family_name": "Manilly",
      "country_of_study": "GBR",
      "verification_status": {
        "verified": true,
        "user_type": "student"
      }
    }
```

Providing they allow the data sharing request  and you have permission to access the scopes used in the example. 

## Notes: 

- This repo is just for testing the OAUth installation for Krew. 
- json-server obvs won't work in production (but it's great fun for testing!)
- let me know if there's any issues!
- full details of the oauth product from unidays are here https://live-analytics.myunidays.com/tools/oauth


