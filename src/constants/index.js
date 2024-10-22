import Project1 from '../assets/projects/Project1';
import Project2 from '../assets/projects/Project2.png';
import Project3 from '../assets/projects/091.jpg';

export const PROJECTS = [
    {
        title: "Ride Sharing Web",
        image: Project1,
        description:
            "A ride-sharing app that provides services for both riders and service providers. Users can register, place ride requests, and make payments, while service providers can accept ride requests and offer their services.",
        technologies: ["HTML", "CSS", "tailwind","React", "Node.js", "mysql","Github"],
    },
    {
        title: "Hospital Management Web",
        image: Project2,
        description:
            "Hospital management system that handles all services, from patient registration at reception to result checking and beyond.",
        technologies: ["HTML", "CSS","tailwind", "React", "MongoDB", "Node.js","Github"],
    },
    {
        title: "API Project",
        image: Project3,
        description:
            "A basic API project that performs CRUD operations and verifies requests and responses using Insomnia.",
        technologies: ["Node.js", "REST API", "MongoDB","Insomnia"],
    },
];
export const CONTACT = {
    address: "Addis Ababa, Ethiopia",
    PhoneNo: "+2519 73092466",
    email:"mintesinotatnafu81@gmail.com",
};


// we can udpdate the project area in these constants part while we doing some other new project