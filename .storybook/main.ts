import type { StorybookConfig } from '@storybook/nextjs'
const path = require('path')

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    webpackFinal: async (config, { configType }) => {
        config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules']
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, '../src'),
        }
        return config
    },
    docs: {
        autodocs: 'tag',
    },
}
export default config
