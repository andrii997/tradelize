const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs')
const CopyWebpackPlugin = require('copy-webpack-plugin');

function generateHtmlPlugins(templateDir) {
   const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
   return templateFiles.map(item => {
      const parts = item.split('.');
      const name = parts[0];
      const extension = parts[1];
      return new HtmlWebpackPlugin({
         filename: `${name}.html`,
         template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
         inject: false,
      })
   })
}

const htmlPlugins = generateHtmlPlugins('./src/html/views')

module.exports = {
   entry: [
      './src/js/index.js',
      './src/scss/style.scss'
   ],
   output: {
      filename: './js/bundle.js'
   },
   devtool: "source-map",
   module: {
      rules: [{
         test: /\.js$/,
         include: path.resolve(__dirname, 'src/js'),
         use: {
            loader: 'babel-loader',
         }
      },
      {
         test: /\.(sass|scss)$/,
         include: path.resolve(__dirname, 'src/scss'),
         use: ExtractTextPlugin.extract({
            use: [{
               loader: "css-loader",
               options: {
                  sourceMap: true,
                  url: false
               }
            },
            {
               loader: "sass-loader",
               options: {
                  sourceMap: true
               }
            }
            ]
         })
      },
      {
         test: /\.html$/,
         include: path.resolve(__dirname, 'src/html/includes'),
         use: ['raw-loader']
      },
      ]
   },
   plugins: [
      new ExtractTextPlugin({
         filename: './css/style.bundle.css',
         allChunks: true,
      }),
      new CopyWebpackPlugin({
         patterns: [
            // {
            //     context: 'src',
            //     from: './fonts',
            //     to: '../dist/fonts'
            // },
            {
               context: 'src',
               from: './favicon',
               to: '../dist/favicon'
            },
            {
                context: 'src',
                from: './img',
                to: '../dist/img'
            },
            // {
            //     context: 'src',
            //     from: './uploads',
            //     to: '../dist/uploads'
            // }
         ]
      }),
   ].concat(htmlPlugins)
};
