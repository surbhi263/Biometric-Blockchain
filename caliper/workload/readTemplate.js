'use strict';

const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

class MyWorkload extends WorkloadModuleBase {
    constructor() {
        super();
        this.hash=[2319397961168064512,1161981653025822720,1733912348299624448,1163107621652672512,1733934459061800960,2022142690159230976,1733907967432984576,1159729887504242688,3760558654795284480,1166538236180324352];
        this.txIndex = -1;
    }

    // async initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext) {
    //     await super.initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext);

    //     for (let i = 0; i < this.roundArguments.assets; i++) {
    //         const assetID = `${this.workerIndex}_${i}`;
    //         console.log(`Worker ${this.workerIndex}: Creating asset ${assetID}`);
    //         const request = {
    //             contractId: this.roundArguments.contractId,
    //             contractFunction: 'CreateAsset',
    //             invokerIdentity: 'User1',
    //             contractArguments: [assetID, 'blue', '20', 'penguin', '500'],
    //             readOnly: false
    //         };

    //         await this.sutAdapter.sendRequests(request);
    //     }
    // }
    async submitTransaction() {
        this.txIndex++;
        const randomId = Math.floor(Math.random() * this.roundArguments.assets);
        let Hash = this.hash[this.txIndex % this.hash.length];
        const myArgs = {
            contractId: this.roundArguments.contractId,
            contractFunction: 'ReadTemplate',
            invokerIdentity: 'User1',
            contractArguments: [Hash],
            readOnly: true
        };

        await this.sutAdapter.sendRequests(myArgs);
    }

//     async cleanupWorkloadModule() {
//         for (let i = 0; i < this.roundArguments.assets; i++) {
//             const assetID = `${this.workerIndex}_${i}`;
//             console.log(`Worker ${this.workerIndex}: Deleting asset ${assetID}`);
//             const request = {
//                 contractId: this.roundArguments.contractId,
//                 contractFunction: 'DeleteAsset',
//                 invokerIdentity: 'User1',
//                 contractArguments: [assetID],
//                 readOnly: false
//             };

//             await this.sutAdapter.sendRequests(request);
//         }
//     }
}

function createWorkloadModule() {
    return new MyWorkload();
}

module.exports.createWorkloadModule = createWorkloadModule;
