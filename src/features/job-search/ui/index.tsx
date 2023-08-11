'use client'

import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import { routes } from '@/common/routes'
import { Filters } from '@/features/job-search/ui/Filters'
import { useDebounce } from '@/shared/hooks'

import style from './index.module.scss'
import { InputSearch } from './InputSearch'

export const JobSearch = () => {
    const { push } = useRouter()

    const [searchValue, setSearchValue] = useState('')
    const debouncedSearchValue = useDebounce(searchValue, 500)

    useEffect(() => {
        push(routes.findJob.getRoute(debouncedSearchValue))
    }, [debouncedSearchValue, push])

    return (
        <div className={style.wrapper}>
            <InputSearch onChange={setSearchValue} value={searchValue} />

            <Filters isFiltersOpen={debouncedSearchValue.length > 0} />
        </div>
    )
}
