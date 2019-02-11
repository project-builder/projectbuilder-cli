const s3 = function(fsTitle){
        const S3 = [
          {
            name: "s3Bucket",
            type: "input",
            message: `What bucket name should be used for ${fsTitle}?`,
          },
        ]


  return S3
}

export default s3
