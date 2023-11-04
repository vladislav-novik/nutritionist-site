import classNames from "classnames"

export default function Broccoli({ className, traceStroke }: { className: string, traceStroke?: string }) {
  return (
    <svg
      fill="none"
      className={classNames(className)}
      viewBox="0 0 100.00 100.00"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      stroke="currentColor"
      strokeWidth="0.001"
    >
      <g strokeWidth="0"></g>
      <g
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={traceStroke || 'currentColor'}
        strokeWidth="2"
      >
        <path d="M89.61,46.77c-2.27,3.16-5.43,4.3-7.1,4.71c-0.08,0.02-0.15,0.05-0.2,0.1c-0.87-2.46-1.75-4.4-2.43-5.54 c1.35-0.49,2.69-1.25,3.86-2.43c2.75-2.79,3.59-6.27,2.35-9.8c-0.37-1.06-0.91-1.93-1.5-2.66c0,0,0,0,0-0.01 c0.06-0.35,0.24-1.72,0.21-3.61c1.61,0.81,4.72,2.81,6.3,6.83C92.71,38.49,92.15,43.25,89.61,46.77z"></path>
        <path d="M85.14,34.14c-0.89-2.55-2.89-3.96-3.99-4.57c-0.25-0.13-0.33-0.44-0.2-0.68c0.13-0.24,0.44-0.33,0.68-0.19 c0.56,0.3,1.31,0.8,2.07,1.51c0.25-2.44,0.48-9.57-4.35-14.7c-2.97-3.16-7.22-5.05-11.95-5.32c-5.61-0.32-9.8,2-11.8,3.4 c-0.2,0.14-0.46,0.12-0.64-0.05l-0.46-0.45c-1.68-1.66-4.21-4.16-9.04-5.37C42.4,6.94,36.41,6.11,30.7,9.23 c-4.6,2.51-6.9,6.57-7.87,8.76c-0.07,0.16-0.22,0.28-0.41,0.29c-1.69,0.17-4.97,0.81-7.91,3.27c-1.77,1.49-3.04,3.2-3.79,5.1 C8.26,32.88,12.51,39.13,13,39.82c0.16,0.23,0.11,0.53-0.11,0.7c-1.57,1.14-2.84,2.61-3.68,4.26c-2.8,5.53,0.08,11.19,0.42,11.81 c1.84,3.42,4.78,5.18,6.37,5.93c0.05,0.02,0.08,0.05,0.12,0.09c0.11-0.33,0.23-0.65,0.38-0.98c0.69-1.59,2.79-5.47,7.38-7.1 c0.62-0.21,1.22-0.36,1.8-0.47c-0.98-1.29-3.27-4.91-2.11-9.34c0.76-2.91,2.64-4.75,3.87-5.69c-0.4-1.19-1.16-4.4,0.73-7.61 c2.28-3.89,6.52-4.4,7-4.45c0.27-0.02,0.52,0.17,0.54,0.45c0.03,0.27-0.17,0.52-0.45,0.54c-0.42,0.05-4.2,0.51-6.23,3.97 c-1.91,3.24-0.78,6.48-0.53,7.1c0.09,0.21,0.02,0.46-0.17,0.59c-1.1,0.77-3.05,2.49-3.8,5.35c-1.24,4.74,1.92,8.5,2.29,8.91 c0,0.01,0,0.01,0.01,0.02c2.18-0.2,4.05,0.2,5.25,0.59c0.88-1.17,3.62-4.27,8.05-4.51c4.99-0.26,8.57,3.14,10.12,6.15 c0.17,0.31,0.31,0.64,0.44,0.96c0.05-0.19,0.22-0.34,0.43-0.36c0.32-0.03,7.83-0.73,12.14-7.39c1.88-2.89,2.21-6.86,0.88-10.34 c-0.97-2.53-2.68-4.35-4.57-4.86c-0.27-0.07-0.43-0.35-0.36-0.61c0.08-0.27,0.35-0.43,0.62-0.36c0.99,0.27,1.92,0.84,2.75,1.63 c-0.18-3.42-1.65-6.24-4.24-8.01c-3.2-2.18-7.75-2.52-11.6-0.85c-0.26,0.11-0.55,0-0.66-0.26c-0.11-0.25,0.01-0.55,0.26-0.66 c4.16-1.8,9.09-1.43,12.57,0.95c3.15,2.15,4.8,5.69,4.69,9.97c0.58,0.78,1.09,1.69,1.47,2.7c0.49,1.26,0.75,2.58,0.83,3.9 c1.77,1.49,4.75,3.11,8.02,3.32c1.75,0.11,6.14,0.04,9.11-2.95C84.78,41.14,86.56,38.18,85.14,34.14z M18.31,35.07 c-0.41,0.35-2.49,2.27-2.45,5.33c0.03,2.66,1.66,4.41,2.16,4.88c0.2,0.19,0.2,0.5,0.02,0.7c-0.1,0.11-0.24,0.16-0.37,0.16 c-0.12,0-0.25-0.04-0.34-0.14c-0.57-0.54-2.43-2.53-2.47-5.59c-0.05-3.51,2.33-5.7,2.81-6.1c0.21-0.18,0.52-0.16,0.7,0.06 C18.55,34.58,18.52,34.89,18.31,35.07z M40.55,14.45c-0.08,0.26-0.36,0.41-0.63,0.32c-3.02-1.01-6.32-0.12-8.22,2.22 c-2.43,2.98-1.24,6.75-1.19,6.91c0.08,0.26-0.06,0.54-0.32,0.63c-0.05,0.02-0.11,0.02-0.16,0.02c-0.21,0-0.4-0.13-0.47-0.34 c-0.15-0.45-1.36-4.51,1.36-7.85c2.16-2.66,5.91-3.68,9.32-2.54C40.5,13.91,40.64,14.19,40.55,14.45z M77.2,26.18 c-0.07,0.2-0.26,0.32-0.46,0.32c-0.06,0-0.12-0.01-0.19-0.04c-0.25-0.1-0.38-0.39-0.28-0.65c0.95-2.39,0.29-5.12-1.58-6.49 c-2.08-1.52-4.58-0.46-4.68-0.41c-0.26,0.11-0.55,0-0.66-0.26c-0.11-0.25,0-0.55,0.26-0.66c0.12-0.05,3.13-1.33,5.67,0.53 C77.51,20.15,78.32,23.37,77.2,26.18z"></path>
        <path d="M84.32,65.52c-0.82-9.47-4.1-17.04-5.42-19.16c-1.44,0.4-2.84,0.53-3.97,0.53c-0.39,0-0.75-0.02-1.07-0.04 c-3.13-0.2-6.01-1.59-7.94-3.02c-0.08,2.18-0.68,4.3-1.82,6.05c-4.5,6.95-12.05,7.77-12.89,7.85h-0.05c-0.1,0-0.19-0.04-0.27-0.09 c1.23,3.63,0.53,7.8-1.96,11c-0.17,0.22-0.48,0.26-0.7,0.09c-0.22-0.17-0.26-0.48-0.09-0.7c2.6-3.35,3.08-7.85,1.22-11.45 c-1.41-2.73-4.67-5.85-9.17-5.6c-4.46,0.24-7.04,3.7-7.51,4.39c-0.13,0.19-0.37,0.26-0.59,0.18c-1.49-0.54-4.5-1.27-7.87-0.07 c-4.23,1.49-6.17,5.08-6.81,6.55c-2.17,5-0.13,9.68,0.55,11c2.16,4.21,5.88,5.99,7.68,6.63c0.02-1,0.17-1.77,0.24-2.07 c0.06-0.27,0.32-0.44,0.6-0.38c0.26,0.07,0.43,0.33,0.37,0.6c-0.16,0.7-0.83,4.28,1.41,6.87c2.54,2.93,7.83,3.17,11.11,0.49 c2.28-1.87,3.33-5.04,2.79-8.2c-0.23,0.09-0.47,0.15-0.73,0.19c-0.22,0.04-0.45,0.06-0.67,0.06c-1.35,0-2.64-0.64-3.47-1.76 c-0.17-0.22-0.12-0.53,0.1-0.7c0.22-0.16,0.53-0.12,0.7,0.1c0.75,1.01,1.97,1.51,3.19,1.32c1.31-0.21,2.39-1.24,2.7-2.56 c0.06-0.27,0.33-0.43,0.6-0.37c0.27,0.06,0.43,0.33,0.37,0.6c-0.26,1.13-0.94,2.06-1.85,2.66c0.3,1.51,0.26,3.01-0.07,4.42 c2.89,1.03,7.54,4.8,9.17,9.58c0.21,0.58,0.7,1.05,1.32,1.24c2.58,0.81,8.02,1.97,15.45,0.67c8.98-1.57,12.11-5.28,12.24-5.43 C82.13,85.88,85.34,77.35,84.32,65.52z M27.13,73.25c-0.09,0.17-0.26,0.27-0.45,0.27c-0.07,0-0.15-0.02-0.22-0.05 c-1.82-0.92-2.89-2.81-2.67-4.71c0.26-2.18,2.05-3.28,2.41-3.48c0.24-0.13,0.55-0.05,0.68,0.2c0.13,0.24,0.05,0.54-0.19,0.68 c-0.18,0.09-1.7,0.99-1.9,2.71c-0.18,1.49,0.67,2.98,2.12,3.7C27.15,72.7,27.25,73,27.13,73.25z"></path>
      </g>
      <g id="SVGRepo_iconCarrier">
        <path d="M89.61,46.77c-2.27,3.16-5.43,4.3-7.1,4.71c-0.08,0.02-0.15,0.05-0.2,0.1c-0.87-2.46-1.75-4.4-2.43-5.54 c1.35-0.49,2.69-1.25,3.86-2.43c2.75-2.79,3.59-6.27,2.35-9.8c-0.37-1.06-0.91-1.93-1.5-2.66c0,0,0,0,0-0.01 c0.06-0.35,0.24-1.72,0.21-3.61c1.61,0.81,4.72,2.81,6.3,6.83C92.71,38.49,92.15,43.25,89.61,46.77z"></path>
        <path d="M85.14,34.14c-0.89-2.55-2.89-3.96-3.99-4.57c-0.25-0.13-0.33-0.44-0.2-0.68c0.13-0.24,0.44-0.33,0.68-0.19 c0.56,0.3,1.31,0.8,2.07,1.51c0.25-2.44,0.48-9.57-4.35-14.7c-2.97-3.16-7.22-5.05-11.95-5.32c-5.61-0.32-9.8,2-11.8,3.4 c-0.2,0.14-0.46,0.12-0.64-0.05l-0.46-0.45c-1.68-1.66-4.21-4.16-9.04-5.37C42.4,6.94,36.41,6.11,30.7,9.23 c-4.6,2.51-6.9,6.57-7.87,8.76c-0.07,0.16-0.22,0.28-0.41,0.29c-1.69,0.17-4.97,0.81-7.91,3.27c-1.77,1.49-3.04,3.2-3.79,5.1 C8.26,32.88,12.51,39.13,13,39.82c0.16,0.23,0.11,0.53-0.11,0.7c-1.57,1.14-2.84,2.61-3.68,4.26c-2.8,5.53,0.08,11.19,0.42,11.81 c1.84,3.42,4.78,5.18,6.37,5.93c0.05,0.02,0.08,0.05,0.12,0.09c0.11-0.33,0.23-0.65,0.38-0.98c0.69-1.59,2.79-5.47,7.38-7.1 c0.62-0.21,1.22-0.36,1.8-0.47c-0.98-1.29-3.27-4.91-2.11-9.34c0.76-2.91,2.64-4.75,3.87-5.69c-0.4-1.19-1.16-4.4,0.73-7.61 c2.28-3.89,6.52-4.4,7-4.45c0.27-0.02,0.52,0.17,0.54,0.45c0.03,0.27-0.17,0.52-0.45,0.54c-0.42,0.05-4.2,0.51-6.23,3.97 c-1.91,3.24-0.78,6.48-0.53,7.1c0.09,0.21,0.02,0.46-0.17,0.59c-1.1,0.77-3.05,2.49-3.8,5.35c-1.24,4.74,1.92,8.5,2.29,8.91 c0,0.01,0,0.01,0.01,0.02c2.18-0.2,4.05,0.2,5.25,0.59c0.88-1.17,3.62-4.27,8.05-4.51c4.99-0.26,8.57,3.14,10.12,6.15 c0.17,0.31,0.31,0.64,0.44,0.96c0.05-0.19,0.22-0.34,0.43-0.36c0.32-0.03,7.83-0.73,12.14-7.39c1.88-2.89,2.21-6.86,0.88-10.34 c-0.97-2.53-2.68-4.35-4.57-4.86c-0.27-0.07-0.43-0.35-0.36-0.61c0.08-0.27,0.35-0.43,0.62-0.36c0.99,0.27,1.92,0.84,2.75,1.63 c-0.18-3.42-1.65-6.24-4.24-8.01c-3.2-2.18-7.75-2.52-11.6-0.85c-0.26,0.11-0.55,0-0.66-0.26c-0.11-0.25,0.01-0.55,0.26-0.66 c4.16-1.8,9.09-1.43,12.57,0.95c3.15,2.15,4.8,5.69,4.69,9.97c0.58,0.78,1.09,1.69,1.47,2.7c0.49,1.26,0.75,2.58,0.83,3.9 c1.77,1.49,4.75,3.11,8.02,3.32c1.75,0.11,6.14,0.04,9.11-2.95C84.78,41.14,86.56,38.18,85.14,34.14z M18.31,35.07 c-0.41,0.35-2.49,2.27-2.45,5.33c0.03,2.66,1.66,4.41,2.16,4.88c0.2,0.19,0.2,0.5,0.02,0.7c-0.1,0.11-0.24,0.16-0.37,0.16 c-0.12,0-0.25-0.04-0.34-0.14c-0.57-0.54-2.43-2.53-2.47-5.59c-0.05-3.51,2.33-5.7,2.81-6.1c0.21-0.18,0.52-0.16,0.7,0.06 C18.55,34.58,18.52,34.89,18.31,35.07z M40.55,14.45c-0.08,0.26-0.36,0.41-0.63,0.32c-3.02-1.01-6.32-0.12-8.22,2.22 c-2.43,2.98-1.24,6.75-1.19,6.91c0.08,0.26-0.06,0.54-0.32,0.63c-0.05,0.02-0.11,0.02-0.16,0.02c-0.21,0-0.4-0.13-0.47-0.34 c-0.15-0.45-1.36-4.51,1.36-7.85c2.16-2.66,5.91-3.68,9.32-2.54C40.5,13.91,40.64,14.19,40.55,14.45z M77.2,26.18 c-0.07,0.2-0.26,0.32-0.46,0.32c-0.06,0-0.12-0.01-0.19-0.04c-0.25-0.1-0.38-0.39-0.28-0.65c0.95-2.39,0.29-5.12-1.58-6.49 c-2.08-1.52-4.58-0.46-4.68-0.41c-0.26,0.11-0.55,0-0.66-0.26c-0.11-0.25,0-0.55,0.26-0.66c0.12-0.05,3.13-1.33,5.67,0.53 C77.51,20.15,78.32,23.37,77.2,26.18z"></path>
        <path d="M84.32,65.52c-0.82-9.47-4.1-17.04-5.42-19.16c-1.44,0.4-2.84,0.53-3.97,0.53c-0.39,0-0.75-0.02-1.07-0.04 c-3.13-0.2-6.01-1.59-7.94-3.02c-0.08,2.18-0.68,4.3-1.82,6.05c-4.5,6.95-12.05,7.77-12.89,7.85h-0.05c-0.1,0-0.19-0.04-0.27-0.09 c1.23,3.63,0.53,7.8-1.96,11c-0.17,0.22-0.48,0.26-0.7,0.09c-0.22-0.17-0.26-0.48-0.09-0.7c2.6-3.35,3.08-7.85,1.22-11.45 c-1.41-2.73-4.67-5.85-9.17-5.6c-4.46,0.24-7.04,3.7-7.51,4.39c-0.13,0.19-0.37,0.26-0.59,0.18c-1.49-0.54-4.5-1.27-7.87-0.07 c-4.23,1.49-6.17,5.08-6.81,6.55c-2.17,5-0.13,9.68,0.55,11c2.16,4.21,5.88,5.99,7.68,6.63c0.02-1,0.17-1.77,0.24-2.07 c0.06-0.27,0.32-0.44,0.6-0.38c0.26,0.07,0.43,0.33,0.37,0.6c-0.16,0.7-0.83,4.28,1.41,6.87c2.54,2.93,7.83,3.17,11.11,0.49 c2.28-1.87,3.33-5.04,2.79-8.2c-0.23,0.09-0.47,0.15-0.73,0.19c-0.22,0.04-0.45,0.06-0.67,0.06c-1.35,0-2.64-0.64-3.47-1.76 c-0.17-0.22-0.12-0.53,0.1-0.7c0.22-0.16,0.53-0.12,0.7,0.1c0.75,1.01,1.97,1.51,3.19,1.32c1.31-0.21,2.39-1.24,2.7-2.56 c0.06-0.27,0.33-0.43,0.6-0.37c0.27,0.06,0.43,0.33,0.37,0.6c-0.26,1.13-0.94,2.06-1.85,2.66c0.3,1.51,0.26,3.01-0.07,4.42 c2.89,1.03,7.54,4.8,9.17,9.58c0.21,0.58,0.7,1.05,1.32,1.24c2.58,0.81,8.02,1.97,15.45,0.67c8.98-1.57,12.11-5.28,12.24-5.43 C82.13,85.88,85.34,77.35,84.32,65.52z M27.13,73.25c-0.09,0.17-0.26,0.27-0.45,0.27c-0.07,0-0.15-0.02-0.22-0.05 c-1.82-0.92-2.89-2.81-2.67-4.71c0.26-2.18,2.05-3.28,2.41-3.48c0.24-0.13,0.55-0.05,0.68,0.2c0.13,0.24,0.05,0.54-0.19,0.68 c-0.18,0.09-1.7,0.99-1.9,2.71c-0.18,1.49,0.67,2.98,2.12,3.7C27.15,72.7,27.25,73,27.13,73.25z"></path>
      </g>
    </svg>
  )
}