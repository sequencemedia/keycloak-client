import {
  exec
} from 'child_process'

// http://localhost:8080/realms/master/.well-known/openid-configuration

/**
 *  Keycloak master `admin` user (which we don't want to expose)
 */
const ADMIN = `
  curl http://localhost:8080/realms/master/protocol/openid-connect/token \
    -d "client_id=admin-cli" \
    -d "username=admin" \
    -d "password=${encodeURIComponent('JPDf3X$eNUw@XB')}" \
    -d "grant_type=password" \
    -d 'scope=openid'
`

exec(ADMIN, (e, v) => {
  if (e) throw e

  const { access_token: accessToken } = JSON.parse(v)

  const USERS = `
      curl \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer ${accessToken}" \
        "http://localhost:8080/admin/realms/master/users"
    `

  const ROLES = `
      curl \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer ${accessToken}" \
        "http://localhost:8080/admin/realms/master/roles"
    `

  exec(USERS, (e, v) => {
    if (e) throw e

    console.log('USERS', JSON.parse(v))
  })

  exec(ROLES, (e, v) => {
    if (e) throw e

    console.log('ROLES', JSON.parse(v))
  })
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
const THE_USER_1 = `
  curl \
    -d "client_id=sequencemedia" \
    -d "client_secret=${encodeURIComponent('w9aVq4CB5bVOcFnsoMGMya9vrJeK2c6S')}" \
    -d "grant_type=password" \
    -d "username=the-user-1" \
    -d "password=${encodeURIComponent('$b!6A6t7M7URi.')}" \
    -d 'scope=openid' \
    "http://localhost:8080/realms/master/protocol/openid-connect/token"
`

exec(THE_USER_1, (e, v) => {
  if (e) throw e

  console.log(JSON.parse(v))
})

/**
 *  1. A client, identified by ID and authorised by secret
 *  2. A user, identified by username and authorised by password
 */
const THE_USER_2 = `
  curl \
    -d "client_id=sequencemedia" \
    -d "client_secret=${encodeURIComponent('w9aVq4CB5bVOcFnsoMGMya9vrJeK2c6S')}" \
    -d "grant_type=password" \
    -d "username=the-user-2" \
    -d "password=${encodeURIComponent('CJPRki*Qx4GsL9')}"\
    -d 'scope=openid' \
    "http://localhost:8080/realms/master/protocol/openid-connect/token"
`

exec(THE_USER_2, (e, v) => {
  if (e) throw e

  console.log(JSON.parse(v))
})

/**
 *  1. A client, identified by ID and authorised by secret
 *  2. A user, identified by username and authorised by password
 */
const THE_USER_3 = `
  curl \
    -d "client_id=sequencemedia" \
    -d "client_secret=${encodeURIComponent('w9aVq4CB5bVOcFnsoMGMya9vrJeK2c6S')}" \
    -d "grant_type=password" \
    -d "username=the-user-3" \
    -d "password=${encodeURIComponent('Q*edKXB@@u#7kN')}"\
    -d 'scope=openid' \
    "http://localhost:8080/realms/master/protocol/openid-connect/token"
`

exec(THE_USER_3, (e, v) => {
  if (e) throw e

  console.log(JSON.parse(v))
})
