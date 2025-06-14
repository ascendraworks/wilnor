import React from 'react';

interface WhatsAppIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor" // Default fill, can be overridden by className
      stroke="currentColor" // Default stroke, can be overridden by className
      strokeWidth="0" // WhatsApp logo usually doesn't have a stroke on the main shape
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16.75 13.96c.27.13.42.24.5.36.08.13.12.25.12.38s-.04.25-.12.38c-.08.12-.24.24-.5.36l-.13.06c-.24.12-.5.22-.78.33-.28.1-.54.15-.82.15-.36 0-.7-.08-1.02-.23-.32-.15-.62-.36-.9-.63-.28-.27-.53-.57-.75-.9-.22-.33-.4-.68-.54-1.04-.13-.35-.2-.7-.2-1.05 0-.34.07-.68.2-1.02s.3-.68.54-1.02c.22-.32.5-.6.76-.85.27-.25.57-.45.9-.6.32-.15.67-.23 1.04-.23.28 0 .55.05.82.15.28.1.54.2.78.32l.12.06c.27.13.42.24.5.36.08.13.12.25.12.38s-.04.25-.12.38c-.08.12-.24.24-.5.36l-.12.06c-.24.12-.5.22-.78.32-.28.1-.54.15-.82.15s-.54-.05-.78-.15c-.24-.1-.45-.24-.64-.4-.2-.17-.35-.37-.48-.6s-.2-.48-.2-.75c0-.27.06-.52.2-.75s.3-.43.48-.6c.18-.17.4-.3.64-.4.24-.1.5-.15.78-.15s.55.05.82.15c.28.1.54.22.78.33l.12.06c.27.13.42.24.5.36.08.13.12.25.12.38s-.04.25-.12.38c-.08.12-.24.24-.5.36l-.12.06ZM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c.005 0 .01 0 .015 0L12 22a9.996 9.996 0 0 0 7.698-3.783A9.93 9.93 0 0 0 22 12c0-5.514-4.486-10-10-10Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"></path>
    </svg>
  );
};

export default WhatsAppIcon;