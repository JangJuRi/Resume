module.exports = function override(config) {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        url: require.resolve("url"),
        fs: false,
        crypto: require.resolve("crypto-browserify"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify/browser"),
        stream: require.resolve("stream-browserify"),
        zlib: require.resolve("browserify-zlib"),
        buffer: require.resolve("buffer/"),
        assert: require.resolve("assert/"),
    };
    return config;
};