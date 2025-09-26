import React from 'react';

interface QrCodeCardProps {
  scanText: string;
  qrCodeImage: string;
  className?: string;
}

const QrCodeCard: React.FC<QrCodeCardProps> = ({ scanText, qrCodeImage, className }) => {
  return (
    <div className={`absolute bottom-8 right-8 bg-white px-4 py-1 rounded-lg shadow-lg flex flex-col ${className || ''}`}>
      <p className="text-gray-700 text-xl font-bold mb-1 text-left">{scanText}</p>
      <img src={qrCodeImage} alt="QR Code" className="h-36 w-36 self-center bhashini-skip-translation" />
    </div>
  );
};

export default QrCodeCard;
