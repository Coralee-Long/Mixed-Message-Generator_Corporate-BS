
// CORPORATE B.S GENERATOR

const adverb = [`appropriately`, `collaboratively`, `globally`, `interactively`, `objectively`, `professionally`, `progressively`, `seamlessly`, `synergistically`, `uniquely`, `dynamically`, `uniquely`];

const verb = [`actualize`, `customize`, `cultivate`, `conceptualize`, `expedite`, `harness`, `monetize`, `predominate`, `maximize`, `transform`, `utilize`, `optimize`];

const adjective = [`adaptive`, `competitive`, `cooperative`, `cross functional`, `diverse`, `dynamic`, `ethical`, `impactful`, `principle-centered`, `worldwide`, `real-time`, `scalable`];

const noun = [`applications`, `architectures`, `deliverables`, `core competencies`, `initiatives`, `processes`, `quality vectors`, `web-readiness`, `virtualization`, `manufactured products`, `interfaces`, `growth strategies`];

const messageGenerator = arr => {
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
};

console.log(`CORPORATE B.S. PHRASE OF THE DAY: "To ${messageGenerator(adverb)} ${messageGenerator(verb)} ${messageGenerator(adjective)} ${messageGenerator(noun)}.`);