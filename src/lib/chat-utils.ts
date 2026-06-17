/**
 * Type-safe API utilities for chat operations
 */

import api from './api';
import { ApiResponse, ChatMessage } from '@/types/chat';

export async function sendChatMessage(message: string): Promise<ApiResponse> {
  try {
    const response = await api.post<ApiResponse>('/api/chat', { message });
    return response.data;
  } catch (error) {
    console.error('Chat error:', error);
    throw new Error('Failed to send message');
  }
}

export async function healthCheck(): Promise<boolean> {
  try {
    const response = await api.get('/api/health');
    return response.status === 200;
  } catch (error) {
    console.error('Health check failed:', error);
    return false;
  }
}
