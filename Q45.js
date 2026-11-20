const cache = new Map();

function calculateSquare(n) {
    console.log("Calculating result...");
    return n * n;
}

function getResult(n) {
    let key = n;

    if (cache.has(key)) {
        let data = cache.get(key);

        if (Date.now() < data.expiry) {
            console.log("Result from cache:");
            return data.value;
        }

        cache.delete(key);
    }

    let result = calculateSquare(n);

    cache.set(key, {
        value: result,
        expiry: Date.now() + 5000
    });

    return result;
}

function removeExpired() {
    let currentTime = Date.now();

    for (let [key, data] of cache) {
        if (currentTime > data.expiry) {
            cache.delete(key);
        }
    }

    console.log("Expired entries removed.");
}

console.log(getResult(5));
console.log(getResult(5));

setTimeout(() => {
    removeExpired();
    console.log(cache);
}, 6000);