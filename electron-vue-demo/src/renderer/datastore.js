import Datastore from 'nedb'
import path from 'path'
import { remote } from 'electron'


export default new Datastore({
  autoload: true,
  filename: path.join(remote.app.getPath('userData'), '/data.db')
})

// mac下的存储路径 
//  ~/Library/Application Support/electron/data.db
