const withSass = require('@zeit/next-sass');

module.exports = withSass({
   webpack (config, options) {
       config.module.rules.push({
           test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|otf)$/,
           use: {
               loader: 'url-loader',
               options: {
                   limit: 250000
               }
           }
       });

       return config;
   },
});
