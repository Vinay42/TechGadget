import React from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import { User, Package, Heart, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { mockOrders } from '../data/mockData';

const AccountOverview: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Account Overview</h2>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4">
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-16 h-16 rounded-full"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-xl font-semibold">
              {user?.firstName?.[0]}{user?.lastName?.[0]}
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {user?.firstName} {user?.lastName}
            </h3>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
          {mockOrders.slice(0, 2).map(order => (
            <div key={order.id} className="border-b border-gray-200 last:border-0 py-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-900">Order #{order.id}</p>
                  <p className="text-sm text-gray-600">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <span className="px-2 py-1 text-xs font-medium rounded-full capitalize" style={{
                  backgroundColor: order.status === 'delivered' ? '#DEF7EC' : '#FEF3C7',
                  color: order.status === 'delivered' ? '#03543F' : '#92400E',
                }}>
                  {order.status}
                </span>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-600">
                  {order.items.length} items • ${order.totalAmount.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
          <Link
            to="/account/orders"
            className="mt-4 inline-block text-primary-600 hover:text-primary-700 font-medium"
          >
            View All Orders
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
          <div className="space-y-4">
            <Link
              to="/account/settings"
              className="flex items-center text-gray-700 hover:text-primary-600"
            >
              <Settings size={18} className="mr-2" />
              Edit Profile
            </Link>
            <Link
              to="/account/settings#security"
              className="flex items-center text-gray-700 hover:text-primary-600"
            >
              <Settings size={18} className="mr-2" />
              Security Settings
            </Link>
            <Link
              to="/account/settings#notifications"
              className="flex items-center text-gray-700 hover:text-primary-600"
            >
              <Settings size={18} className="mr-2" />
              Notification Preferences
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrdersPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">My Orders</h2>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="divide-y divide-gray-200">
          {mockOrders.map(order => (
            <div key={order.id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Order #{order.id}</h3>
                  <p className="text-sm text-gray-600">
                    Placed on {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="px-3 py-1 text-sm font-medium rounded-full capitalize" style={{
                    backgroundColor: order.status === 'delivered' ? '#DEF7EC' : '#FEF3C7',
                    color: order.status === 'delivered' ? '#03543F' : '#92400E',
                  }}>
                    {order.status}
                  </span>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <h4 className="text-sm font-medium text-gray-900">
                          {item.product.name}
                        </h4>
                        <p className="mt-1 text-sm text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          ${((item.product.discountPrice || item.product.price) * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 border-t border-gray-200 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="font-medium text-gray-900">
                    ${order.totalAmount.toFixed(2)}
                  </span>
                </div>
                {order.trackingNumber && (
                  <div className="mt-2 flex justify-between text-sm">
                    <span className="text-gray-600">Tracking Number:</span>
                    <span className="font-medium text-gray-900">
                      {order.trackingNumber}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const AccountPage: React.FC = () => {
  const { user, logout } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const menuItems = [
    { icon: User, label: 'Overview', path: '/account' },
    { icon: Package, label: 'Orders', path: '/account/orders' },
    { icon: Heart, label: 'Wishlist', path: '/account/wishlist' },
    { icon: Settings, label: 'Settings', path: '/account/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-md"
                  >
                    <item.icon size={18} className="mr-3" />
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={logout}
                  className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-md"
                >
                  <LogOut size={18} className="mr-3" />
                  Sign Out
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<AccountOverview />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/wishlist" element={<div>Wishlist page coming soon</div>} />
              <Route path="/settings" element={<div>Settings page coming soon</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};