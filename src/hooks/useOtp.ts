import { useState, useCallback } from 'react';

interface OtpState {
  isSending: boolean;
  isVerifying: boolean;
  error: string | null;
  success: boolean;
}

interface UseOtpReturn extends OtpState {
  sendOtp: (phoneNumber: string, pincode: string) => Promise<boolean>;
  verifyOtp: (phoneNumber: string, otp: string) => Promise<boolean>;
  resetState: () => void;
}

// OTP expiry time in milliseconds (10 minutes)
const OTP_EXPIRY_TIME = 10 * 60 * 1000;
// Maximum allowed verification attempts
const MAX_VERIFICATION_ATTEMPTS = 3;

export const useOtp = (): UseOtpReturn => {
  const [state, setState] = useState<OtpState>({
    isSending: false,
    isVerifying: false,
    error: null,
    success: false
  });

  const resetState = useCallback(() => {
    setState({
      isSending: false,
      isVerifying: false,
      error: null,
      success: false
    });
  }, []);

  const sendOtp = useCallback(async (phoneNumber: string, pincode: string): Promise<boolean> => {
    setState(prev => ({ ...prev, isSending: true, error: null }));
    
    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber, pincode })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send OTP');
      }
      
      // Store the hash and timestamp in localStorage for later verification
      localStorage.setItem(`otp_${phoneNumber}`, JSON.stringify({
        hash: data.hash,
        timestamp: Date.now(),
        attempts: 0,
        pincode
      }));
      
      setState(prev => ({ ...prev, isSending: false, success: true }));
      return true;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to send OTP';
      setState(prev => ({ ...prev, isSending: false, error: errorMessage }));
      return false;
    }
  }, []);

  const verifyOtp = useCallback(async (phoneNumber: string, userOtp: string): Promise<boolean> => {
    setState(prev => ({ ...prev, isVerifying: true, error: null }));
    
    try {
      // Get stored OTP data from localStorage
      const storedData = localStorage.getItem(`otp_${phoneNumber}`);
      
      if (!storedData) {
        throw new Error('OTP session expired or not found. Please request a new OTP.');
      }
      
      const { hash, timestamp, attempts, pincode } = JSON.parse(storedData);
      
      // Check if OTP is expired
      if (Date.now() - timestamp > OTP_EXPIRY_TIME) {
        localStorage.removeItem(`otp_${phoneNumber}`);
        throw new Error('OTP has expired. Please request a new OTP.');
      }
      
      // Check if max attempts reached
      if (attempts >= MAX_VERIFICATION_ATTEMPTS) {
        localStorage.removeItem(`otp_${phoneNumber}`);
        throw new Error('Maximum verification attempts reached. Please request a new OTP.');
      }
      
      // Update attempts count
      localStorage.setItem(`otp_${phoneNumber}`, JSON.stringify({
        hash,
        timestamp,
        attempts: attempts + 1,
        pincode
      }));
      
      // Call verify API
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber, otp: userOtp })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Invalid OTP');
      }
      
      // Verify hash matches
      if (data.verificationHash !== hash) {
        throw new Error('Invalid OTP. Please try again.');
      }
      
      // OTP verified successfully
      localStorage.removeItem(`otp_${phoneNumber}`);
      setState(prev => ({ ...prev, isVerifying: false, success: true }));
      return true;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to verify OTP';
      setState(prev => ({ ...prev, isVerifying: false, error: errorMessage }));
      return false;
    }
  }, []);

  return {
    ...state,
    sendOtp,
    verifyOtp,
    resetState
  };
};

export default useOtp;