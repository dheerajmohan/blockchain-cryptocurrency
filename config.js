const INITIAL_DIFFICULTY = 3;
const MINE_RATE = 1000;

const GENESIS_DATA = {
	timestamp: '000',
	lastHash: '----',
	hash: 'hash-one',
	difficulty: INITIAL_DIFFICULTY,
	nonce: 0,
	data: []
};

const STARTING_BALANCE = 1000;

const TOTAL_STORE = 100000000; // 100,000,000

const REWARD_INPUT = {
	address: '*authorized-reward*'
};

const MINING_REWARD = 50;

module.exports = {
	GENESIS_DATA, 
	MINE_RATE, 
	TOTAL_STORE,
	STARTING_BALANCE,
	REWARD_INPUT,
	MINING_REWARD
};