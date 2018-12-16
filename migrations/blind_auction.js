const blindAuction = artifacts.require("./blindAuction.sol")

module.exports = function(deployer) {
	deployer.deploy(blindAuction);
};