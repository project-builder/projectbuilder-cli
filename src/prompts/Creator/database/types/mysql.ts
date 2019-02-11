const mysql = function(dbTitle){
    const setup = [
      {
        name: "sqlPort",
        type: "input",
        message: `What port should be used for ${dbTitle}?`,
        default: `3306`
      },
      {
        name: "sqlHost",
        type: "input",
        message: `What hostname should be used for ${dbTitle}?`,
        default: `localhost`
      },
      {
        name: "sqlUser",
        type: "input",
        message: `What user should be used for ${dbTitle}?`,
        default: `root`
      },
      {
        name: "sqlPass",
        type: "password",
        message: `What password should be used for ${dbTitle}?`
      },
      {
        name: "sqlDB",
        type: "input",
        message: `What database should be used for ${dbTitle}?`,
        default: dbTitle

      },
    ]

  return setup
}

export default mysql;
