export const routes = {
    findJob: {
        getRoute: (search?: string) => {
            if (search) {
                const searchParam = new URLSearchParams({ search }).toString()

                return `/findJob?${searchParam}`
            }

            return '/findJob'
        },
        path: '/findJob',
    },
} as const
