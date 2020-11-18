yarn build
aws s3 mb s3://azops-dashboard
aws s3 cp build s3://azops-dashboard --recursive --acl public-read
aws s3 website s3://azops-dashboard/ --index-document index.html --error-document error.html