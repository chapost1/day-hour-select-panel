export interface ISchedulingPanelMatrixStateItem {
  included: boolean;
  drag: {
    isOrigin: boolean;
    isSelection: boolean;
  };
}

export interface ISchedulingSummaryHourKeyDaysPair {
  hoursKey: string;
  days: number[];
}

export interface ISelectionRange {
  day: IMinMaxRange;
  hour: IMinMaxRange;
}

interface IMinMaxRange {
  max: number;
  min: number;
}

export interface IDayHour {
  day: number;
  hour: number;
}
