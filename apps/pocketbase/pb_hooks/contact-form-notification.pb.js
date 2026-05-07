/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  try {
    const name = e.record.get("name");
    const email = e.record.get("email");
    const phone = e.record.get("phone");
    const message = e.record.get("message");
    const created = e.record.get("created");
    
    // Format the created timestamp
    let submittedTime = "Unknown";
    if (created) {
      const date = new Date(created);
      submittedTime = date.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short"
      });
    }
    
    // Create the email message
    const mailMessage = new MailerMessage({
      from: {
        address: $app.settings().meta.senderAddress,
        name: $app.settings().meta.senderName
      },
      to: [{ address: "ankurkatyal@asklegal.co.in" }],
      subject: "New Consultation Request from " + name,
      html: "<div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;\">" +
            "<h2 style=\"color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;\">New Consultation Request</h2>" +
            "<div style=\"background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;\">" +
            "<p style=\"margin: 10px 0;\"><strong style=\"color: #333;\">Name:</strong> " + (name || "N/A") + "</p>" +
            "<p style=\"margin: 10px 0;\"><strong style=\"color: #333;\">Email:</strong> <a href=\"mailto:" + (email || "") + "\">" + (email || "N/A") + "</a></p>" +
            "<p style=\"margin: 10px 0;\"><strong style=\"color: #333;\">Phone:</strong> " + (phone || "N/A") + "</p>" +
            "</div>" +
            "<div style=\"margin: 20px 0;\">" +
            "<h3 style=\"color: #333; margin-bottom: 10px;\">Message:</h3>" +
            "<p style=\"background-color: #fff; border-left: 4px solid #007bff; padding: 15px; line-height: 1.6; color: #555;\">" +
            (message ? message.replace(/\n/g, "<br>") : "N/A") +
            "</p>" +
            "</div>" +
            "<hr style=\"border: none; border-top: 1px solid #ddd; margin: 20px 0;\">" +
            "<p style=\"color: #999; font-size: 12px; margin: 10px 0;\"><em>Submitted on: " + submittedTime + "</em></p>" +
            "<p style=\"color: #999; font-size: 12px; margin: 10px 0;\"><em>Record ID: " + e.record.id + "</em></p>" +
            "</div>"
    });
    
    // Send the email
    $app.newMailClient().send(mailMessage);
    console.log("✓ Contact form notification email sent successfully for submission ID: " + e.record.id);
    
  } catch (error) {
    console.error("✗ Error sending contact form notification email: " + error.message);
    console.error("Stack: " + error.stack);
  }
  
  e.next();
}, "contact_submissions");