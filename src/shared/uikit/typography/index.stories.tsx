import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta: Meta<typeof Typography> = {
    component: Typography,
}

export default meta
type Story = StoryObj<typeof Typography>

export const Playground: Story = {
    args: {
        align: 'left',
        children: 'Typography',
        color: 'black',
        component: 'div',
        cursor: 'default',
        size: 'large',
        type: 'body',
    },
}
