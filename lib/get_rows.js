module.exports = ({ db, designDocName, viewName, query, allDocsMode, keys }) => {
  if (keys.length === 0) {
    if (allDocsMode) return db.allDocs(query).then(getDocs)
    else return db.view(designDocName, viewName, query).then(getRows)
  } else {
    if (allDocsMode) return db.allDocsKeys(keys, query).then(getDocs)
    else return db.viewByKeysCustom(viewName, keys, query)
  }
}

const getRows = ({ rows }) => rows

const getDocs = ({ rows }) => rows.filter(isntDesignDoc).map(getDoc)

const getDoc = row => row.doc

const isntDesignDoc = ({ id }) => !id.startsWith('_design/')
