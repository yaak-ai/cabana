import { getUrlParameter } from './utils/url';

const ENV = process.env.NODE_ENV === 'production' ? 'prod' : 'debug';

const ENV_GITHUB_CLIENT_ID = {
};
export const GITHUB_CLIENT_ID = ENV_GITHUB_CLIENT_ID[ENV];

const ENV_GITHUB_REDIRECT_URL = {

};
export const GITHUB_REDIRECT_URL = ENV_GITHUB_REDIRECT_URL[ENV];
export const GITHUB_AUTH_TOKEN_KEY = 'gh_access_token';
export const OPENDBC_SOURCE_REPO = 'commaai/opendbc';

export const USE_UNLOGGER = typeof window !== 'undefined' && getUrlParameter('unlogger') !== null;
export const UNLOGGER_HOST = 'http://localhost:8080/unlogger';

export const LOGENTRIES_TOKEN = '4bc98019-8277-4fe0-867c-ed21ea843cc5';

export const PART_SEGMENT_LENGTH = 3;

export const CAN_GRAPH_MAX_POINTS = 5000;

export const STREAMING_WINDOW = 60;

const ENV_EXPLORER_URL = {
  debug: 'http://localhost:3000/',
  prod: 'http://explorer.yaak.ai.s3-website.eu-west-2.amazonaws.com/'
};
export const EXPLORER_URL = ENV_EXPLORER_URL[ENV];
