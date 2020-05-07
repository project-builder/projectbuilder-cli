  const mysql = function(dbTitle){
    return [
      {
        name: "port",
        type: "input",
        message: `What port should be used for ${dbTitle}?`,
        default: `3306`
      },
      {
        name: "host",
        type: "input",
        message: `What hostname should be used for ${dbTitle}?`,
        default: `localhost`
      },
      {
        name: "user",
        type: "input",
        message: `What user should be used for ${dbTitle}?`,
        default: `root`
      },
      {
        name: "password",
        type: "password",
        message: `What password should be used for ${dbTitle}?`
      },
      {
        name: "database",
        type: "input",
        message: `What is the database name for ${dbTitle}?`,
      },
    ]
  }


export default mysql
