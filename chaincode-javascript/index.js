/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const biometric = require('./lib/biometric');

module.exports.AssetTransfer = biometric;
module.exports.contracts = [biometric];
