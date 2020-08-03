import './scss/index.scss';

console.log('module');

const promise = async () => {
  return await Promise.resolve('async works');
};

promise().then(console.log);
