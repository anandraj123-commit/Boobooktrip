// import { NextResponse } from "next/server";
// import { sendMail } from "../../lib/mailer";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { type, name, email, tourTrip, destination,arrival,departure,adults,children,minPrice,maxPrice,phone} = body;
//     console.log('body',body);

//     if (type === 'tour-inquiry' &&  (!email || !phone || !tourTrip || !destination || !arrival || !departure || !adults)) {
//       return NextResponse.json(
//         { message: "Missing fields are missing.Please try again" },
//         { status: 400 }
//       );
//     }

//     if(type=== 'contact-us' && (!name || !email || !phone || !subject || !message)){
//       return NextResponse.json(
//         { message: "Missing fields are missing.Please try again" },
//         { status: 400 }
//       );
//     }

//     await sendMail({
//       to: email,
//       subject: `New Trip Enquiry - ${tourTrip}`,
//       html: `
//         <h2>New Trip Enquiry</h2>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Destination:</b>${destination}</p>
//         <p><b>TourTrip:</b>${tourTrip}</p>
//         <p><b>Phone:</b> ${phone}</p>
//          <p><b>Arrival:</b> ${arrival}</p>
//          <p><b>Department:</b> ${departure}</p>
//          <p><b>adults:</b> ${adults}</p>
//          <p><b>Children:</b> ${children}</p>
//         <p><b>Max Price:</b> ${maxPrice}</p>
//          <p><b>Min Price:</b> ${minPrice}</p>
//       `,
//     });

//     return NextResponse.json({ success: true });

//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { message: "Email failed" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { sendMail } from "../../lib/mailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      type,
      name,
      email,
      phone,

      // contact-us
      subject,
      message,

      // tour-inquiry
      tourTrip,
      destination,
      arrival,
      departure,
      adults,
      children,
      minPrice,
      maxPrice,
    } = body;

    console.log("body", body);

    // ---- VALIDATION ----
    if (
      type === "tour-inquiry" &&
      (!email || !phone || !tourTrip || !destination || !arrival || !departure || !adults)
    ) {
      return NextResponse.json(
        { message: "Some required fields are missing. Please try again." },
        { status: 400 }
      );
    }

    if (
      type === "contact-us" &&
      (!name || !email || !phone || !subject || !message)
    ) {
      return NextResponse.json(
        { message: "Some required fields are missing. Please try again." },
        { status: 400 }
      );
    }

    // ---- EMAIL CONTENT ----
    let mailOptions = {};

    if (type === "tour-inquiry") {
      mailOptions = {
        subject: `New Trip Enquiry - ${tourTrip}`,
        html: `
          <h2>New Trip Enquiry</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Destination:</b> ${destination}</p>
          <p><b>Tour Trip:</b> ${tourTrip}</p>
          <p><b>Arrival:</b> ${arrival}</p>
          <p><b>Departure:</b> ${departure}</p>
          <p><b>Adults:</b> ${adults}</p>
          <p><b>Children:</b> ${children || "-"}</p>
          <p><b>Min Price:</b> ${minPrice || "-"}</p>
          <p><b>Max Price:</b> ${maxPrice || "-"}</p>
        `,
      };
    }

    if (type === "contact-us") {
      mailOptions = {
        subject: `Contact Message — ${subject}`,
        html: `
          <h2>Contact Message</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Subject:</b> ${subject}</p>
          <p><b>Message:</b><br/>${message}</p>
        `,
      };
    }

    // ---- SEND ----
    await sendMail({
      to : [
        "help@boobook.in",
        "support@boobook.in",
        "noreplyboobooktrip@gmail.com",
      ], 
      ...mailOptions,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Email failed" }, { status: 500 });
  }
}

