import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw } from "lucide-react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F5F1EB] flex items-center justify-center px-4">
          <motion.div
            className="bg-white rounded-[30px] border-4 border-black p-8 shadow-2xl text-center max-w-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <motion.div
              className="w-16 h-16 bg-[#FF6B6B] rounded-full border-4 border-black flex items-center justify-center mx-auto mb-6"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AlertTriangle className="w-8 h-8 text-white" />
            </motion.div>
            
            <h2 className="text-2xl font-black text-black mb-4">
              Oops! Something went wrong
            </h2>
            
            <p className="text-gray-700 font-medium mb-6">
              Don't worry, this happens sometimes. Let's get you back on track!
            </p>
            
            <motion.button
              onClick={() => window.location.reload()}
              className="flex items-center gap-3 px-6 py-3 bg-[#FF6B6B] text-white font-black rounded-full border-4 border-black shadow-lg mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCw className="w-5 h-5" />
              Refresh Page
            </motion.button>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;