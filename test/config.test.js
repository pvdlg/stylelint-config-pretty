import test from 'ava';
import getRuleFinder from './helpers/rule-finder';

let indexRules;
let scssRules;
let orderRules;

test.before(async () => {
  [indexRules, scssRules, orderRules] = await Promise.all([
    getRuleFinder('index.js'),
    getRuleFinder('scss-config.js'),
    getRuleFinder('order-config.js'),
  ]);
});

test('No unset rules in index.js', t => {
  t.deepEqual([], indexRules.unused);
});

test('No deprecated or inexistent rules in index.js', t => {
  t.deepEqual([], indexRules.unknown);
});

test('No unset rules in scss-config.js', t => {
  t.deepEqual([], scssRules.unused);
});

test('No deprecated or inexistent rules in scss-config.js', t => {
  t.deepEqual([], scssRules.unknown);
});

test('No unset rules in order-config.js', t => {
  t.deepEqual([], orderRules.unused);
});

test('No deprecated or inexistent rules in order-config.js', t => {
  t.deepEqual([], orderRules.unknown);
});
