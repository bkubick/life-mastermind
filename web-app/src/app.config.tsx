// API Variables
const host = '127.0.0.1';
const port = '5001';
const protocol = 'http';
const apiURL = `${protocol}://${host}:${port}/`

/**
 * Beta Settings for turning on/off features on the application.
 * 
 * SIGNUP: Enable/Disable the signup flow.
 */
const BetaSettings = {
  SIGNUP: false,
}


/**
 * Configurations for the application.
 * 
 * API_URL: The URL for the backend API.
 * API_HEADERS: The headers to be sent with each API request.
 * LOG_API_REQUEST: Whether or not to log the API request.
 * API_REQUEST_TIMEOUT_MS: The timeout for each API request.
 * DEFAULT_TITLE: The default title for the application.
 * ENVIRONMENT: The environment the application is running in.
 * DEBUG: Whether or not to enable debug mode.
 * BETA: The beta settings for the application.
 */
const Config = {
  API_URL: apiURL,
  API_HEADERS: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  },
  LOG_API_REQUEST: false,
  API_REQUEST_TIMEOUT_MS: 10000,
  DEFAULT_TITLE: 'SB3 Investments',
  ENVIRONMENT: 'local',
  DEBUG: true,
  BETA: BetaSettings,
};

export default Config;
