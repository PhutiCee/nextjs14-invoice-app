interface Item {
    id: string;
    name: string;
    cost: number;
    quantity: number;
    price: number;
}

interface Invoice {
    id: number;
    attributes: {
        name: string;
        senderEmail: string;
        recipientEmail: string;
        shippingAddress: string;
        date: string;
        dueDate: string;
        invoiceNote: string;
        description: string;
        qty: number;
        rate: number;
        total: number;
    };
}


interface InvoiceFormProps {
    onClose: () => void;
    setInvoices: React.Dispatch<React.SetStateAction<Invoice[]>>;
    selectedInvoice: Invoice | null;
  }

interface Customer {
    user_id: string,
    name: string,
    email: string,
    address: string
}

interface BankInfo {
    user_id: string,
    account_name: string,
    account_number: number,
    bank_name: string,
    currency: string
}