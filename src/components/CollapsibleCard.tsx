import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface CollapsibleCardProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export default function CollapsibleCard({
  title,
  children,
  defaultOpen = false,
  className = ''
}: CollapsibleCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`rounded-xl overflow-hidden mb-4 ${className}`}>
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center bg-black/30 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-white">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-white transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4 pt-2 bg-black/20 backdrop-blur-sm border border-t-0 border-white/10">
          <div className="prose max-w-none text-white/80">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}