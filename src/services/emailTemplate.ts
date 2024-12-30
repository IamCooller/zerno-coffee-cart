export function getEmailTemplate({
	name,
	email,
	phone,
	eventLocation,
	eventType,
	eventDate,
	eventTime,
	guestCount,
	heardAbout,
	message,
}: {
	name?: string;
	email: string;
	phone: string;
	eventLocation: string;
	eventType: string;
	eventDate: string;
	eventTime: string;
	guestCount: string;
	heardAbout?: string;
	message: string;
}) {
	return `
<html>
<head>
  <style>
    .body {
      font-family: Montserrat, sans-serif;
      margin: 0;
      padding: 0;
      border-radius: 35px;
      border: 1px solid #495B6E;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      padding: 20px;
      text-align: center;
      border-bottom: 1px solid #495B6E;
    }
    .header h1 {
      margin: 0;
      font-size: 2rem;
      font-weight: bold;
    }
    .content {
      padding: 20px;
    }
    .footer {
      padding: 20px;
      text-align: center;
      font-size: 12px;
    }
  </style>
</head>
<body>
<div class="body">
  <div class="container">
    <div class="header">
      <h1>Contact Form</h1>
    </div>
    <div class="content">
      ${name ? `<p><strong>Name:</strong> ${name}</p>` : ""}
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Event Location:</strong> ${eventLocation}</p>  
      <p><strong>Event Type:</strong> ${eventType}</p>
      <p><strong>Event Date:</strong> ${eventDate}</p>
      <p><strong>Event Time:</strong> ${eventTime}</p>
      <p><strong>Guest Count:</strong> ${guestCount}</p>
      ${heardAbout ? `<p><strong>Heard About:</strong> ${heardAbout}</p>` : ""}
      <p><strong>Message:</strong> ${message}</p>
    </div>
  </div>
</div>
</body>
</html>


`;
}
