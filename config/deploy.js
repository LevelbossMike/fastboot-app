/* jshint node: true */
var fs = require('fs');

module.exports = function(deployTarget) {
  var ENV = {
    s3: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      bucket: process.env.DEPLOY_S3_BUCKET,
      region: process.env.DEPLOY_S3_REGION
    },
    'fastboot-app-server-aws': {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      bucket: process.env.DEPLOY_S3_BUCKET,
      region: process.env.DEPLOY_S3_REGION
    }
  };

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
