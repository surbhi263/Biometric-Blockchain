cd ${PWD}/fabric-samples/test-network

./network.sh up createChannel -ca -c mychannel -s couchdb

./network.sh deployCC -ccn biometric -ccp ${PWD}/../../biometric-cc/chaincode-javascript/ -ccl javascript
