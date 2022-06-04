import { ChartRange, processTvlChartSeries } from "@dev-test/tvlChart";
import _ from "lodash";
import moment from "moment";

const SECONDS = 1 * 1000;
const MINUTES = 60 * SECONDS;
const HOURS = 60 * MINUTES;
const DAYS = 24 * HOURS;

function randomSubsquidData(
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

describe("TVL Chart Series", () => {
  test("Test with Single day", () => {
    const subsquidData: [number, number][] = [
      [1654278809477, 3],
      [1654271612229, 5],
      [1654268015774, 8],
    ];

    let range: ChartRange = "24h";
    const series24h = processTvlChartSeries(subsquidData, range);
    range = "1w";
    const series1w = processTvlChartSeries(subsquidData, range);
    range = "1m";
    const series1m = processTvlChartSeries(subsquidData, range);

    expect(series24h.length).toBe(4);
    expect(series1w.length).toBe(1);
    expect(series1m.length).toBe(1);
  });
  test("Test with no data", () => {
    const subsquidData: [number, number][] = [];

    let range: ChartRange = "24h";
    const series24h = processTvlChartSeries(subsquidData, range);
    range = "1w";
    const series1w = processTvlChartSeries(subsquidData, range);
    range = "1m";
    const series1m = processTvlChartSeries(subsquidData, range);

    expect(series24h.length).toBe(0);
    expect(series1w.length).toBe(0);
    expect(series1m.length).toBe(0);
  });
  test("Test with data generated (24h)", () => {
    const dummyDateRange = 2 * DAYS;
    let rightNow = Date.now();

    const expectedMinimum = moment(rightNow - dummyDateRange)
      .startOf("hour")
      .valueOf();
    const subsquidData: [number, number][] = randomSubsquidData(
      dummyDateRange,
      5000
    );

    let range: ChartRange = "24h";
    const series24h = processTvlChartSeries(subsquidData, range);

    let firstSeriesTimeStamp = series24h[0][0],
      lastSeriesTimeStamp = series24h[series24h.length - 1][0];
    expect(firstSeriesTimeStamp).toBeGreaterThanOrEqual(expectedMinimum);

    let hours = 0,
      hourStep = firstSeriesTimeStamp;
    while (hourStep <= lastSeriesTimeStamp) {
      hours = hours + 1;
      hourStep += 1 * HOURS;
    }

    expect(hours).toEqual(series24h.length);
  });
  test("Test with data generated (1w)", () => {
    const dummyDateRange = 15 * DAYS;
    let rightNow = Date.now();

    const expectedMinimum = moment(rightNow - dummyDateRange)
      .startOf("week")
      .valueOf();
    const subsquidData: [number, number][] = randomSubsquidData(
      dummyDateRange,
      5000
    );

    let range: ChartRange = "1w";
    const series24h = processTvlChartSeries(subsquidData, range);

    let firstSeriesTimeStamp = series24h[0][0],
      lastSeriesTimeStamp = series24h[series24h.length - 1][0];
    expect(firstSeriesTimeStamp).toBeGreaterThanOrEqual(expectedMinimum);

    let weeks = 0,
      weekStep = firstSeriesTimeStamp;
    while (weekStep <= lastSeriesTimeStamp) {
      weeks = weeks + 1;
      weekStep += 7 * DAYS;
    }

    expect(weeks).toEqual(series24h.length);
  });
});
