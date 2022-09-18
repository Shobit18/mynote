import { url } from "inspector";

const constant = {
  header: {
    logo: { url: 'https://picsum.photos/200/300', size: '60px'} ,
    navItems: [
      {
        title: 'Home',
        path: '/',
        isVisible: true
      },
      {
        title: 'About',
        path: '/about',
        isVisible: true
      },
      {
        title: 'Contact',
        path: '/contact',
        isVisible: true
      },
      {
        title: 'Blog',
        path: '/blog',
        isVisible: false
      },
    ]
  },
  banner: {
    title: "Engineering Excellence",
    description: "A PRODUCT Engineering Company",
    bannerImage:"/image/com2.jpg",
    button: "Get More Info.."
  },
  testimonial: [
    {
      id: 1,
      image: "https://picsum.photos/200/300",
      name: "Jone Dou",
      designation: "CEO",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
    },
    {
      id: 2,
      image: "https://picsum.photos/200/300",
      name: "David",
      designation: "PM",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
    },
    {
      id: 3,
      image: "https://picsum.photos/200/300",
      name: "Tom",
      designation: "TL",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
    },
    {
      id: 3,
      image: "https://picsum.photos/200/300",
      name: "Sam",
      designation: "ATL",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
    },
  ],
  footer: {
    logo: { url: 'image', size: '60px' },
    navItems: [
      {
        title: 'Home',       
      },
      {
        title: 'About',
      },
      {
        title: 'Contact',
      },
    ],
    homeItems: [
      {name: "Books"},
      {name: "Laptop"},
      {name: "PC"}
    ],
    SocialMedia: [
      {name: "Facebook"},
      {name: "Instagram"},
      {name: "Twitter"}
    ],
    copyrightContent: "&copy;"

  }
}
export default constant;


