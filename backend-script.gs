/**
 * GOOGLE APPS SCRIPT BACKEND
 * 
 * Instructions:
 * 1. Open script.google.com and create a new project.
 * 2. Paste this code into the editor.
 * 3. Replace 'yglabz@gmail.com' with your actual Gmail if different.
 * 4. Click 'Deploy' > 'New Deployment'.
 * 5. Select type: 'Web App'.
 * 6. Execute as: 'Me'.
 * 7. Who has access: 'Anyone'.
 * 8. Copy the Web App URL and use it in your frontend fetch call.
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var emailRecipient = "yglabz@gmail.com"; 
    var subject = "New Form Submission from Website: " + data.name;
    
    var body = "You have a new application for a Private Audit:\n\n" +
               "------------------------------------------\n" +
               "Full Name: " + data.name + "\n" +
               "Email: " + data.email + "\n" +
               "Primary Platform: " + data.platform + "\n" +
               "Audience Size: " + data.audienceSize + "\n" +
               "Current Revenue: " + data.revenue + "\n\n" +
               "Monetization methods: " + data.currentMonetization + "\n" +
               "Main Bottleneck:\n" + data.bottleneck + "\n" +
               "Tried methods:\n" + data.triedMethods + "\n" +
               "Why partner:\n" + data.whyPartner + "\n" +
               "------------------------------------------\n";

    MailApp.sendEmail({
      to: emailRecipient,
      subject: subject,
      body: body
    });

    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}