//make deploy.sh excutable

const fs = require('fs')

fs.chmodSync('bin/deploy.sh', '0755')
