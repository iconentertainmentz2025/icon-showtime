import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { trackEvent } from '../utils/analytics'

const TicketsRedirect = () => {
    useEffect(() => {
        // Track the visit to /tickets
        trackCustomEvents.initiateCheckout('Direct Ticket Link')
    }, [])

    return <Navigate to="/events" replace />
}

export default TicketsRedirect
