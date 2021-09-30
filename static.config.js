// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

// Get started at https://react-static.js.org

export default {
  disablePreload: true,
  silent: true,
  plugins: ['react-static-plugin-sass'],
  getSiteData: async ({ dev }) => ({
      title: 'Terrand',
      lastBuilt: Date.now(),
  }),
  //maxThreads: 1, // Remove this when you start doing any static generation
  getRoutes: async ({ dev }) => [
      // A simple route
      {
          path: '/',
          template: 'src/pages/index',
      },    
      // A 404 component
      {
          path: '404',
          template: 'src/pages/404',
      },
  ],
}
