const scrollToProjects = (e?: React.MouseEvent) => {
    e?.preventDefault();
    
    const projectsElement = document.querySelector("#projects");
    if (!projectsElement) return;
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Native CSS smooth scroll on mobile
        const offset = 100;
        const elementPosition = projectsElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    } else if (lenis) {
        // Lenis smooth scroll on desktop
        lenis.scrollTo("#projects", {
            offset: -100,
        });
    }
};
