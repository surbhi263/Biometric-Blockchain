#!/bin/sh

cd ${PWD}/caliper

export F_PATH=$(pwd)
export PK_FILE=$(ls ${PWD}/../fabric-samples/test-network/organizations/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/keystore/)

envsubst < ${PWD}/networks/networkConfig-template.yaml > ${PWD}/networks/networkConfig.yaml

npx caliper launch manager --caliper-workspace ./ --caliper-networkconfig networks/networkConfig.yaml --caliper-benchconfig benchmarks/assetCCBenchmark.yaml --caliper-flow-only-test --caliper-fabric-gateway-enabled

cp report.html ${PWD}/../caliper-reports/
