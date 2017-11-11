var requests = require('./tests/default.json')

module.exports = {
  getResponse: function (objectId) {
    // console.log('Save Edit Item Object ID=' + objectId)
    var count = ++requests[objectId].count
    var resp = requests[objectId].responses[count]
    if (resp === undefined) {
      resp = requests[objectId].responses['default']
    }
    return resp
  },
  reset: function (testName) {
    requests = require('./tests/' + testName)
  }
}
