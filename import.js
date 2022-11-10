const { initializeFirebaseApp,restore } = require('firestore-export-import')

const serviceAccountDev = {
  "type": "service_account",
  "project_id": "orijin-dev",
  "private_key_id": "c847441185ee7bda8cd4f4ae66216e76226b052a",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDNdQaXJhSt8hHR\ndqg4jZYzLjCKWPi8kp3ay4w7rz1yWUPdt8FEoY45ym8uaND0ZwtVTzI4k5EBKMBE\nUoDxbRPiI2AG3DChD4BRG2kcLftKq8FcFb3OmBVRKr/92idw/ZMKvrRsIZgoAGLB\npIT4hsMovgZYeEpN+WSWlV9U8/v7YasEIYmKfD1GbGdh1UVf85rsURDnzrJ8WzSp\n9umnZpDZ+cr5DZpicsygm8A/tMyK5zyy6aAQEb2lAWlCCRmlvoqoeo+2kutMcl9b\nagxzvQoqhpiOE1FIKgatLdO5yEJPDOK2q51PC2UUA012LLDYiSg0vaInkmRPTDoz\nt9rGmxPfAgMBAAECggEABAFDex/JaGifE0uyVMPhySad2JyKYLak8BZmqeUtF/UI\nfyJtWIajrJm3GBr/87use2G7U2IBAhpGwS4wiEQ9jnttDEUvh3wzXqFfp6Z3zwlR\nEBf2ZrgNNlNUgcDGYwv2WU/FWZRAEIuNYUPxOZz64ejuW7wgiquRW+QWgyPsZgaE\n5dQgfpBatp/3BJWf+Vr54ZXPeD4ztmgYqfniR6ZVY7nqk7zBIx0k8QnIoZEueADu\ni7bDQIBpfwCbppdrmdMkGFR+ozj2Cz69HYjpAaURoGYWzUUVXyF3Nq5LNaiqWVY+\nigEmPAUibIedxzqbBdLd53i2nS5+cNUAPRuHpKcqOQKBgQD2Axwl/u7cCxrOl53Q\nE7lTb5XiHM1NIZ7UX/57bamW1FyApxlriUalF0eiJ3j4IOCy8Jy3+4KPYkl8JRDd\ncpIRGgS3+Kf2g+qhZ5MTgt2s/p32QVAcVTCtyPceZPw0bXiPcSirRIoFGnJ9nkhR\nZ3pjeSRvjOsR+qDVbmxybb4xFwKBgQDVzGnSBdJCRoFC6Yyc4Qc7c5Mxlnfvs/LE\nq6bR6dwHiU96SHgQ0OZoOe2vAe14Mm/VekxP7ibG+dr2ysuCY1HDgbethBXJW3Xv\nZPSfQTbhb7KwQVz6l6DOMPZN8FNqwxnpNvIDveHGPeQc7MGN8lUPaTbJ0gpKWZc9\neORBiOUgeQKBgQDnBuqjP/I+UGtfQYDhS/SJR0wBKL0fxwfqNy+757MQQuOPqdy0\nYRknpmIOBHWUxwNc55q1KItmbY3G+OQKojJLvxxZTDknxqBL7QFwnD/i2sWq4ZEC\n2nm5afWv5HP4JCnIwyLHG7llq32DPGZ7k+qaicROwY5rturdJDLRjv/CBwKBgCcf\nzimh6RU5w8PT62h2AZXOk5wadf5GhuGYq+F0E1DJvuKYymgBYnimSSmih6tcR3zg\ncYCbCzuUU46gE9fbhwXpAgzdxALiGtXhOqa+D2X3w9JfU72D6+hvq1Md7JX3+BDm\nfilTITLe9pSYet8X/prgXSdXqYxrkrKsIdEgVRW5AoGARuTI4YImlENK7fpCeA++\nI5+AxIz7u8N43tuswQlJj45QRx6MrN0LfvGr3Ga6PJSLaNzUvVoo06xMtWzx9Pon\nN462QQJfAmK5BH0BO3zbCFaauhtvdnGJecW+3F4jRsc2dJ6JmVZjwTsVyJtFQgMk\niSO/PqpUmkyMZZT+9mKSGt8=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-kyj34@orijin-dev.iam.gserviceaccount.com",
  "client_id": "105641316160193552322",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-kyj34%40orijin-dev.iam.gserviceaccount.com"
}

// If you want to pass settings for firestore, you can add to the options parameters
const options = {
  // firestore: {
  //   host: 'localhost:8080',
  //   ssl: false,
  // },
}

// Initiate Firebase App
// appName is optional, you can omit it.
const appName = '[DEFAULT]'
initializeFirebaseApp(serviceAccountDev, appName, options)

// Start importing your data
// The array of date, location and reference fields are optional
restore('processing_data_drying.json', {
  // dates: ['date1', 'date1.date2', 'date1.date2.date3'],
  // geos: ['location', 'locations'],
  // refs: ['refKey', 'arrayRef'],
})

// the appName & options are OPTIONAL
// you can initalize the app without them
// initializeFirebaseApp(serviceAccount)
