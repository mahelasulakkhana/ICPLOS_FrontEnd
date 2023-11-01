import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog	
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'menu',
		label: 'Menu',
		path: '/menu',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <HiOutlineCube />
	},
	{
		key: 'orders',
		label: 'Orders',
		path: '/orders',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'customers',
		label: 'Users',
		path: '/coustomers',
		icon: <HiOutlineUsers />
	},
	{
		key: 'transactions',
		label: 'User Payment History',
		path: '/transaction',
		icon: <HiOutlineDocumentText />
	},
	// {
	// 	key: 'addcoustomer',
	// 	label: 'Addcoustomer',
	// 	path: '/addUser',
	// 	icon: <HiOutlineUsers/>
	// },
	{
		key: 'addproduct',
		label: 'Addproduct',
		path: '/addproduct',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]