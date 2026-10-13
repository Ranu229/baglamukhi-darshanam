import { useEffect } from 'react';

/**
 * Initializes an IntersectionObserver that watches for elements with the `.reveal` class
 * and adds `.visible` when they enter the viewport.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>('.reveal');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el, index) => {
      // Optional slight stagger for siblings within the same parent
      const parent = el.parentElement;
      if (parent && (parent.classList.contains('services-grid') || parent.classList.contains('pooja-grid') || parent.classList.contains('stay-grid') || parent.classList.contains('why-grid'))) {
        el.style.transitionDelay = `${(index % 4) * 0.1}s`;
      }
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};
