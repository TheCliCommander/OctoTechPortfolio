
import * as THREE from 'C:/Users/capta/source/repos/three.js-dev';

const navToggle = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('nav__link');
if (navToggle) {
    // Toggle mobile menu when hamburger icon is clicked
    navToggle.addEventListener('click', () => {
        console.log('hamburgled');//check to validate js functionality
        document.body.classList.toggle('nav-open');
        document.getElementById('hamburger').classList.toggle('change');
    });
};
// Close mobile menu when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('something witty about a missing hamburger')
        document.body.classList.remove('nav-open');
    });
});
const bannerText = document.getElementById('banner-text');
let index = 0;
// Banner element gradient animation
function changeText() {
    const textPairs = [ 'Dev Ops', 'Linux Wise-Guy', 'Systems Analysis'];
    bannerText.innerHTML = textPairs[index];
    index = (index + 1) % textPairs.length;
    setTimeout(changeText, 2500);
}

function resetText() {
    bannerText.innerHTML = 'Dev Ops';
    index = 0;
}

// Call the changeText function to start the animation
changeText();
let scene, camera, renderer, carousel;
                    const portfolioItems = [
                        { url: 'portfolio-item.html', img: 'img/OnTime.png', alt: 'picture of OnTime App' },
                        { url: 'portfolio-item2.html', img: 'img/PassBox.jpg.png', alt: 'picture of PassBox App' },
                        { url: 'portfolio-item3.html', img: 'img/ecommercesite.png', alt: 'picture of E-Commerce Site' }
                    ];

                    function initCarousel() {
                        scene = new THREE.Scene();
                        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                        renderer = new THREE.WebGLRenderer();
                        renderer.setSize(window.innerWidth, window.innerHeight);
                        document.getElementById('carouselContainer').appendChild(renderer.domElement);

                        carousel = new THREE.Group();
                        portfolioItems.forEach((item, index) => {
                            const texture = new THREE.TextureLoader().load(item.img);
                            const material = new THREE.MeshBasicMaterial({ map: texture });
                            const plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 3), material);
                            plane.position.x = index * 6 - (portfolioItems.length * 6) / 2 + 3; // Spread out the planes
                            plane.userData.url = item.url; // Store the URL in the mesh's userData
                            carousel.add(plane);
                        });

                        scene.add(carousel);
                        camera.position.z = 5;
                        var THREE = require('three') // require peer dependency
                        var initializeDomEvents = require('threex.domevents')
                        var THREEx = {}
                        initializeDomEvents(THREE, THREEx)

                        const domEvents = new three.DomEvents(camera, renderer.domElement);
                        carousel.children.forEach(mesh => {
                            domEvents.addEventListener(mesh, 'click', event => {
                                window.location.href = mesh.userData.url;
                            }, false);
                        });

                        animate();
                        
                    }
                    

                    function animate() {
                        requestAnimationFrame(animate);
                        carousel.rotation.y += 0.01; // Rotate the carousel
                        renderer.render(scene, camera);
                    }

                    window.addEventListener('resize', () => {
                        camera.aspect = window.innerWidth / window.innerHeight;
                        camera.updateProjectionMatrix();
                        renderer.setSize(window.innerWidth, window.innerHeight);
                    });

                    initCarousel();
                    carousel.children.forEach(mesh => {
                        mesh.addEventListener('mouseenter', event => {
                            carousel.children.forEach(item => {
                                if (item !== mesh) {
                                    item.scale.set(0.8, 2, 0.8);
                                } else {
                                    item.scale.set(1, 2, 1);
                                }
                            });
                        });

                        mesh.addEventListener('mouseleave', event => {
                            carousel.children.forEach(item => {
                                item.scale.set(1, 2, 1);
                            });
                        });

                        mesh.addEventListener('click', event => {
                            carousel.children.forEach(item => {
                                if (item !== mesh) {
                                    item.position.x = item.position.x - 6;
                                } else {
                                    item.position.x = 0;
                                }
                            });
                        });
                    });
window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const topImageHeader = document.querySelector('.bg-image0 h3');
        const topImageHeaderText = topImageHeader.textContent;
        const aboutSection = document.querySelector('.about-section');
        const whatIDoSection = document.querySelector('.services-section');
        const projectsSection = document.querySelector('.projects');
        const headerHeight = header.getBoundingClientRect().height;
        
        
        

        if (aboutSection.getBoundingClientRect().top <= headerHeight ) {
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.width = '100%';
            topImageHeader.textContent = topImageHeaderText;
        } else {
            header.style.position = 'static';
            topImageHeader.textContent = '';
        }
        //Adjust the position of section__title based on scroll
        const sectionTitleContainers = document.querySelectorAll('.section__title-container');
        
        sectionTitleContainers.forEach(container => {
            const title = container.querySelector('.section__title')
            const titleTop= title.getBoundingClientRect().top;
            const bgImage0Bottom = document.querySelector('.bg-image0').getBoundingClientRect().bottom;
            
            if (!titleFixed && bgImage0Bottom  <= titleTop) {
                container.style.position = 'sticky';
                container.style.top = '0%';
                container.style.left = '50%';
                container.style.transform = 'translateX(-50%)';//center title horizontally
                container.style.visibility = 'visible';
                titleFixed = true; //set the flag to true once a title is fixed
            }else if (titleFixed && bgImage0Bottom > titleTop) {
                container.style.position = 'static';//reset to original position
                container.style.visibilty = 'visible';
                titleFixed = false; //reset titleFixed 
            } else {
                container.style.position = 'static';//keep title in its original position
                container.style.visibility = 'visible';

            }



            
            
        });
    
});
            