import hotel from '../assets/png/hotel-cancel/p1.png'
import hackathon from '../assets/png/hackathon/p1.png'
import dcgan from '../assets/png/dcgan/p1.jpg'
import seven from '../assets/png/fracture/fracture.jpg'
import six from '../assets/svg/projects/six.svg'
import veysur from '../assets/png/veysur/p1.png'
import nfl from '../assets/png/nfl/dataset-cover.jpg'
import browser from '../assets/png/browser/browser2.png'

export const projectsData = [
    {
        id: 1,
        projectName: 'Lightweight C++ Web Browser',
        projectDesc: 'Welcome to my Web Browser project! This is a lightweight, fun, and functional browser built from scratch in C++. It’s designed to showcase my skills in systems programming, GUI development, and working with modern web technologies.',
        tags: ['C++', 'Webkit', 'GTK3.0', 'SQLite'],
        code: 'https://github.com/cam-cc/web-browser-cpp',
        demo: 'https://github.com/cam-cc/web-browser-cpp',
        image: browser
    },
    {
        id: 2,
        projectName: 'NFL Sentiment Analysis',
        projectDesc: 'A sophisticated machine learning project that performs real-time sentiment analysis on NFL-related social media content using the RoBERTa pre-trained model. The analysis provides valuable insights into public sentiment towards NFL teams during the active season.',
        tags:['Python', 'RoBERTa', 'Selenium'],
        code: 'https://github.com/cam-cc/NFL-sentiment-analysis',
        demo: 'https://github.com/cam-cc/NFL-sentiment-analysis',
        image: nfl 
    },
    {
        id: 3,
        projectName: 'Bone Fracture Classification',
        projectDesc: 'An advanced deep learning solution for medical image analysis, achieving 99% accuracy in bone fracture classification. Built to assist medical professionals in rapid and accurate fracture diagnosis. equipped with a convenient UI for easy user interaction.',
        tags: ['Python', 'Numpy', 'PyTorch'],
        code: 'https://github.com/cam-cc/bone-fracture-classification',
        demo: 'https://github.com/cam-cc/bone-fracture-classification',
        image: seven
    },
    {
        id: 4,
        projectName: 'Social Media Web App',
        projectDesc: 'Developed a Twitter-inspired web application leveraging React, Next.js, and Tailwind CSS for the front-end, with Firebase providing the back-end infrastructure, enabling enhanced features and design improvements beyond the original platform.',
        tags: ['TailwindCSS','Firebase','React','NextJS'],
        code: 'https://github.com/cam-cc/veysur',
        demo: 'https://github.com/cam-cc/veysur',
        image: veysur
    },
    {
        id: 5,
        projectName: 'Hotel Cancellation Analysis',
        projectDesc: 'this notebook analyzes a hotel booking dataset to find which factors have a high influence on booking cancellations, builds a predictive model that can predict which booking is going to be cancelled in advance, and helps in formulating profitable policies for cancellations and refunds..',
        tags: ['Python', 'Jupyter Notebook'],
        code: 'https://github.com/cam-cc/hotel-cancellation',
        demo: 'https://github.com/cam-cc/hotel-cancellation',
        image: hotel 
    },
    {
        id: 6,
        projectName: 'Deep learning (DCGAN)',
        projectDesc: 'A deep learning GAN image processor that was given pictures different cats. The purpose of this repo was to explore Deep Convolutional Generative Adversarial Network (DCGAN)',
        tags: ['Python'],
        code: 'https://github.com/cam-cc/Deeplearning-images',
        demo: 'https://github.com/cam-cc/Deeplearning-images',
        image: dcgan
    },
    {
        id: 7,
        projectName: 'Logistics Invoice Application',
        projectDesc: 'For this project I developed an invoicing system for a logistics company, which calculates the final pay for each driver and uses google maps api for distance trakcing.',
        tags: ['React', 'CSS', 'Material Ui'],
        code: 'https://github.com/cam-cc/bone-fracture-classification',
        demo: 'https://github.com/cam-cc/bone-fracture-classification',
        image: six
    },
    {
        id: 8,
        projectName: 'Shinkansen travel experience',
        projectDesc: 'The aim of this project was to predict whether a passenger was satisfied or not considering their overall experience of traveling on the Shinkansen Bullet Train. Currently I have managed to acheive an accuracy of 95%',
        tags: ['Python', 'Jupyter Notebook'],
        code: '',
        demo: 'https://github.com/cam-cc/Shinkansen-travel',
        image: hackathon
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/