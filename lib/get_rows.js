module.exports = ({ db, designDocName, viewName, query, allDocsMode, keys }) => {
  if (keys.length === 0) {
    if (allDocsMode) return db.allDocs(query).then(getRows)
    else return db.view(designDocName, viewName, query).then(getRows)
  } else {
    if (allDocsMode) return db.allDocsKeys(keys, query).then(getRows)
    else return db.viewKeys(designDocName, viewName, keys, query).then(getRows)
  }
}

const getRows = ({ rows }) => rows.filter(isntDesignDoc)

const isntDesignDoc = ({ id }) => !id.startsWith('_design/')
