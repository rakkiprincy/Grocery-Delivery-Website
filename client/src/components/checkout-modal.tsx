import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/hooks/use-cart';
import { apiRequest } from '@/lib/queryClient';
import { CheckoutFormData } from '@/lib/types';
import { cn } from '@/lib/utils';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export function CheckoutModal({ isOpen, onClose, onSuccess }: CheckoutModalProps) {
  const { cart, getSubtotal, getDeliveryFee, getTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState('asap');
  const [formData, setFormData] = useState<CheckoutFormData>({
    deliveryTime: 'asap',
    address: {
      street: '',
      city: '',
      zip: '',
    },
    payment: {
      cardNumber: '',
      expiry: '',
      cvc: '',
    },
    customerName: '',
    customerEmail: '',
    customerPhone: '',
  });

  const handleInputChange = (field: string, value: string) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof CheckoutFormData],
          [child]: value,
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const validateForm = (): boolean => {
    const required = [
      formData.customerName,
      formData.customerEmail,
      formData.customerPhone,
      formData.address.street,
      formData.address.city,
      formData.address.zip,
      formData.payment.cardNumber,
      formData.payment.expiry,
      formData.payment.cvc,
    ];

    return required.every(field => field.trim() !== '');
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      onSuccess('Please fill in all required fields');
      return;
    }

    setIsProcessing(true);

    try {
      const orderData = {
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerPhone: formData.customerPhone,
        deliveryAddress: formData.address.street,
        deliveryCity: formData.address.city,
        deliveryZip: formData.address.zip,
        deliveryTime: selectedDeliveryTime,
        items: JSON.stringify(cart),
        subtotal: getSubtotal().toFixed(2),
        deliveryFee: getDeliveryFee().toFixed(2),
        total: getTotal().toFixed(2),
      };

      await apiRequest('POST', '/api/orders', orderData);
      
      clearCart();
      onClose();
      onSuccess('Order placed successfully! 🎉');
    } catch (error) {
      onSuccess('Failed to place order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">Checkout</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-8">
          {/* Customer Information */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h4>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="customerName">Full Name</Label>
                <Input
                  id="customerName"
                  value={formData.customerName}
                  onChange={(e) => handleInputChange('customerName', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="customerEmail">Email</Label>
                  <Input
                    id="customerEmail"
                    type="email"
                    value={formData.customerEmail}
                    onChange={(e) => handleInputChange('customerEmail', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="customerPhone">Phone</Label>
                  <Input
                    id="customerPhone"
                    value={formData.customerPhone}
                    onChange={(e) => handleInputChange('customerPhone', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Time */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Delivery Time</h4>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant={selectedDeliveryTime === 'asap' ? 'default' : 'outline'}
                onClick={() => setSelectedDeliveryTime('asap')}
                className={cn(
                  "p-4 h-auto flex-col",
                  selectedDeliveryTime === 'asap' && "bg-fresh-green hover:bg-deep-green"
                )}
              >
                <div className="font-semibold">ASAP</div>
                <div className="text-sm opacity-90">30-45 min</div>
              </Button>
              <Button
                variant={selectedDeliveryTime === 'later' ? 'default' : 'outline'}
                onClick={() => setSelectedDeliveryTime('later')}
                className={cn(
                  "p-4 h-auto flex-col",
                  selectedDeliveryTime === 'later' && "bg-fresh-green hover:bg-deep-green"
                )}
              >
                <div className="font-semibold">Later Today</div>
                <div className="text-sm opacity-90">Choose time</div>
              </Button>
            </div>
          </div>

          {/* Delivery Address */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Delivery Address</h4>
            <div className="space-y-4">
              <div>
                <Label htmlFor="street">Street Address</Label>
                <Input
                  id="street"
                  value={formData.address.street}
                  onChange={(e) => handleInputChange('address.street', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={formData.address.city}
                    onChange={(e) => handleInputChange('address.city', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input
                    id="zip"
                    value={formData.address.zip}
                    onChange={(e) => handleInputChange('address.zip', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h4>
            <div className="space-y-4">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.payment.cardNumber}
                  onChange={(e) => handleInputChange('payment.cardNumber', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    value={formData.payment.expiry}
                    onChange={(e) => handleInputChange('payment.expiry', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="cvc">CVC</Label>
                  <Input
                    id="cvc"
                    placeholder="123"
                    value={formData.payment.cvc}
                    onChange={(e) => handleInputChange('payment.cvc', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h4>
            <Card className="bg-gray-50">
              <CardContent className="p-4 space-y-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>{item.name} ({item.quantity}x)</span>
                    <span>₹{(item.price * item.quantity).toFixed(0)}</span>
                  </div>
                ))}
                <hr className="my-3" />
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>₹{getSubtotal().toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery:</span>
                  <span className={getDeliveryFee() === 0 ? 'text-fresh-green' : ''}>
                    {getDeliveryFee() === 0 ? 'FREE' : `₹${getDeliveryFee().toFixed(0)}`}
                  </span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                  <span>Total:</span>
                  <span className="text-fresh-green">₹{getTotal().toFixed(0)}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Place Order Button */}
          <Button
            onClick={handleSubmit}
            disabled={isProcessing}
            className="w-full bg-fresh-green hover:bg-deep-green text-white py-4 font-semibold text-lg"
          >
            {isProcessing ? 'Processing...' : 'Place Order'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
