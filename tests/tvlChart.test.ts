import { ChartRange, processTvlChartSeries } from "@dev-test/tvlChart";

describe('TVL Chart Series', () => {
  test('Test with Single day', () => {
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

    expect(series24h.length).toBe(4)
    expect(series1w.length).toBe(1)
    expect(series1m.length).toBe(1)
  });
  test('Test with no data', () => {
    const subsquidData: [number, number][] = [
    ];

    let range: ChartRange = "24h";
    const series24h = processTvlChartSeries(subsquidData, range);
    range = "1w";
    const series1w = processTvlChartSeries(subsquidData, range);
    range = "1m";
    const series1m = processTvlChartSeries(subsquidData, range);

    expect(series24h.length).toBe(0)
    expect(series1w.length).toBe(0)
    expect(series1m.length).toBe(0)
  });
});