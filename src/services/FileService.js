const path = require('path'); //fs : file system path

const uploadSingleFile = async (fileObject) => {
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  // sampleFile = req.files.sampleFile;

  let uploadPath = path.resolve(__dirname, '../public/images/upload')
  //get image's extension
  let extname = path.extname(fileObject.name);

  //get image's name (without extension)
  let baseName = path.basename(fileObject.name, extname);

  //create final path: eg: //upload/image.png
  let finalName = `${baseName}-${Date.now()}${extname}`;
  let finalPath = `${uploadPath}/${finalName}`;

  try {
    await fileObject.mv(finalPath);
    return {
      status: 'success',
      path: finalName,
      error: null,
    }
  } catch (error) {
    console.log(">>> check err : ", error);
    return {
      status: 'success',
      path: 'link-image',
      error: JSON.stringify(err)
    }
  }
};

const uploadMultipleFiles = async (filesArr) => {
  try {
    let uploadPath = path.resolve(__dirname, '../public/images/upload')
    let resultArr = [];
    let countSuccess = 0;
    for (let i = 0; i < filesArr.length; i++) {
      console.log("check i = ", i);
      // get image extension
      let extname = path.extname(filesArr[i].name);

      //get image's name (without extension)
      let baseName = path.basename(filesArr[i].name);

      //create final path: eg: //upload/image.png
      let finalName = `${baseName}-${Date.now()}${extname}`;
      let finalPath = `${uploadPath}/${finalName}`;

      try {
        console.log(finalPath)
        await filesArr[i].mv(finalPath);
        resultArr.push({
          status: 'success',
          path: finalPath,
          fileName: finalName,
          error: null,
        })
        countSuccess++;
      } catch (error) {
        resultArr.push({
          status: 'failed',
          path: null,
          fileName: filesArr[i].name,
          error: JSON.stringify(err),
        })
      }

    }
    return {
      countSuccess: countSuccess,
      detail: resultArr
    }
  } catch (error) {
    console.log(">>> check err : ", error);
    return {
      status: 'failed',
      path: 'link-image',
      fileName: filesArr[i].name,
      error: JSON.stringify(err)
    }
  }
};

module.exports = {
  uploadSingleFile,
  uploadMultipleFiles,
}