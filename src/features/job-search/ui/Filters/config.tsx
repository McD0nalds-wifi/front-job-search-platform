import { BanknoteIcon, CaseIcon, MapPointIcon } from '@/shared/uikit/icons'

export const filters = {
    experience: {
        Icon: CaseIcon,
        id: 'experience',
        title: 'Опыт',
    },
    incomeLevel: {
        Icon: BanknoteIcon,
        id: 'incomeLevel',
        title: 'Уровень дохода',
    },
    workLocation: {
        Icon: MapPointIcon,
        id: 'workLocation',
        title: 'Расположение работы',
    },
} as const

export const filtersList = [filters.workLocation, filters.incomeLevel, filters.experience] as const
