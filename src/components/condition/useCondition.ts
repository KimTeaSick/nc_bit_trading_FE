import { useReducer } from "react";
import * as Type from "./condition";

export const useP_fluctuation = () => {
  const [condition, setCondition] = useReducer(
    (prev: Type.useP_fluctuationType, next: Type.useP_fluctuationType) => {
      return { ...prev, ...next };
    },
    {
      term: 0,

      prev: 0,
      now: 0,
      percent: 0,
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useP_range = () => {
  const [condition, setCondition] = useReducer(
    (prev: Type.useP_rangeType, next: Type.useP_rangeType) => {
      return { ...prev, ...next };
    },
    {
      term: 0,

      first_value: 0,
      second_value: 0,
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useV_avg_volume = () => {
  const [condition, setCondition] = useReducer(
    (prev: Type.useV_avg_volumeType, next: Type.useV_avg_volumeType) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,
      recent: 0,
      first: 0,
      second: 0,
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useMASP_comparison = () => {
  const [condition, setCondition] = useReducer(
    (prev: Type.useMASP_comparisonType, next: Type.useMASP_comparisonType) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      first: 0,
      second: 0,
      range: 0,
      percent: 0,
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useMASP_comparison_double = () => {
  const [condition, setCondition] = useReducer(
    (
      prev: Type.useMASP_comparison_doubleType,
      next: Type.useMASP_comparison_doubleType
    ) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      first_disparity_first_value: 0,
      first_comparision: "<",
      first_disparity_second_value: 0,
      second_disparity_first_value: 0,
      second_comparision: "<",
      second_disparity_second_value: 0,
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useMASP_disparity = () => {
  const [condition, setCondition] = useReducer(
    (prev: Type.useMASP_disparityType, next: Type.useMASP_disparityType) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      first_disparity: 0,
      second_disparity: 0,
      percent: 0,
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useMASP_trend = () => {
  const [condition, setCondition] = useReducer(
    (prev: Type.useMASP_trendType, next: Type.useMASP_trendType) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      disparity_term: 0,
      trend_type: "상승",
      trend_term: 0,
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useD_overRV = () => {
  const [condition, setCondition] = useReducer(
    (prev: Type.useD_overRVType, next: Type.useD_overRVType) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      disparity_term: 0,
      disparity_value: 0,
      trend_type: "상향",
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useD_rangeRV = () => {
  const [condition, setCondition] = useReducer(
    (prev: Type.useD_rangeRVType, next: Type.useD_rangeRVType) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      range: 0,
      firstRange_value: 0,
      secondRange_value: 0,
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useD_RV_up_down = () => {
  const [condition, setCondition] = useReducer(
    (prev: Type.useD_RV_up_downType, next: Type.useD_RV_up_downType) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      range: 0,
      disparity_value: 0,
      up_down: "이상",
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useD_trend = () => {
  const [condition, setCondition] = useReducer(
    (prev: Type.useD_trendType, next: Type.useD_trendType) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      range: 0,
      trend_term: 0,
      trend_type: "상승",
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useD_reverse = () => {
  const [condition, setCondition] = useReducer(
    (prev: Type.useD_reverseType, next: Type.useD_reverseType) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      range: 0,
      trend_term: 0,
      trend_type: "상승",
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useMACD_line_over = () => {
  const [condition, setCondition] = useReducer(
    (prev: Type.useMACD_line_overType, next: Type.useMACD_line_overType) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      shot: 0,
      long: 0,
      signal: 0,
      line_over: "상향",
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useMACD_line_comparison = () => {
  const [condition, setCondition] = useReducer(
    (
      prev: Type.useMACD_line_comparisonType,
      next: Type.useMACD_line_comparisonType
    ) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      shot: 0,
      long: 0,
      signal: 0,
      line_comparison: "이하",
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useMACD_value_over = () => {
  const [condition, setCondition] = useReducer(
    (prev: Type.useMACD_value_overType, next: Type.useMACD_value_overType) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      shot: 0,
      long: 0,
      value: 0,
      value_over_type: "상향",
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useMACD_value_up_down = () => {
  const [condition, setCondition] = useReducer(
    (
      prev: Type.useMACD_value_up_downType,
      next: Type.useMACD_value_up_downType
    ) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      shot: 0,
      long: 0,
      value: 0,
      value_up_down: "이하",
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useMACD_value_range = () => {
  const [condition, setCondition] = useReducer(
    (
      prev: Type.useMACD_value_rangeType,
      next: Type.useMACD_value_rangeType
    ) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      shot: 0,
      long: 0,
      value_range_one: 0,
      value_range_two: 0,
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useMACD_trend = () => {
  const [condition, setCondition] = useReducer(
    (prev: Type.useMACD_trendType, next: Type.useMACD_trendType) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      shot: 0,
      long: 0,
      trend_term: 0,
      trend_type: "상승",
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useMACD_reverse = () => {
  const [condition, setCondition] = useReducer(
    (prev: Type.useMACD_reverseType, next: Type.useMACD_reverseType) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      shot: 0,
      long: 0,
      trend_term: 0,
      trend_type: "상승",
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useMACDS_value_over = () => {
  const [condition, setCondition] = useReducer(
    (
      prev: Type.useMACDS_value_overType,
      next: Type.useMACDS_value_overType
    ) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      shot: 0,
      long: 0,
      signal: 0,
      value: 0,
      value_over_type: "상향",
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useMACDS_value_up_down = () => {
  const [condition, setCondition] = useReducer(
    (
      prev: Type.useMACDS_value_up_downType,
      next: Type.useMACDS_value_up_downType
    ) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      shot: 0,
      long: 0,
      signal: 0,
      value: 0,
      value_up_down: "이하",
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useMACDS_value_range = () => {
  const [condition, setCondition] = useReducer(
    (
      prev: Type.useMACDS_value_rangeType,
      next: Type.useMACDS_value_rangeType
    ) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      shot: 0,
      long: 0,
      signal: 0,
      value_range_one: 0,
      value_range_two: 0,
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useMACDS_trend = () => {
  const [condition, setCondition] = useReducer(
    (prev: Type.useMACDS_trendType, next: Type.useMACDS_trendType) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      shot: 0,
      long: 0,
      signal: 0,
      trend_term: 0,
      trend_type: "상승",
    }
  );
  console.log(condition);
  return [condition, setCondition];
};

export const useMACDS_reverse = () => {
  const [condition, setCondition] = useReducer(
    (prev: Type.useMACDS_reverseType, next: Type.useMACDS_reverseType) => {
      return { ...prev, ...next };
    },
    {
      term: 0,
      timeing: 0,

      shot: 0,
      long: 0,
      signal: 0,
      trend_term: 0,
      trend_type: "상승",
    }
  );
  console.log(condition);
  return [condition, setCondition];
};
