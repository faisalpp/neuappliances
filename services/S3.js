const AWS3 = require('@aws-sdk/client-s3');
const { AWS_S3_USER_ACCESS_KEY,AWS_S3_USER_SECRET_ACCESS_KEY,AWS_S3_REGION} = require('../config/index')

// Create an S3 instance
const s3 = new AWS3.S3Client({credentials:{accessKeyId:AWS_S3_USER_ACCESS_KEY,secretAccessKey:AWS_S3_USER_SECRET_ACCESS_KEY},region:AWS_S3_REGION})

module.exports = s3; // Export the configured S3 instance
