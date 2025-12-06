import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { trackEvent } from '../utils/analytics'

const TicketsRedirect = () => {
    useEffect(() => {
        // Track the visit to /tickets
        trackEvent('tickets_url_visit', 'navigation', 'direct_access')
    }, [])

    return <Navigate to="/events" replace />
}

export default TicketsRedirect
