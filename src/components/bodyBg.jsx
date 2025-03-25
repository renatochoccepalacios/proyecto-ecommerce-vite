import React, { useEffect } from 'react'

export const bodyBg = (color='bg-[#ededed]') => {
    useEffect(() => {
        document.body.classList.add(color);
        return () => {
            document.body.classList.remove(color);
        }
    }, [])
}
