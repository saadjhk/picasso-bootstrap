import BigNumber from "bignumber.js";

export function fromChainUnits(
  amount: string | number,
  decimals: number = 12
): BigNumber {
  const base = new BigNumber(10);
  return new BigNumber(amount).div(base.pow(decimals));
}

export function toChainUnits(
  amount: string | number | BigNumber,
  decimals: number = 12
): BigNumber {
  const base = new BigNumber(10);
  return new BigNumber(amount).times(base.pow(decimals));
}

export function createRPC(definitions: any): any {
  return Object.keys(definitions)
    .filter((k) => {
      if (!(definitions as any)[k].rpc) {
        return false;
      } else {
        return Object.keys((definitions as any)[k].rpc).length > 0;
      }
    })
    .reduce(
      (accumulator, key) => ({
        ...accumulator,
        [key]: (definitions as any)[key].rpc,
      }),
      {}
    );
}

export function createTypes(definitions: any): any {
  return Object.keys(definitions)
    .filter((key) => Object.keys((definitions as any)[key].types).length > 0)
    .reduce(
      (accumulator, key) => ({
        ...accumulator,
        ...(definitions as any)[key].types,
      }),
      {}
    );
}
