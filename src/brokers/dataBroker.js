/**
 * @file dataBroker.js
 * @module dataBroker
 * @description Contains all the mid-level data processing functions,
 * and acts as an interface for calling fileOperations.
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Glenn Butler
 * @date 2021/10/19
 * @copyright Copyright © 2021-… by Glenn Butler. All rights reserved
 */

var fileOperations = require('../executrix/fileOperations');
var configurator = require('../executrix/configurator');
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = `controllers.${baseFileName}.`;

/**
 * @function scanDataPath
 * @description Scans the specified path and returns a collection of all
 * files contained recursively in that path.
 * @param {string} dataPath The path that should be recursively scanned for files.
 * @return {array<string>} An array of filenames (including paths).
 * @author Glenn Butler
 * @date 2021/10/19
 */
function scanDataPath(dataPath) {
  let functionName = scanDataPath.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`dataPath is: ${dataPath}`);
  let filesFound = fileOperations.readDirectoryContents(dataPath);
  console.log(`contextName is: ${contextName}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return filesFound;
};

/**
 * @function preProcessJsonFile
 * @description Load all of the data from a single JSON data file.
 * @param {string} fileToLoad The fully qualified path to the file that should be loaded.
 * @return {object} The JSON data object that was loaded from the specified JSON data file.
 * @author Glenn Butler
 * @date 2021/10/19
 */
function preProcessJsonFile(fileToLoad) {
  let functionName = preProcessJsonFile.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`fileToLoad is: ${fileToLoad}`);
  let dataFile = fileOperations.getJsonData(fileToLoad)
  console.log(`dataFile is: ${JSON.stringify(dataFile)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return dataFile;
};

module.exports = {
  ['scanDataPath']: (dataPath) => scanDataPath(dataPath),
  ['loadAllJsonData']: (filesToLoad, contextName) => loadAllJsonData(filesToLoad, contextName)
};
