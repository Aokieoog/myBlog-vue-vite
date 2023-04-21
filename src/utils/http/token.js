const generateToken = function() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let tokens = ''
  for (let i = 0; i < 128; i++) {
    const index = Math.floor(Math.random() * chars.length)
    tokens += chars[index]
  }
  return tokens
}

export default generateToken