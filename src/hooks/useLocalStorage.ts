import { useState, useEffect } from 'react';

/**
 * Custom hook for managing state that persists in localStorage
 * 
 * @param key - The localStorage key to store the value under
 * @param initialValue - The initial value to use if no value exists in localStorage
 * @returns A stateful value and a function to update it
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // Using a function in useState to avoid running this logic on every render
  // This is a performance optimization I learned from Kent C. Dodds
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Check if localStorage is available (can throw in some environments)
      if (typeof window === 'undefined') {
        return initialValue;
      }
      
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      
      // Parse stored json or if none return initialValue
      // NOTE: This can throw if the JSON is malformed
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      // This happened once in Firefox private browsing mode
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Enhanced setter function that also updates localStorage
  // Accepts either a new value or a function that returns a new value
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Handle functional updates the same way useState does
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      
      // Update React state
      setStoredValue(valueToStore);
      
      // Update localStorage
      // TODO: Consider adding debounce for frequently updated values
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // This shouldn't happen often, but good to handle it
      console.error(`Error setting localStorage key "${key}":`, error);
      // Could add retry logic here if needed
    }
  };

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
    }
  }, [key]);

  return [storedValue, setValue];
}