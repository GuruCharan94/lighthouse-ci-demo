const config = {
  extends: 'lighthouse:default',
  settings: {
    emulatedFormFactor: 'desktop',
	  disableStorageReset: true,
    throttlingMethod : 'provided',
  }
};
module.exports = config;