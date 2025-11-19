import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../utils/analytics'

const RouteTracker = () => {
    const location = useLocation()

    useEffect(() => {
        trackPageView(window.location.href, document.title)
    }, [location])

    return null
}

export default RouteTracker
