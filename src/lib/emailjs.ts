import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

export interface IntakeFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  originCountry: {
    name: string;
    code: string;
    flag: string;
  };
  destinationCountry: {
    name: string;
    code: string;
    flag: string;
  };
  transportMethod: string;
  travelDate?: string;
  isUrgent: boolean;
  pets: Array<{
    name: string;
    type: string;
    breed?: string;
    ageYears: number;
    ageMonths?: number;
    weight: number;
    weightUnit: string;
    size: string;
    microchipped: string;
    microchipNumber?: string;
    vaccinationsUpToDate: string;
    medicalConditions?: string;
    behavioralNotes?: string;
    previousTravelExperience: string;
  }>;
  additionalInfo?: string;
}

export const sendCustomerConfirmation = async (formData: IntakeFormData) => {
  try {
    const templateParams = {
      to_email: formData.email,
      customer_name: `${formData.firstName} ${formData.lastName}`,
      customer_first_name: formData.firstName,
      origin_country: formData.originCountry.name,
      destination_country: formData.destinationCountry.name,
      transport_method: formData.transportMethod,
      travel_date: formData.travelDate || 'Not specified',
      pet_count: formData.pets.length,
      pets_summary: formData.pets.map(pet => 
        `${pet.name} (${pet.type}, ${pet.ageYears} years, ${pet.weight}${pet.weightUnit})`
      ).join(', '),
      phone: formData.phone,
      is_urgent: formData.isUrgent ? 'Yes' : 'No',
    };

    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CUSTOMER!,
      templateParams
    );

    return { success: true, result };
  } catch (error) {
    console.error('Failed to send customer confirmation:', error);
    return { success: false, error };
  }
};

export const sendOwnerNotification = async (formData: IntakeFormData) => {
  try {
    const templateParams = {
      to_email: process.env.EMAILJS_OWNER_EMAIL || 'max@whiskaway.com',
      customer_name: `${formData.firstName} ${formData.lastName}`,
      customer_email: formData.email,
      customer_phone: formData.phone,
      origin_country: formData.originCountry.name,
      destination_country: formData.destinationCountry.name,
      transport_method: formData.transportMethod,
      travel_date: formData.travelDate || 'Not specified',
      is_urgent: formData.isUrgent ? 'Yes - Urgent' : 'No',
      pet_count: formData.pets.length,
      pets_details: formData.pets.map((pet, index) => `
Pet ${index + 1}: ${pet.name}
- Type: ${pet.type}
- Breed: ${pet.breed || 'Not specified'}
- Age: ${pet.ageYears} years${pet.ageMonths ? ` ${pet.ageMonths} months` : ''}
- Weight: ${pet.weight}${pet.weightUnit}
- Size: ${pet.size}
- Microchipped: ${pet.microchipped}
- Microchip #: ${pet.microchipNumber || 'N/A'}
- Vaccinations up to date: ${pet.vaccinationsUpToDate}
- Medical conditions: ${pet.medicalConditions || 'None'}
- Behavioral notes: ${pet.behavioralNotes || 'None'}
- Previous travel: ${pet.previousTravelExperience}
      `).join('\n'),
      additional_info: formData.additionalInfo || 'None',
      submission_date: new Date().toLocaleString(),
    };

    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_OWNER!,
      templateParams
    );

    return { success: true, result };
  } catch (error) {
    console.error('Failed to send owner notification:', error);
    return { success: false, error };
  }
};

export const sendBothEmails = async (formData: IntakeFormData) => {
  const [customerResult, ownerResult] = await Promise.allSettled([
    sendCustomerConfirmation(formData),
    sendOwnerNotification(formData)
  ]);

  return {
    customer: customerResult.status === 'fulfilled' ? customerResult.value : { success: false, error: customerResult.reason },
    owner: ownerResult.status === 'fulfilled' ? ownerResult.value : { success: false, error: ownerResult.reason }
  };
};