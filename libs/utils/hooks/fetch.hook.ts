import { DependencyList, useEffect, useState } from "react";

interface State<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
  loaded: boolean;
}

export function useFetch<T>(
  input: RequestInfo,
  initOrDeps: RequestInit | DependencyList = [],
  deps: DependencyList = []
): State<T> {
  deps = initOrDeps instanceof Array ? initOrDeps : deps;
  const init = !(initOrDeps instanceof Array) ? initOrDeps : undefined;

  const [state, setState] = useState<State<T>>({
    data: null,
    loading: true,
    loaded: false,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      const response = await fetch(input, {
        ...init,
        signal: controller.signal,
      });
      if (response.ok) {
        setState({
          data: await response.json(),
          loading: false,
          loaded: true,
          error: null,
        });
      }

      setState({
        data: null,
        loading: false,
        loaded: true,
        error: new Error(response.statusText),
      });
    })();

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}
