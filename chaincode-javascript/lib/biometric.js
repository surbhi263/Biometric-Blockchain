/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

// Deterministic JSON.stringify()
const stringify  = require('json-stringify-deterministic');
const sortKeysRecursive  = require('sort-keys-recursive');
const { Contract } = require('fabric-contract-api');

class AssetTransfer extends Contract {


    // CreateTemplate issues a new biometric template data to the world state with given details.
    async CreateTemplate(ctx, id, name, hash) {
        // const exists = await this.AssetExists(ctx, id);
        // if (exists) {
        //     throw new Error(`The asset ${id} already exists`);
        // }

        const asset = {
            EmpId: id,
            Name: name,
            Hash: hash,

        };
        //we insert data in alphabetic order using 'json-stringify-deterministic' and 'sort-keys-recursive'
        await ctx.stub.putState(hash, Buffer.from(stringify(sortKeysRecursive(asset))));
        return JSON.stringify(asset);
    }

    // ReadTemplate returns the biometric template stored in the world state with given id.
    async ReadTemplate(ctx, hash) {
        const assetJSON = await ctx.stub.getState(hash); // get the asset from chaincode state
        if (!assetJSON || assetJSON.length === 0) {
            throw new Error(`The asset ${hash} does not exist`);
        }
        return assetJSON.toString();
    }

}

module.exports = AssetTransfer;
