import { Service } from "@/types/service";
import client from "./client";
import { services } from "./queries";

export async function getServices() {
    const response = await client.fetch<Service[]>(services);
    return response; 
}