import _ from "lodash";

export function generateRandomSubsquidTvlData(
  ms: number,
  limit: number = 100,
  valueMin: number = 1000,
  valueMax: number = 5000
): [number, number][] {
  const max = Date.now();
  const min = max - ms;
  let data: [number, number][] = [];

  for (let i = 0; i < limit; i++) {
    const randomInRangeTs = Math.floor(_.random(min, max));
    const value = _.random(valueMin, valueMax);

    data.push([randomInRangeTs, value]);
  }

  return data.sort((a, b) => {
    return b[0] - a[0];
  });
}
