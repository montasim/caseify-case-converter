/**
 * Resend client initialization
 * 
 * @deprecated Use features/email/services/email-service.factory.ts instead
 * This file is kept for backward compatibility
 */

import { Resend } from "resend";
import { getEnvConfig } from "@/config/environment";
import { ERROR_MISSING_API_KEY } from "@/config/constants";

const envConfig = getEnvConfig();

if (!envConfig.resendApiKey) {
    throw new Error(ERROR_MISSING_API_KEY);
}

/**
 * Resend client instance
 * @deprecated Use getEmailService() from @/features/email/services/email-service.factory instead
 */
export const resend = new Resend(envConfig.resendApiKey);
