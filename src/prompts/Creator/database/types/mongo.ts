const mongo = function(dbTitle){
    const setup = [
      {
        name: "mongoPort",
        type: "input",
        message: `What port should be used for ${dbTitle}?`,
        default: `27017`
      },
      {
        name: "mongoHost",
        type: "input",
        message: `What hostname should be used for ${dbTitle}?`,
        default: `localhost`
      },
      {
        name: "mongoUser",
        type: "input",
        message: `What user should be used for ${dbTitle}?`,
        default: `root`
      },
      {
        name: "mongoPass",
        type: "password",
        message: `What password should be used for ${dbTitle}?`
      },
    ]

  return setup
}

export default mongo
