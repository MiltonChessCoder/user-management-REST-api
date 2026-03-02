module.exports = function(req, res, next) {
  // Expect header: Authorization: Basic <base64(username:password)>
  const authHeader = req.headers['authorization']

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const base64Credentials = authHeader.split(' ')[1]
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
  const [username, password] = credentials.split(':')

  // Simple hardcoded check (for demo purposes)
  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
  next()
  } else {
  res.status(401).json({ error: 'Unauthorized' })
  }}