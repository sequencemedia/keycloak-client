import KcAdminClient from '@keycloak/keycloak-admin-client'

/**
 *  `@keycloak/keycloak-admin-client` doesn't correctly serialise passwords which contain escapable characters
 *
 *  (It's just a fetch request)
 */

{
  const client = new KcAdminClient()

  client.auth({
    username: 'admin',
    password: 'JPDf3X$eNUw@XB',
    grantType: 'password',
    clientId: 'sequencemedia',
    clientSecret: 'wPHU4FSVtn1i8YUoZHAyYnuBFLPauyX0'
  })
    .then(() => client.users.find())
    .then((v) => {
      console.log(v)
    })
    .then(() => client.roles.find())
    .then((v) => {
      console.log(v)
    })
    .catch(({ message }) => {
      console.error('💩', message)
    })
}

{
  const client = new KcAdminClient()

  client.auth({
    username: 'the-user-1',
    password: '$b!6A6t7M7URi.',
    grantType: 'password',
    clientId: 'sequencemedia',
    clientSecret: 'wPHU4FSVtn1i8YUoZHAyYnuBFLPauyX0'
  })
    .then(() => client.users.find())
    .then((v) => {
      console.log(v)
    })
    .then(() => client.roles.find())
    .then((v) => {
      console.log(v)
    })
    .catch(({ message }) => {
      console.error('💩', message)
    })
}

{
  const client = new KcAdminClient()

  client.auth({
    username: 'the-user-2',
    password: 'CJPRki*Qx4GsL9',
    grantType: 'password',
    clientId: 'sequencemedia',
    clientSecret: 'wPHU4FSVtn1i8YUoZHAyYnuBFLPauyX0'
  })
    .then(() => client.users.find())
    .then((v) => {
      console.log(v)
    })
    .then(() => client.roles.find())
    .then((v) => {
      console.log(v)
    })
    .catch(({ message }) => {
      console.error('💩', message)
    })
}

{
  const client = new KcAdminClient()

  client.auth({
    username: 'the-user-3',
    password: 'Q*edKXB@@u#7kN',
    grantType: 'password',
    clientId: 'sequencemedia',
    clientSecret: 'wPHU4FSVtn1i8YUoZHAyYnuBFLPauyX0'
  })
    .then(() => client.users.find())
    .then((v) => {
      console.log(v)
    })
    .then(() => client.roles.find())
    .then((v) => {
      console.log(v)
    })
    .catch(({ message }) => {
      console.error('💩', message)
    })
}
