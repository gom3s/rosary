# rosary project

This is implementation of https://orareprome.com It's open source Progressive
Web App (PWA) that helps to connect connect people on holy rosary prayer. You
can add intention and Orare Pro Me community will pray on Holy Rosary for you.

Production App consumes backend service, that allows to connect prayers together
(detail's are described in the app).

In development use json-server to set up local API backend

```
npm install -g json-server
```

Once json-server is installed globally, you can run api

```
npm run json-server
```

make sure `.env.development.local` point's to json-server

```
REACT_APP_ROSARY_API_="https://localhost:3001/"
```
