import { rest } from 'msw';
import { authRequests } from './requests';

export default [
  ...authRequests(rest),
];
