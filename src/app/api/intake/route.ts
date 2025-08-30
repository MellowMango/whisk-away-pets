import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    
    // Validate that we have required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.pets?.length) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Save to a database (e.g., PostgreSQL, MongoDB)
    // 2. Send to a CRM (e.g., HubSpot, Salesforce)
    // 3. Send notification emails
    // 4. Add to email marketing lists
    
    // For now, we'll log the submission and return success
    console.log("=== NEW INTAKE SUBMISSION ===");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Contact:", formData.firstName, formData.lastName, formData.email, formData.phone);
    console.log("Route:", formData.originCountry?.name, "→", formData.destinationCountry?.name);
    console.log("Pets:", formData.pets.map((pet: any) => `${pet.name} (${pet.type})`).join(", "));
    console.log("Budget:", formData.budgetRange || "Not specified");
    console.log("Urgent:", formData.isUrgent ? "Yes" : "No");
    console.log("Additional Services:", formData.additionalServices?.join(", ") || "None");
    console.log("Notes:", formData.notes || "None");
    console.log("=============================");

    // TODO: In production, replace this with actual data storage
    // Example implementations:
    
    // Database storage:
    // await db.intakeSubmissions.create({ data: formData });
    
    // CRM integration:
    // await createHubSpotContact({
    //   email: formData.email,
    //   firstName: formData.firstName,
    //   lastName: formData.lastName,
    //   phone: formData.phone,
    //   customProperties: {
    //     originCountry: formData.originCountry.name,
    //     destinationCountry: formData.destinationCountry.name,
    //     numberOfPets: formData.pets.length,
    //     budgetRange: formData.budgetRange,
    //     isUrgent: formData.isUrgent,
    //   }
    // });
    
    // Email notification:
    // await sendNotificationEmail({
    //   to: "admin@whiskaway.com",
    //   subject: `New Intake: ${formData.firstName} ${formData.lastName}`,
    //   template: "new-intake",
    //   data: formData
    // });

    return NextResponse.json(
      { 
        success: true, 
        message: "Form submitted successfully",
        submissionId: Date.now() // In production, use a proper UUID
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Intake submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}