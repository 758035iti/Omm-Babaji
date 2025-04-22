import { navArrType } from "@/types"
import PersonIcon from '@mui/icons-material/Person';
export const navArr:navArrType[]= [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'About Us',
        url: '/about'
    },
    {
        id: 3,
        title: 'Puja',
        url: '/pujaservices'
    },
    {
        id: 4,
        title: 'Blog',
        url: '/blog'
    },
    {
        id: 5,
        title: 'Contact Us',
        url: '/contactus'
    },
    {
        id: 6,
        title: 'Process',
        url: '/booking_process'
    },
    {
        id: 7,
        title: 'Login',
        url: '/login',
        submenu: [
            { name: "User", path: "/user" },
            {name: "Brahmin",  path: "/brahmin" },
            { name: "Admin", path: "/admin" },
          ],
    },
    {
        id: 8,
        icon: <PersonIcon />,
        url: '/profile',
        title: '',
    }
]

  