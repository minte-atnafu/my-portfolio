import project4 from '../assets/projects/Screenshot (452).png';
import Project1 from '../assets/projects/Screenshot (455).png';
import Project2 from '../assets/projects/Project2.png';
import Project3 from '../assets/projects/091.jpg';
import project5 from '../assets/projects/Screenshot (454).png';
import project6 from '../assets/projects/Screenshot (456).png';
import project7 from '../assets/projects/OIP.webp';

export const PROJECTS = [
    {
        title: "Ethio Binamr plc",
        image: project4,
        description:
            "A website designed to showcase the products and services of Ethio Binamr PLC, featuring dedicated pages for Export, Import, and Rentals. Each service includes detailed pages, category-specific listings, and a contact page for inquiries.",
        technologies: ["Django", "Django Template Engine", "Bootstrap","GitLab"],
    },
    {
        title: "Quality Assurance for Aladia",
        image: project6,
        description:
            "Quality assurance for Aladia's Nuxt project, utilizing Storybook for component-level testing and end-to-end tests to ensure the overall functionality and reliability of the application's pages.",
        technologies: ["Nuxt", "Storybook", "CSS", "GitLab"],
    },
    {
        title: "TeleMarket Ethiopia",
        image: project5,
        description:
            "An AI-powered platform developed to centralize and streamline e-commerce activity in Ethiopia by aggregating real-time product listings from Telegram channels. The system uses web scraping, Amharic NLP, and OCR to extract and organize product details such as names, prices, and contact information. Built with a focus on local language processing and intelligent data handling.",
        technologies: ["Django", "CSS", "PostgreSQL","Render","AWS","Hugging Face","Github"],
    },
    {
        title: "Ride Sharing Web",
        image: Project1,
        description:
            "A ride-sharing app that provides services for both riders and service providers. Users can register, place ride requests, and make payments, while service providers can accept ride requests and offer their services.",
        technologies: ["HTML", "CSS", "tailwind","React", "Node.js", "mysql","Github"],
    },

    {
        title: "Kifiya AI Mastery",
        image: project7,
        description:
            "Kifiya AI Mastery projects included a range of financial-focused applications, such as sentiment analysis, exploratory data analysis (EDA), credit risk modeling, and other data-driven solutions in the financial domain.",
        technologies: ["NoteBook", "TensorFlow", "Finetune", "Streamlit", "PostgreSQL", "Pandas","Github"],
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