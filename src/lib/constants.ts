/**
 * Constants used throughout the application
 */

export const APP_NAME = 'Hay';
export const APP_VERSION = '1.0.0';
export const APP_DESCRIPTION = 'Premium AI Chat Application';

export const API_ENDPOINTS = {
  CHAT: '/api/chat',
  HEALTH: '/api/health',
} as const;

export const UI_CONSTANTS = {
  ANIMATION_DURATION: 300,
  DEBOUNCE_DELAY: 500,
  TOAST_DURATION: 3000,
} as const;

export const MESSAGE_LIMITS = {
  MAX_LENGTH: 2000,
  MIN_LENGTH: 1,
} as const;
