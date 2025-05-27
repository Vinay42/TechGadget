<div className="hidden sm:block flex-shrink-0">
      {isAuthenticated ? (
        <div className="relative group">
          <Link to="/account">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden border-2 border-primary-300">
              {user?.avatar ? (
                <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold text-xs lg:text-sm">
                  {user?.firstName?.[0]}{user?.lastName?.[0]}
                </div>
              )}
            </div>
          </Link>
          <div className="absolute right-0 mt-2 w-44 lg:w-48 py-2 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <Link to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Account</Link>
            <Link to="/account/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Orders</Link>
            <button
              onClick={logout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign out
            </button>
          </div>
        </div>
      ) : (
        <Link to="/login">
          <Button
            size="sm"
            leftIcon={<User size={14} className="lg:w-4 lg:h-4" />}
            className="text-xs px-3 py-1.5 lg:text-sm lg:px-4 lg:py-2"
          >
            <span className="hidden md:inline">Sign In</span>
            <span className="md:hidden">Login</span>
          </Button>
        </Link>
      )}
    </div>