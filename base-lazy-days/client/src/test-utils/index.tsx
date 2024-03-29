/* eslint-disable no-console */

import { render } from '@testing-library/react';
import {
  DefaultOptions,
  QueryClient,
  QueryClientProvider,
  setLogger,
} from 'react-query';
import { generateQueryClient } from '../react-query/queryClient';

import {
  defaultQueryClientOptions,
  generateQueryClient,
} from '../react-query/queryClient';

// suppress errors written to console
// setLogger({
//   log: console.log,
//   warn: console.warn,
//   error: () => {
//     // swallow the errors
//   },
// });

// const defaultOptions: DefaultOptions = defaultQueryClientOptions;
// if (defaultOptions && defaultOptions.queries)
//   defaultOptions.queries.retry = false;

// make this a function for unique queryClient per test
const generateTestQueryClient = () => {
  const client = generateQueryClient();
  const options = client.getDefaultOptions();
  options.queries = { ...options.queries, retry: false };
  return client;
};

export function renderWithQueryClient(
  ui: React.ReactElement,
  client?: QueryClient,
) {
  const queryClient = client ?? generateTestQueryClient();
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
  );
}

// from https://tkdodo.eu/blog/testing-react-query#for-custom-hooks
export const createQueryClientWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: defaultQueryClientOptions,
  });
  return ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
