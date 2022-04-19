  //     // peter dot wallets
  //     "5uymjr2xLL14upmg4nezH5LZMNgenGn7MrbQ2WnJ7dhcDb4C",
  //     "5z6opGwNemAtYG7o7KehBn2KdKbGPw64E23ZpwxcXoGiwufL",
  //     "E4syq7LfkjrZuqofYRg5dX2zzd8DR54p82F2BHuFLqHHGm6",
  //     "GRxsfLzj5wthacZ6bYSdL9FNosAMFBkVhcwWWxGtMsCSx8G",
  //     "FhJDi6usuBii4kbHEiUbYcd2a1yXk5CJCJEkxr2BT3wqHmc",
  //     "5GgjZECB6XsH3iao7rg6dDbMG9urjsWVjinDBF2ngqWFxyoC",
  //     "F53d3jeyFvb2eYsgAERhjC8mogao4Kg4GsdezrqiT8aj55v" // liviu
  //     // peter eth wallets
  //     "0x33Cd07B1ae8485a6090091ee55389237eCB0Aed4",
  //     "0xfe302f2D69cAf32d71812587ECcd4fcDF8287E22",
  //     "0x38650E1FD89E6bBEfDD2f150190C70da02454b93",

  // let netRewards = Object.values(rewardsDev).reduce((acc, c) => {
  //   let bnAcc = new BigNumber(acc);
  //   bnAcc = bnAcc.plus(new BigNumber(c));
  //   return bnAcc.toString();
  // }, "0");
  // let decimals = new BigNumber(10).pow(12);
  // let base = new BigNumber(netRewards).times(decimals);
  // const palletId = "5w3oyasYQg6vkbxZKeMG8Dz2evBw1P7Xr7xhVwk4qwwFkm8u";
  // let mintResponse = await sendAndWaitForSuccess(
  //   api,
  //   walletSudo,
  //   api.events.sudo.Sudid.is,
  //   api.tx.sudo.sudo(api.tx.assets.mintInto(1, walletSudo.publicKey, api.createType("u128", base.toString())))
  // );
  // console.log(mintResponse.data.toHuman())
  // let transferResponse = await sendAndWaitFor(
  //   api,
  //   walletSudo,
  //   api.events.balances.Transfer.is,
  //   api.tx.assets.transfer(
  //     1,
  //     palletId,
  //     api.createType("u128", base.toString()),
  //     true
  //   )
  // )
  // console.log(transferResponse.data.toHuman())
  // const crPopRes = await crowdloanRewardsPopulateJSON(
  //   api,
  //   walletSudo,
  //   Object.keys(rewardsDev).filter(addr => !addr.startsWith("0x")).map((rewardAccount: string) => {
  //     return {
  //       address: rewardAccount,
  //       rewards: (rewardsDev as any)[rewardAccount]
  //     }
  //   }),
  //   Object.keys(rewardsDev).filter(addr => addr.startsWith("0x")).map((rewardAccount: string) => {
  //     return {
  //       address: rewardAccount,
  //       rewards: (rewardsDev as any)[rewardAccount]
  //     }
  //   })
  // );
  // console.log(crPopRes.data.toHuman());
  // const initRes = await initialize(api, walletSudo);
  // console.log(initRes.data.toHuman());