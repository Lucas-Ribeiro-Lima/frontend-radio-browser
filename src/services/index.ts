import { RadioService } from "./stationService";
import { httpClient } from "@/adapters/http";

export const radioService = new RadioService(httpClient.axios)