const s3 = function(fsTitle){
        return [
          {
            name: "s3Bucket",
            type: "input",
            message: `What bucket name should be used for ${fsTitle}?`,
          },
        ]
}

export default s3
