'use client';

import { motion } from 'framer-motion';

interface SukoonLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
  showRipple?: boolean;
  showUrdu?: boolean;
}

const sizes = {
  sm: { logo: 32, urdu: 'text-lg', english: 'text-xl' },
  md: { logo: 40, urdu: 'text-xl', english: 'text-2xl' },
  lg: { logo: 56, urdu: 'text-3xl', english: 'text-4xl' },
  xl: { logo: 80, urdu: 'text-5xl', english: 'text-6xl' },
};

export default function SukoonLogo({
  className = '',
  size = 'md',
  variant = 'dark',
  showRipple = true,
  showUrdu = true
}: SukoonLogoProps) {
  const { logo, urdu, english } = sizes[size];
  const primaryColor = variant === 'dark' ? '#C9A86C' : '#ffffff';
  const textColor = variant === 'dark' ? '#3D2B1F' : '#ffffff';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Mark with Ripple */}
      <div className="relative" style={{ width: logo, height: logo }}>
        {/* Ripple Effects */}
        {showRipple && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: `2px solid ${primaryColor}`,
                opacity: 0.3,
              }}
              animate={{
                scale: [1, 1.8, 2.2],
                opacity: [0.4, 0.1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: `2px solid ${primaryColor}`,
                opacity: 0.3,
              }}
              animate={{
                scale: [1, 1.8, 2.2],
                opacity: [0.4, 0.1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: `1px solid ${primaryColor}`,
                opacity: 0.2,
              }}
              animate={{
                scale: [1, 1.8, 2.2],
                opacity: [0.3, 0.1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
                delay: 2,
              }}
            />
          </>
        )}

        {/* Main Logo Symbol - Stylized S with inner peace symbol */}
        <motion.svg
          width={logo}
          height={logo}
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Outer Circle */}
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke={primaryColor}
            strokeWidth="2"
            fill="none"
          />

          {/* Inner decorative circle */}
          <circle
            cx="40"
            cy="40"
            r="28"
            stroke={primaryColor}
            strokeWidth="1"
            strokeDasharray="4 4"
            fill="none"
            opacity="0.5"
          />

          {/* Stylized Sukoon symbol - inspired by Arabic diacritical mark */}
          <motion.path
            d="M28 45 Q32 38, 40 38 Q48 38, 52 45"
            stroke={primaryColor}
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            animate={{
              d: [
                "M28 45 Q32 38, 40 38 Q48 38, 52 45",
                "M28 44 Q32 36, 40 36 Q48 36, 52 44",
                "M28 45 Q32 38, 40 38 Q48 38, 52 45",
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Dot above - represents peace/sukoon in Arabic */}
          <motion.circle
            cx="40"
            cy="30"
            r="4"
            fill={primaryColor}
            animate={{
              cy: [30, 28, 30],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Small decorative dots */}
          <circle cx="26" cy="50" r="2" fill={primaryColor} opacity="0.6" />
          <circle cx="54" cy="50" r="2" fill={primaryColor} opacity="0.6" />
        </motion.svg>
      </div>

      {/* Text */}
      <div className="flex flex-col leading-none">
        {showUrdu && (
          <motion.span
            className={`font-medium ${urdu}`}
            style={{
              color: primaryColor,
              fontFamily: "'Noto Nastaliq Urdu', serif",
              lineHeight: 1.2,
            }}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            سکون
          </motion.span>
        )}
        <motion.span
          className={`font-heading font-medium tracking-wide ${english}`}
          style={{ color: textColor }}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Sukoon
        </motion.span>
      </div>
    </div>
  );
}
