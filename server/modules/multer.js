const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');



const s3 = new aws.S3({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID, //노출주의
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY, //노출주의
  region: process.env.AWS_S3_REGION //노출주의
});




const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'ohwunwan-multer',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, `${Date.now()}`);
    },
  }),
});
module.exports = upload;