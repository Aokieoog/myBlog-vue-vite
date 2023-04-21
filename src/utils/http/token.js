 const token = function (){
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let token = ''
    for (let i = 0; i < 16; i++) {
      const index = Math.floor(Math.random() * chars.length)
      token += chars[index]
    }
    return token
  }
export default token