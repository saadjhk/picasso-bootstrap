import { ChartRange } from "@dev-test/types";
import _ from "lodash";
import moment from "moment";

function getSelectedChartRangeLimitTimestamp(
  timestamp: number,
  rangeLimit: "start" | "end",
  chartInterval: ChartRange
): number {
  switch (chartInterval) {
    case "24h":
      return rangeLimit == "start" ? moment(timestamp).startOf("h").valueOf() : moment(timestamp).endOf("h").valueOf();
    case "1w":
      return rangeLimit == "start"
        ? moment(timestamp).startOf("week").valueOf()
        : moment(timestamp).endOf("week").valueOf();
    case "1m":
      return rangeLimit == "start"
        ? moment(timestamp).startOf("month").valueOf()
        : moment(timestamp).endOf("month").valueOf();
    default:
      return timestamp;
  }
}

function getNextRangeGivenTimestamp(rangeTs: number, range: ChartRange): [number, number] {
  switch (range) {
    case "24h":
      let nextHourRange = moment(rangeTs).add(1, "hour");
      return [nextHourRange.valueOf(), nextHourRange.endOf("hour").valueOf()];
    case "1w":
      let nextWeekRange = moment(rangeTs).add(1, "week");
      return [nextWeekRange.valueOf(), nextWeekRange.endOf("week").valueOf()];
    case "1m":
      let nextMonthRange = moment(rangeTs).add(1, "month");
      return [nextMonthRange.valueOf(), nextMonthRange.endOf("month").valueOf()];
  }
}

export function processSubsquidTvlChartData(data: [number, number][], range: ChartRange): [number, number][] {
  if (!data.length) return data;

  let rangeStart = Array.from(new Set(data.map(i => getSelectedChartRangeLimitTimestamp(i[0], "start", range))));
  let rangeEnd = Array.from(new Set(data.map(i => getSelectedChartRangeLimitTimestamp(i[0], "end", range))));

  let withMissingIntervals: [number, number][] = [];
  for (let i = rangeStart.length - 1; i >= 0; i--) {
    let totalValueLocked = 0;

    for (let tvlIndex = data.length - 1; tvlIndex >= 0; tvlIndex--) {
      if (data[tvlIndex][0] > rangeStart[i] && data[tvlIndex][0] < rangeEnd[i]) {
        totalValueLocked = data[tvlIndex][1]; // care about the latest index only
      }
    }

    withMissingIntervals.push([rangeStart[i], totalValueLocked]);
    let nextRange = getNextRangeGivenTimestamp(rangeStart[i], range);

    while (nextRange[0] !== rangeStart[i - 1] && i > 0) {
      withMissingIntervals.push([nextRange[0], totalValueLocked]);
      nextRange = getNextRangeGivenTimestamp(nextRange[0], range);
    }
  }

  return withMissingIntervals;
}
