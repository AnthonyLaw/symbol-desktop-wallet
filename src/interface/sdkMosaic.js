var _this = this;
import * as tslib_1 from "tslib";
import { MosaicDefinitionTransaction, Deadline, MosaicNonce, MosaicId, MosaicProperties, UInt64, MosaicSupplyChangeTransaction, MosaicHttp, Convert } from 'nem2-sdk';
export var mosaicInterface = {
    createMosaicNonce: function (params) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        function convertNonce(input) {
            var hex = input.toString(16);
            var hex2 = '0000000'.concat(hex).substr(-8);
            return Convert.hexToUint8(hex2).reverse();
        }
        var nonce, mosaicNonce;
        return tslib_1.__generator(this, function (_a) {
            nonce = params.nonce || convertNonce(Math.ceil(Math.random() * 1000));
            mosaicNonce = new MosaicNonce(nonce);
            return [2 /*return*/, {
                    result: {
                        mosaicNonce: mosaicNonce
                    }
                }];
        });
    }); },
    createMosaicId: function (params) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var publicAccount, mosaicNonce, mosaicId;
        return tslib_1.__generator(this, function (_a) {
            publicAccount = params.publicAccount;
            mosaicNonce = params.mosaicNonce;
            mosaicId = MosaicId.createFromNonce(mosaicNonce, publicAccount);
            return [2 /*return*/, {
                    result: {
                        mosaicId: mosaicId
                    }
                }];
        });
    }); },
    createMosaic: function (params) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var mosaicNonce, mosaicId, supplyMutable, transferable, divisibility, duration, netWorkType, maxFee, mosaicDefinitionTransaction;
        return tslib_1.__generator(this, function (_a) {
            mosaicNonce = params.mosaicNonce;
            mosaicId = params.mosaicId;
            supplyMutable = params.supplyMutable;
            transferable = params.transferable;
            divisibility = params.divisibility;
            duration = params.duration;
            netWorkType = params.netWorkType;
            maxFee = params.maxFee;
            mosaicDefinitionTransaction = MosaicDefinitionTransaction.create(Deadline.create(), mosaicNonce, mosaicId, MosaicProperties.create({
                supplyMutable: supplyMutable,
                transferable: transferable,
                divisibility: divisibility,
                duration: UInt64.fromUint(duration)
            }), netWorkType, maxFee ? UInt64.fromUint(maxFee) : undefined);
            return [2 /*return*/, {
                    result: {
                        mosaicDefinitionTransaction: mosaicDefinitionTransaction
                    }
                }];
        });
    }); },
    mosaicSupplyChange: function (params) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var mosaicId, delta, netWorkType, MosaicSupplyType, maxFee, mosaicSupplyChangeTransaction;
        return tslib_1.__generator(this, function (_a) {
            mosaicId = params.mosaicId;
            delta = params.delta;
            netWorkType = params.netWorkType;
            MosaicSupplyType = params.MosaicSupplyType;
            maxFee = params.maxFee;
            mosaicSupplyChangeTransaction = MosaicSupplyChangeTransaction.create(Deadline.create(), mosaicId, MosaicSupplyType, UInt64.fromUint(delta), netWorkType, maxFee ? UInt64.fromUint(maxFee) : undefined);
            return [2 /*return*/, {
                    result: {
                        mosaicSupplyChangeTransaction: mosaicSupplyChangeTransaction
                    }
                }];
        });
    }); },
    getMosaics: function (params) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var mosaicsInfos;
        return tslib_1.__generator(this, function (_a) {
            mosaicsInfos = new MosaicHttp(params.node).getMosaics(params.mosaics);
            return [2 /*return*/, {
                    result: {
                        mosaicsInfos: mosaicsInfos
                    }
                }];
        });
    }); },
    getMosaicsNames: function (params) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var mosaicsNamesInfos;
        return tslib_1.__generator(this, function (_a) {
            mosaicsNamesInfos = new MosaicHttp(params.node).getMosaicsNames(params.mosaicIds);
            return [2 /*return*/, {
                    result: {
                        mosaicsNamesInfos: mosaicsNamesInfos
                    }
                }];
        });
    }); }
};
//# sourceMappingURL=sdkMosaic.js.map