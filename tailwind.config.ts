// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionTimingFunction: {
        'slow-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      // If you want to use standard classes for 3D
      keyframes: {
        // your GSAP or Tailwind keyframes here
      }
    },
  },
}