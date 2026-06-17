import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

export default function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'नमस्ते! मैं Hay हूँ, आपका AI सहायक। मैं आपको कैसे मदद कर सकता हूँ?',
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'यह एक demo response है। असली API को integrate करने के लिए OpenAI API का उपयोग करें।',
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />

      {/* Header */}
      <View className="bg-gray-800 px-4 py-3 border-b border-gray-700">
        <Text className="text-white text-xl font-bold">💫 Hay</Text>
        <Text className="text-gray-400 text-xs mt-1">Premium AI Chat</Text>
      </View>

      {/* Messages */}
      <ScrollView
        ref={scrollViewRef}
        className="flex-1 px-3 py-4"
        showsVerticalScrollIndicator={false}
      >
        {messages.map((message) => (
          <View
            key={message.id}
            className={`mb-3 flex ${message.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <View
              className={`max-w-xs px-4 py-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-600 rounded-br-none'
                  : 'bg-gray-800 rounded-bl-none border border-gray-700'
              }`}
            >
              <Text
                className={`${
                  message.sender === 'user' ? 'text-white' : 'text-gray-100'
                }`}
              >
                {message.text}
              </Text>
              <Text
                className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'
                }`}
              >
                {message.timestamp}
              </Text>
            </View>
          </View>
        ))}

        {isLoading && (
          <View className="flex items-start mb-3">
            <View className="bg-gray-800 px-4 py-3 rounded-lg border border-gray-700">
              <ActivityIndicator color="#0ea5e9" />
            </View>
          </View>
        )}
      </ScrollView>

      {/* Input Area */}
      <View className="bg-gray-800 border-t border-gray-700 px-3 py-4">
        <View className="flex-row items-center gap-2">
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="अपना संदेश यहाँ लिखें..."
            placeholderTextColor="#666"
            className="flex-1 bg-gray-700 text-white px-3 py-3 rounded-lg"
            editable={!isLoading}
          />
          <TouchableOpacity
            onPress={handleSendMessage}
            disabled={isLoading || !input.trim()}
            className="bg-blue-600 p-3 rounded-lg disabled:opacity-50"
          >
            <MaterialIcons name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <Text className="text-gray-500 text-xs text-center mt-2">
          Premium AI - Fast & Accurate
        </Text>
      </View>
    </SafeAreaView>
  );
}
