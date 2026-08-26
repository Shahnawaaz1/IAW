import { site } from "@/config/site";

export interface LeadData {
  name: string;
  phone: string;
  model?: string;
  message?: string;
  source?: string;
}

/**
 * Submits lead data directly to the Google Sheet Apps Script webhook.
 * Uses robust URL-Encoded FormData with no-cors mode, which Google Apps Script parses reliably.
 */
export async function submitLeadToGoogleSheet(lead: LeadData): Promise<boolean> {
  const url = site.googleSheetWebhookUrl;
  if (!url) return false;

  const payload = {
    name: lead.name.trim(),
    phone: lead.phone.trim(),
    model: lead.model?.trim() || "General Enquiry",
    message: lead.message?.trim() || "Requesting quotation and test drive",
    source: lead.source || "Website Form",
    timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  };

  try {
    // Strategy 1: URLSearchParams (Standard Form POST - Google Apps Script e.parameter)
    const formParams = new URLSearchParams();
    formParams.append("name", payload.name);
    formParams.append("phone", payload.phone);
    formParams.append("model", payload.model);
    formParams.append("message", payload.message);
    formParams.append("source", payload.source);
    formParams.append("timestamp", payload.timestamp);

    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formParams.toString(),
    });

    console.log("Lead dispatched via URLSearchParams to Google Sheet:", payload);
    return true;
  } catch (err) {
    console.warn("URLSearchParams dispatch error, falling back to JSON:", err);
    try {
      // Strategy 2: Raw JSON String fallback
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(payload),
      });
      return true;
    } catch (fallbackErr) {
      console.error("All Google Sheet dispatch methods failed:", fallbackErr);
      return false;
    }
  }
}

