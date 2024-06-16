import mongoose from 'mongoose'
 import app from './app'
import config from './app/config'

async function main() {
  try {
    var a =10
    console.log(a);
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

main()