'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

// create the schema to validate
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  date: z.string(),
  status: z.enum(['pending', 'paid']),
});
// we omit the id and date
const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  // const rawData = Object.fromEntries(formData.entries());
  // const { customerId, amount, status } = Object.fromEntries(formData.entries());
  // const rawData = {
  // customerId: formData.get('customerId')
  // amount: formData.get('amount')
  // status: formData.get('status')
  // }

  // we use the pareser method of zod
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;
  const [date] = new Date().toISOString().split('T');
  try {
    await sql`
    INSERT INTO invoices(customer_id, amount, status, date)
    VALUES(${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    return { message: 'Failed to insert new row invoices.' };
  }

  const invoicesPath = '/dashboard/invoices';
  revalidatePath(invoicesPath);
  redirect(invoicesPath);
}

const UpdateInvoice = FormSchema.omit({ id: true, date: true });
export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100;
  try {
    await sql`
    UPDATE invoices SET customer_id=${customerId}, amount=${amountInCents}, status=${status}
    WHERE id=${id}
    `;
  } catch (error) {
    return {
      message: `Failed to update the customer with id ${customerId} invoices.`,
    };
  }

  const invoicePath = '/dashboard/invoices';
  revalidatePath(invoicePath);
  redirect(invoicePath);
}

export async function deleteInvoice(id: string) {
  try {
    await sql`
    DELETE FROM invoices WHERE id=${id}
    `;
    revalidatePath('/dashboard/invoice');
    return { message: 'Deleted invoice' };
  } catch (error) {
    return { message: `Failed to update the customer with id ${id} invoices.` };
  }
}
