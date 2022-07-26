module.exports = {
    webpack: {
        configure: webpackConfig => {
            // ts-loader is required to reference external typescript projects/files (non-transpiled)
            webpackConfig.module.rules.push({
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    configFile: 'tsconfig.json',
                },
            })
            webpackConfig.entry = webpackConfig.entry.replace('index.ts','example.component.tsx')
            return webpackConfig;
        }
    }
};