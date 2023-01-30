# the-curl

_Q_. Can we validate a user by making a request to Keycloak?

_A_. Yes

There's no good reason why this was written for `curl` except I didn't trust any of the client packages (with good reason as it turns out)

## Prerequisites

You'll need to have the latest version of Keycloak running locally and configured

In the _Settings_ tab I used the client ID `sequencemedia` ![client Settings tab](docs/client-settings.png) and enabled **client authentication** and **direct access grants** in the **Capability config** section (toward the bottom)

- Save the changes

In the _Credentials_ tab I regenerated the client secret ![client Credentials tab](docs/client-credentials.png) _which you should regenerate even though you have just created the client, because I spent four hours tracking down an issue so that you don't have to_

- Save the changes again

You should put your client ID into the JS

```
-d "client_id=<YOUR CLIENT ID>" \
```

And the client secret

```
-d "client_secret=${encodeURIComponent('<YOUR CLIENT SECRET>')}" \
```

I also created three users:

- `the-user-1`
- `the-user-2`
- `the-user-3`

I did't give them any permissions but you will need to amend the JS for your users, too

Wherever you see the `username` and `password` combination put a pair of credentials

```
-d "username=<USER NAME>" \
-d "password=${encodeURIComponent('<PASSWORD>')}"\
```

## To start

At the command line change into this directory and execute

```bash
npm run curl
```

I also tried a client package (it may not be the latest version) 

```bash
npm run client
```

But it _poops_. It only seems to be `fetch`, but it breaks on passwords which need escaping. (It shouldn't be hard to put these `curl` requests into `fetch` without the bork)