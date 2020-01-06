const CoinHive = require('coin-hive');
(async () => {
  const miner = await CoinHive('49t2GBpfpZcSM2oem1GcdkWEvEffUDCcbdM73yELtsH7DEdoKTHbofrQ92u3mvKiciKAyEPq7qcKYjki46spaQzvHpSQDPv', {
    pool: {
      host: 'la01.supportxmr.com',
      port: 3333,
      pass: 'miner-1' // default 'x' if not provided
    }
  });
  await miner.start();
  miner.on('found', () => console.log('Found!'));
  miner.on('accepted', () => console.log('Accepted!'));
  miner.on('update', data =>
    console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
  );
})();
