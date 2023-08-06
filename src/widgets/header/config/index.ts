export const TABS = {
    community: {
        href: '#',
        id: 'community',
        isForAuthorizedOnly: false,
        title: 'Сообщество',
    },
    findJob: {
        href: '#',
        id: 'findJob',
        isForAuthorizedOnly: false,
        title: 'Поиск работы',
    },
    help: {
        href: '#',
        id: 'help',
        isForAuthorizedOnly: false,
        title: 'Помощь',
    },
    hiring: {
        href: '#',
        id: 'hiring',
        isForAuthorizedOnly: false,
        title: 'Работодателям',
    },
    messages: {
        href: '#',
        id: 'messages',
        isForAuthorizedOnly: true,
        title: 'Сообщения',
    },
} as const

export const TABS_LIST = [TABS.findJob, TABS.messages, TABS.hiring, TABS.community, TABS.help] as const
