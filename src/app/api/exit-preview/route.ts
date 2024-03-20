import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export const runtime = 'edge';

export async function GET() {
  draftMode().disable();
  redirect(`/`);
}