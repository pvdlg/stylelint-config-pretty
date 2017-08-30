import test from 'ava';
import getRuleFinder from './helpers/rule-finder';

let indexRules;
let scssRules;
let orderRules;

test.before(async () => {
  [indexRules, scssRules, orderRules] = await Promise.all([
    getRuleFinder('index.js'),
    getRuleFinder('scss.js'),
    getRuleFinder('order.js'),
  ]);
});

test('No unset rules in index.js', t => {
  t.deepEqual([], indexRules.unused);
});

test('No deprecated or inexistent rules in index.js', t => {
  t.deepEqual([], indexRules.unknown);
});

test('No unset rules in scss.js', t => {
  t.deepEqual([], scssRules.unused);
});

test('No deprecated or inexistent rules in scss.js', t => {
  t.deepEqual([], scssRules.unknown);
});

test('No unset rules in order.js', t => {
  t.deepEqual([], orderRules.unused);
});

test('No deprecated or inexistent rules in order.js', t => {
  t.deepEqual([], orderRules.unknown);
});
