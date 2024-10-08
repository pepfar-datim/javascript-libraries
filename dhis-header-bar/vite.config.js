import { defineConfig, loadEnv } from 'vite';
let auth;
try {
    //@ts-expect-error process not defined
    auth = loadEnv('development', process.cwd())['VITE_DHIS_AUTH'];
}
catch (e) {
    throw new Error(`You have to specify VITE_DHIS_AUTH env variable. E.g. btoa('username:password') in JavaScript`);
}
const proxy = {
    target: 'https://dev.datim.org/',
    // target: 'https://nr.testing.datim.org/',
    configure: (proxy, options) => {
        options.headers = { Authorization: `Basic ${auth}` };
    },
    secure: false,
    changeOrigin: true
};
const server = {
    port: 3000,
    proxy: {
        '/api': proxy,
        '/dhis-web-commons': proxy,
        '/dhis-web-dashboard': proxy,
        '/icons': proxy
    }
};
export default defineConfig({
    base: '',
    server,
    preview: server,
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'dhis-header-bar.js',
                // assetFileNames: 'plugin.css',
                chunkFileNames: "chunk.js",
            }
        }
    }
});
