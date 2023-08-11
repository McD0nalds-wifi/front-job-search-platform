import { filtersList } from '@/features/job-search/ui/Filters/config'
import { Filter } from '@/features/job-search/ui/Filters/Filter'
import { IconButton } from '@/shared/uikit'

import style from './index.module.scss'

interface IFiltersProps {
    isFiltersOpen: boolean
}

export const Filters = ({ isFiltersOpen }: IFiltersProps) => {
    return (
        <div className={style.filters}>
            {filtersList.map(({ id, title, Icon }) => (
                <Filter
                    iconSlot={<IconButton Icon={Icon} />}
                    key={id}
                    shouldShowAnimation={isFiltersOpen}
                    title={title}
                />
            ))}
        </div>
    )
}
