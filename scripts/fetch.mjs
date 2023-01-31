
/**
 *  Keycloak master `admin` user (which we don't want to expose)
 */
fetch('http://localhost:8080/realms/master/protocol/openid-connect/token', {
  method: 'POST',
  body: new URLSearchParams({
    client_id: 'admin-cli',
    username: 'admin',
    password: 'JPDf3X$eNUw@XB',
    grant_type: 'password',
    scope: 'openid'
  })
})
  .then((response) => response.json())
  .then(({ access_token: accessToken }) => {
    return Promise.all([
      fetch('http://localhost:8080/admin/realms/master/users', { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` } }),
      fetch('http://localhost:8080/admin/realms/master/roles', { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` } })
    ])
  })
  .then(([users, roles]) => {
    return Promise.all([
      users.json(),
      roles.json()
    ])
  })
  .then(([users, roles]) => {
    console.log(users)
    console.log(roles)
  })
  .catch((e) => {
    console.log(e)
  })

/*
 *  Instead we create a client in Keycloak
 *
 *  The parameter `grant_type` says "give me a token for this username and password combination"
 *
 *  When the client ID and secret combination is bad we get an error
 *
 *    {
 *      error: 'unauthorized_client',
 *      error_description: 'Invalid client or Invalid client credentials'
 *    }
 *
 *  When the username and password combination is bad we get an error
 *
 *    {
 *      error: 'invalid_grant',
 *      error_description: 'Invalid user credentials'
 *    }
 *
 *  When both the client ID and secret combination is good, and the username and password combination is good, we get a token
 *
 *  (There are other errors when the client is not permitted, etc)
 */

/**
 *  1. A client, identified by ID and authorised by secret
 *  2. A user, identified by username and authorised by password
 */
fetch('http://localhost:8080/realms/master/protocol/openid-connect/token', {
  method: 'POST',
  body: new URLSearchParams({
    client_id: 'sequencemedia',
    client_secret: 'w9aVq4CB5bVOcFnsoMGMya9vrJeK2c6S',
    grant_type: 'password',
    username: 'the-user-1',
    password: '$b!6A6t7M7URi.',
    scope: 'openid'
  })
})
  .then((response) => response.json())
  .then((v) => {
    console.log(v)
  })

/**
 *  1. A client, identified by ID and authorised by secret
 *  2. A user, identified by username and authorised by password
 */
fetch('http://localhost:8080/realms/master/protocol/openid-connect/token', {
  method: 'POST',
  body: new URLSearchParams({
    client_id: 'sequencemedia',
    client_secret: 'w9aVq4CB5bVOcFnsoMGMya9vrJeK2c6S',
    grant_type: 'password',
    username: 'the-user-2',
    password: 'CJPRki*Qx4GsL9',
    scope: 'openid'
  })
})
  .then((response) => response.json())
  .then((v) => {
    console.log(v)
  })

/**
 *  1. A client, identified by ID and authorised by secret
 *  2. A user, identified by username and authorised by password
 */
fetch('http://localhost:8080/realms/master/protocol/openid-connect/token', {
  method: 'POST',
  body: new URLSearchParams({
    client_id: 'sequencemedia',
    client_secret: 'w9aVq4CB5bVOcFnsoMGMya9vrJeK2c6S',
    grant_type: 'password',
    username: 'the-user-3',
    password: 'Q*edKXB@@u#7kN',
    scope: 'openid'
  })
})
  .then((response) => response.json())
  .then((v) => {
    console.log(v)
  })
