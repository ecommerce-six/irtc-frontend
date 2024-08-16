"use client";

import { useState } from "react";

type errorValue = string | null;

const useError = (defaultValue: errorValue = null) => {
  const [error, setError] = useState<errorValue>(defaultValue);

  return { error, setError };
};

export default useError;
