/**
 * @file warden.js
 * @module warden
 * @description Contains all the funtions to manage the entire application framework at the highest level.
 * Also provides an interface to easily manage all the framework features & various functionality from a single entry point.
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Glenn Butler
 * @date 2021/10/12
 * @copyright Copyright © 2021-… by Glenn Butler. All rights reserved
 */

var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = `framework.controllers.${baseFileName}.`;

/**
 * @function processRootPath
 * @description Processes the root path of the application using business rules.
 * @NOTE: By calling path.resolve(__dirname); This does not return the true root path of the application.
 * It returns the path to the currently executing file, or the file that was executed first.
 * which is: C:/calculator2/Application/calculator2/
 * But what we really need for the root path is just C:/calculator2/
 * @param {object} configData All of the configuration data that should be parsed as part of the setup process.
 * @return {string} the true root path of the application.
 * @author Glenn Butler
 * @date 2021/10/12
 */
 function processRootPath(configData) {
   let functionName = processRootPath.name;
   console.log(`BEGIN ${namespacePrefix}${functionName} function`);
   console.log(`configData is: ${JSON.stringify(configData)}`);

   // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
   let applicationName = configData['applicationName'];
   let pathToProcess = configData['rootPath'];
   let resolvedPath = '';

   let pathElements = pathToProcess.split('\\');
   loop1:
     for (let i = 0; i < pathElements.length; i++) {
       let pathElement = pathElements[i];
       if (i === 0) {
         resolvedPath = pathElement;
       } else if (pathElement === applicationName) {
         resolvedPath = resolvedPath + '\\' + pathElement + '\\';
         break loop1;
       } else {
         resolvedPath = resolvedPath + '\\' + pathElement;
       }
     }
     // Alternate simplified implementation: i-length checking might need to be i+1
     // let pathElements = pathToProcess.split('');
     // for (let i = 0; i < pathElements.length; i++) {
     //   let pathElement = pathElement[i];
     //   if (i === 0) {
     //     resolvedPath = pathElement
     //   }
     //   else resolvedPath = resolvedPath + '' + pathElement;
     // }
     // resolvedPath = resolvedPath + '';

   // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
   let rootPath = path.resolve(resolvedPath);
   console.log(`rootPath is: ${rootPath}`);

   console.log(`END ${namespacePrefix}${functionName} function`);
   return rootPath;
};

/**
 * @function initFrameworkSchema
 * @description Setup all the framework data and configuration settings.
 * @param {object} configData All of the configuration data that should be parsed as part of the setup process.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/10/12
 */
function initFrameworkSchema(configData) {
  let functionName = initFrameworkSchema.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`configData is: ${JSON.stringify(configData)}`);

  let appConfigPath = configData['appConfigPath'];
  let frameworkConfigPath = configData['frameworkConfigPath'];
  chiefConfiguration.setupConfiguration(appConfigPath, frameworkConfigPath);

  console.log(`END ${namespacePrefix}${functionName} function`);
};

export default {
  processRootPath,
  initFrameworkSchema
};
