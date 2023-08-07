import { useCallback, useEffect, useState } from 'react'

// Try to load img and replace it with alternative img if error
// const [src, handleError] = useImageLoadingError('originalSrc', 'alternativeSrc');
// ... <img onError="handleError" src={src} />

export const useImageLoadingError = (originalSrc: string, alternativeSrc: string): [string, () => void] => {
    const [src, setSrc] = useState(originalSrc)

    useEffect(() => {
        setSrc(originalSrc)
    }, [originalSrc])

    const handleError = useCallback(() => {
        setSrc(alternativeSrc)
    }, [alternativeSrc])

    return [src, handleError]
}
