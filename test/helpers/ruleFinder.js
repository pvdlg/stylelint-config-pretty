import path from 'path';
import fs from 'fs';
import {flattenDeep, difference} from 'lodash';
import stylelint from 'stylelint';

const RULE_PATHS = {
  'stylelint': 'stylelint/lib/rules',
  'stylelint-scss': 'stylelint-scss/src/rules',
  'stylelint-order': 'stylelint-order/rules',
};

/**
 * @typedef {Object} RuleFinder
 * @property {Array<string>} available All the available, non deprecated rules (including plugins referenced in the config file).
 * @property {Array<string>} current All the rules configured in the config file.
 * @property {Array<string>} unused All the available, non deprecated rules that are not present in the config file.
 * @property {Array<string>} unknown All rules present in the config file that are deprecated or doesn't exists.
 */

/**
 * Retrieve available, current and unused rules for a given stylelint config file.
 *
 * @method getRuleFinder
 * @param {string} config path to the config file to test, relative to `cwd`.
 * @return {RuleFinder} Available, current, unused and unknown rules for the config file.
 */
export default async function getRuleFinder(config) {
  const available = await getAvailableRules(path.join(process.cwd(), config));
  const current = Object.keys(
    (await stylelint.createLinter()._extendExplorer.load(process.cwd(), config)).config.rules
  );

  return {
    available,
    current,
    unused: difference(available, current),
    unknown: difference(current, available),
  };
}

/**
 * Get all the available, non deprecated rules (including plugins) for the given config file.
 *
 * @method getAvailableRules
 * @param {string} config The absolute path to the config file to analyze.
 * @return {Array<string>} All the available, non deprecated rules (including plugins referenced in the config file).
 */
async function getAvailableRules(config) {
  const rules = await Promise.all(
    Object.keys(stylelint.rules).map((rule) => filterDeprecated(`${RULE_PATHS.stylelint}/${rule}`, rule))
  );
  const configObject = require(config);

  if (configObject.plugins) {
    rules.push(await Promise.all(configObject.plugins.map(getPluginRules)));
  }
  return flattenDeep(rules).filter((rule) => Boolean(rule));
}

/**
 * Get all the available, non deprecated rules for the given plugin.
 *
 * @method getPluginRules
 * @param {string} pluginName npm name of the stylelint plugin
 * @return {Array<string>} All the available, non deprecated rules for the plugin.
 */
function getPluginRules(pluginName) {
  const pluginObject = require(pluginName);

  return Promise.all(
    (pluginObject.default ? pluginObject.default : pluginObject).map((ruleObject) =>
      filterDeprecated(`${RULE_PATHS[pluginName]}/${ruleObject.ruleName.split('/')[1]}`, ruleObject.ruleName)
    )
  );
}

/**
 * Determine if a rule is deprecated. Consider a rule deprecated if it documentation contains '**deprecated.'
 *
 * @method filterDeprecated
 * @param {string} rulesPath Path of the directory containing the rules definition, relative to `cwd`.
 * @param {string} rule Rule name (including plugin prefix).
 * @return {Promise<string>} a Promise that resolve to the rule name if not deprecated, to `null` otherwise.
 */
function filterDeprecated(rulesPath, rule) {
  const readStream = fs.createReadStream(path.resolve(process.cwd(), 'node_modules', `${rulesPath}/README.md`), {
    highWaterMark: 1024,
  });

  return new Promise((resolve, reject) => {
    readStream
      .on('data', (chunk) => {
        resolve(/\*\*deprecated/i.test(chunk.toString()) ? null : rule);
        readStream.destroy();
      })
      .on('error', (err) => {
        readStream.destroy();
        reject(err);
      });
  });
}
