import { useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ToastProps {
  id: string;
  message: string;
  type?: 'success' | 'error';
  onRemove: (id: string) => void;
}

export function Toast({ id, message, type = 'success', onRemove }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(id);
    }, 3000);

    return () => clearTimeout(timer);
  }, [id, onRemove]);

  return (
    <div
      className={cn(
        "flex items-center space-x-3 p-4 rounded-lg shadow-lg min-w-[300px] animate-slide-up",
        type === 'success' ? "bg-fresh-green text-white" : "bg-red-500 text-white"
      )}
    >
      {type === 'success' ? (
        <CheckCircle className="h-5 w-5 flex-shrink-0" />
      ) : (
        <XCircle className="h-5 w-5 flex-shrink-0" />
      )}
      <span className="flex-1">{message}</span>
      <button
        onClick={() => onRemove(id)}
        className="flex-shrink-0 hover:opacity-70 transition-opacity"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
