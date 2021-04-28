module.exports = {
    testEnvironment: 'jest-environment-jsdom-fourteen',
    automock: false,
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    },
    transform: {
        '\\.js?$': [
            'babel-jest',
            {
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                node: 'current',
                            },
                        },
                    ],
                ],
                plugins: [
                    ['@babel/plugin-proposal-decorators', { legacy: true }],
                    ['@babel/plugin-proposal-class-properties', { loose: true }],
                    '@babel/plugin-transform-runtime'
                ]
            }
        ]
    }
};
