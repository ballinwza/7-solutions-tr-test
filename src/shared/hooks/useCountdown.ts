import { useState, useEffect, useCallback } from 'react'

const useCountdown = (initialSeconds: number) => {
    const [remainingTime, setRemainingTime] = useState(initialSeconds)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let timerId: NodeJS.Timeout | null = null

        if (isRunning) {
            timerId = setInterval(() => {
                setRemainingTime((prev) => {
                    if (prev <= 1) {
                        clearInterval(timerId!)
                        setIsRunning(false)
                        return 0
                    }
                    return prev - 1
                })
            }, 1000)
        }

        return () => {
            if (timerId) {
                clearInterval(timerId) // Cleanup timer
                reset()
            }
        }
    }, [isRunning])

    const start = useCallback(() => {
        if (!isRunning) setIsRunning(true)
    }, [isRunning])

    const reset = useCallback(() => {
        setIsRunning(false)
        setRemainingTime(initialSeconds)
    }, [initialSeconds])

    const stop = useCallback(() => {
        setIsRunning(false)
    }, [])

    const resetThenStart = useCallback(() => {
        setIsRunning(false)
        setRemainingTime(initialSeconds)
        setIsRunning(true)
    }, [initialSeconds])

    return { remainingTime, isRunning, start, reset, stop, resetThenStart }
}

export default useCountdown
