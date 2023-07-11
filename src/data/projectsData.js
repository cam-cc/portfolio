import movie from '../assets/png/movies/p1.jpg'
import hotel from '../assets/png/hotel-cancel/p1.png'
import hackathon from '../assets/png/hackathon/p1.png'
import dcgan from '../assets/png/dcgan/p1.jpg'
import seven from '../assets/png/fracture/fracture.jpg'
import six from '../assets/svg/projects/six.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Shinkansen travel experience',
        projectDesc: 'The aim of this project was to predict whether a passenger was satisfied or not considering their overall experience of traveling on the Shinkansen Bullet Train. Currently I have managed to acheive an accuracy of 95%',
        tags: ['Python', 'Jupyter Notebook'],
        code: '',
        demo: 'https://github.com/cam-cc/Shinkansen-travel',
        image: hackathon
    },
    {
        id: 2,
        projectName: 'Movie Recommendations',
        projectDesc: 'The goal is to apply different techniques to build recommendation systems such as Rank-based & Collaborative Filtering-based recommendation systems to recommend Movies to users. the data set consists of 671 unique users and 9,066 movies ',
        tags:['Python', 'Jupyter Notebook'],
        code: 'https://github.com/cam-cc/movie-recommendation',
        demo: 'https://github.com/cam-cc/movie-recommendation',
        image: movie 
    },
    {
        id: 3,
        projectName: 'Hotel Cancellation Analysis',
        projectDesc: 'this notebook analyzes a hotel booking dataset to find which factors have a high influence on booking cancellations, builds a predictive model that can predict which booking is going to be cancelled in advance, and helps in formulating profitable policies for cancellations and refunds..',
        tags: ['Python', 'Jupyter Notebook'],
        code: 'https://github.com/cam-cc/hotel-cancellation',
        demo: 'https://github.com/cam-cc/hotel-cancellation',
        image: hotel 
    },
    {
        id: 4,
        projectName: 'Deep learning (DCGAN)',
        projectDesc: 'A deep learning GAN image processor that was given pictures different cats. The purpose of this repo was to explore Deep Convolutional Generative Adversarial Network (DCGAN)',
        tags: ['Python'],
        code: 'https://github.com/cam-cc/Deeplearning-images',
        demo: 'https://github.com/cam-cc/Deeplearning-images',
        image: dcgan
    },
    {
        id: 5,
        projectName: 'Logistics Invoice Application',
        projectDesc: 'For this project I developed an invoicing system for a logistics company, which calculates the final pay for each driver and uses google maps api for distance trakcing.',
        tags: ['React', 'CSS', 'Material Ui'],
        code: 'https://github.com/cam-cc/bone-fracture-classification',
        demo: 'https://github.com/cam-cc/bone-fracture-classification',
        image: six
    },
    {
        id: 6,
        projectName: 'Bone Fracture Classification',
        projectDesc: 'This project classifies if a bone is fractured from an xray image with 95% accuracy',
        tags: ['Python', 'Numpy', 'PyTorch'],
        code: 'https://github.com/cam-cc/bone-fracture-classification',
        demo: 'https://github.com/cam-cc/bone-fracture-classification',
        image: seven
    }

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