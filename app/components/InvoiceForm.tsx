"use client";
import React, { useState, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const InvoiceForm: React.FC = () => {
    const [name, setName] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [recipientEmail, setRecipientEmail] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [date, setDate] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [invoiceNote, setInvoiceNote] = useState('');
    const [items, setItems] = useState([{ description: '', qty: 0, price: 0 }]);

    const invoiceRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {
        if (invoiceRef.current) {
            html2canvas(invoiceRef.current).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const imgWidth = 210; // A4 width in mm
                const imgHeight = canvas.height * imgWidth / canvas.width; // Calculate image height
                let heightLeft = imgHeight;
                let position = 0;

                // Add the first page
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= 295; // A4 height in mm

                // Add additional pages if necessary
                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    heightLeft -= 295; // A4 height in mm
                }

                // Save the PDF
                pdf.save('invoice.pdf');
            });
        }
    };

    const handleAddItem = () => {
        setItems([...items, { description: '', qty: 0, price: 0 }]);
    };

    const handleItemChange = (index: number, field: string, value: string) => {
        const newItems = [...items];
        newItems[index] = { ...newItems[index], [field]: value };
        setItems(newItems);
    };

    const calculateTotal = () => {
        return items.reduce((total, item) => {
            return total + (item.qty * item.price || 0);
        }, 0).toFixed(2);
    };

    return (
        <div className="p-1 md:p-6 max-w-6xl mx-auto">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 md:space-y-6 lg:space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                    <div>
                        <label className="block text-gray-700">Invoice Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Sender Email</label>
                        <input
                            type="email"
                            value={senderEmail}
                            onChange={(e) => setSenderEmail(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Recipient Email</label>
                        <input
                            type="email"
                            value={recipientEmail}
                            onChange={(e) => setRecipientEmail(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Shipping Address</label>
                        <input
                            type="text"
                            value={shippingAddress}
                            onChange={(e) => setShippingAddress(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Due Date</label>
                        <input
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>
                    <div className="col-span-1 lg:col-span-2 xl:col-span-3">
                        <label className="block text-gray-700">Invoice Note</label>
                        <textarea
                            value={invoiceNote}
                            onChange={(e) => setInvoiceNote(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 h-32"
                        />
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Items</h3>
                    {items.map((item, index) => (
                        <div key={index} className="border p-4 mb-4 rounded-md shadow-sm">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div>
                                    <label className="block text-gray-700">Description</label>
                                    <input
                                        type="text"
                                        value={item.description}
                                        onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Quantity</label>
                                    <input
                                        type="number"
                                        value={item.qty}
                                        onChange={(e) => handleItemChange(index, 'qty', e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Price</label>
                                    <input
                                        type="number"
                                        value={item.price}
                                        onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => handleAddItem()}
                                className="text-blue-600 hover:underline"
                            >
                                Add Another Item
                            </button>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={handlePrint}
                        className="hidden md:block bg-blue-600 w-96 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700"
                    >
                        Print Invoice
                    </button>
                    <button
                        disabled
                        type="button"
                        className="md:hidden bg-gray-400 w-96 text-white py-2 px-4 rounded-md shadow-sm"
                    >
                        Use Desktop to print
                    </button>
                </div>
            </form>

            <div
                ref={invoiceRef}
                className="hidden md:block p-8 border border-gray-300 rounded-lg mt-8 shadow-xl bg-white"
            >
                <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Invoice</h1>

                <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                        <span className="w-40 font-semibold">Name:</span>
                        <span className="flex-1">{name}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-40 font-semibold">Sender Email:</span>
                        <span className="flex-1">{senderEmail}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-40 font-semibold">Recipient Email:</span>
                        <span className="flex-1">{recipientEmail}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-40 font-semibold">Shipping Address:</span>
                        <span className="flex-1">{shippingAddress}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-40 font-semibold">Date:</span>
                        <span className="flex-1">{date}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-40 font-semibold">Due Date:</span>
                        <span className="flex-1">{dueDate}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-40 font-semibold">Invoice Note:</span>
                        <span className="flex-1">{invoiceNote}</span>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border-b py-3 px-4 text-gray-600">Description</th>
                                <th className="border-b py-3 px-4 text-gray-600">Quantity</th>
                                <th className="border-b py-3 px-4 text-gray-600">Price</th>
                                <th className="border-b py-3 px-4 text-gray-600">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => {
                                const price = Number(item.price) || 0;
                                const qty = Number(item.qty) || 0;
                                const total = (qty * price).toFixed(2);
                                return (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="border-b py-2 px-4">{item.description}</td>
                                        <td className="border-b py-2 px-4">{qty}</td>
                                        <td className="border-b py-2 px-4">{price.toFixed(2)}</td>
                                        <td className="border-b py-2 px-4">{total}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        <tfoot className="bg-gray-100">
                            <tr>
                                <td colSpan={3} className="border-t py-2 px-4 text-right font-semibold text-gray-600">Total</td>
                                <td className="border-t py-2 px-4 font-semibold text-gray-800">{calculateTotal()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InvoiceForm;
