import React from 'react'
import InvoiceForm from '../components/InvoiceForm'
import Footer from '../components/footer/Footer'
// import Invoices from '../components/Invoices'

export default function dashboard() {
    return (
        <div className="p-5">
            <InvoiceForm />
            <Footer />
        </div>
    )
}
