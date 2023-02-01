# keycloak-client

_Q_. Can we validate a user in Auth0 by making a request with their credentials to Keycloak?

_A_. Yes

## Prerequisites

You'll need the latest version of Keycloak running locally and configured

In the _Settings_ tab I used the client ID `sequencemedia` ![client Settings tab](docs/client-settings.png) and enabled **client authentication** and **direct access grants** in the **Capability config** section (toward the bottom)

- Save the changes

In the _Credentials_ tab I regenerated the client secret ![client Credentials tab](docs/client-credentials.png) _which you should regenerate even though you have just created the client, because I spent four hours tracking down an issue so that you don't have to_

You should put your client ID into the JS

```
-d "client_id=<CLIENT ID>" \
```

And the client secret

```
-d "client_secret=${encodeURIComponent('<CLIENT SECRET>')}" \
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

For `fetch`

```bash
npm run fetch
```

Alternatively for `axios`

```bash
npm run axios
```

Alternatively for `curl`

```bash
npm run curl
```
