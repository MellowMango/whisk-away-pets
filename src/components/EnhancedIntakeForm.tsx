"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";
import PhoneInput from "react-phone-number-input";
import ReactCountryFlag from "react-country-flag";
import countries from "world-countries";
import "react-phone-number-input/style.css";

const petSchema = z.object({
  name: z.string().min(1, "Pet name is required"),
  type: z.string().min(1, "Pet type is required"),
  breed: z.string().optional(),
  ageYears: z.coerce.number().min(0).max(40),
  ageMonths: z.coerce.number().min(0).max(11).optional(),
  weight: z.coerce.number().min(0.1).max(200),
  weightUnit: z.enum(["kg", "lbs"]),
  size: z.enum(["small", "medium", "large", "extra-large"]),
  microchipped: z.enum(["yes", "no"]),
  microchipNumber: z.string().optional(),
  vaccinationsUpToDate: z.enum(["yes", "no"]),
  medicalConditions: z.string().optional(),
  behavioralNotes: z.string().optional(),
  previousTravelExperience: z.enum(["none", "domestic", "international"]),
});

const countrySchema = z.object({
  name: z.string(),
  code: z.string(),
  flag: z.string(),
});

const schema = z.object({
  // Contact Information
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  
  // Travel Information
  originCountry: countrySchema,
  destinationCountry: countrySchema,
  transportMethod: z.enum(["air", "sea", "land"]),
  travelDate: z.string().optional(),
  isUrgent: z.boolean().default(false),
  
  // Pets
  pets: z.array(petSchema).min(1, "At least one pet is required"),
  
  // Additional Information
  additionalServices: z.array(z.string()).optional(),
  budgetRange: z.enum(["under-500", "500-1000", "1000-2000", "2000-5000", "over-5000"]).optional(),
  notes: z.string().max(1000).optional(),
});

type FormData = z.infer<typeof schema>;

const countryOptions = countries.map(country => ({
  value: {
    name: country.name.common,
    code: country.cca2,
    flag: country.flag,
  },
  label: (
    <div className="flex items-center gap-2">
      <ReactCountryFlag countryCode={country.cca2} svg style={{ width: '1em', height: '1em' }} />
      <span>{country.name.common}</span>
    </div>
  ),
  searchLabel: country.name.common,
}));

const petSizeOptions = [
  { value: "small", label: "Small (under 10kg/22lbs)" },
  { value: "medium", label: "Medium (10-25kg/22-55lbs)" },
  { value: "large", label: "Large (25-45kg/55-100lbs)" },
  { value: "extra-large", label: "Extra Large (45kg+/100lbs+)" },
];

const additionalServicesOptions = [
  { value: "custom-crates", label: "Custom travel crates" },
  { value: "veterinary-coordination", label: "Veterinary coordination" },
  { value: "quarantine-assistance", label: "Quarantine facility assistance" },
  { value: "door-to-door", label: "Door-to-door transport" },
  { value: "insurance", label: "Travel insurance" },
  { value: "express-processing", label: "Express document processing" },
];

export default function EnhancedIntakeForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const { register, handleSubmit, control, formState: { errors }, watch, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      pets: [{
        name: "",
        type: "",
        breed: "",
        ageYears: 1,
        ageMonths: 0,
        weight: 10,
        weightUnit: "kg",
        size: "medium",
        microchipped: "yes",
        microchipNumber: "",
        vaccinationsUpToDate: "yes",
        medicalConditions: "",
        behavioralNotes: "",
        previousTravelExperience: "none",
      }],
      additionalServices: [],
      isUrgent: false,
    },
  });

  const { fields: petFields, append: appendPet, remove: removePet } = useFieldArray({
    control,
    name: "pets",
  });

  const watchedServices = watch("additionalServices") || [];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Submit form data to our API
      const response = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Store in localStorage for checkout
        localStorage.setItem("whiskaway:intake", JSON.stringify(data));
        setShowSuccess(true);
        
        // Auto-redirect to pricing after showing success
        setTimeout(() => {
          router.push("/pricing");
        }, 2000);
      } else {
        alert("There was an error submitting your form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const addPet = () => {
    appendPet({
      name: "",
      type: "",
      breed: "",
      ageYears: 1,
      ageMonths: 0,
      weight: 10,
      weightUnit: "kg",
      size: "medium",
      microchipped: "yes",
      microchipNumber: "",
      vaccinationsUpToDate: "yes",
      medicalConditions: "",
      behavioralNotes: "",
      previousTravelExperience: "none",
    });
  };

  if (showSuccess) {
    return (
      <div className="text-center space-y-4 py-8">
        <div className="text-green-600 text-2xl">✓</div>
        <h2 className="text-xl font-semibold">Thank you!</h2>
        <p className="text-neutral-600">
          Your information has been saved. Redirecting to pricing...
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-4xl">
      {/* Contact Information */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold border-b pb-2">Contact Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">First Name *</label>
            <input className="mt-1 w-full border rounded-md p-2"
                   {...register("firstName")} />
            {errors.firstName && <p className="text-sm text-red-600">{errors.firstName.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name *</label>
            <input className="mt-1 w-full border rounded-md p-2"
                   {...register("lastName")} />
            {errors.lastName && <p className="text-sm text-red-600">{errors.lastName.message}</p>}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Email *</label>
            <input type="email" className="mt-1 w-full border rounded-md p-2"
                   {...register("email")} />
            {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Phone Number *</label>
            <PhoneInput
              defaultCountry="US"
              value={watch("phone")}
              onChange={(value) => setValue("phone", value || "")}
              className="mt-1"
              style={{
                "--PhoneInputCountryFlag-height": "1em",
                "--PhoneInput-color--focus": "#2563eb",
              } as any}
            />
            {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
          </div>
        </div>
      </section>

      {/* Travel Information */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold border-b pb-2">Travel Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">From (Origin Country) *</label>
            <Select
              options={countryOptions}
              value={countryOptions.find(opt => opt.value.code === watch("originCountry")?.code)}
              onChange={(selected) => setValue("originCountry", selected?.value!)}
              isSearchable
              placeholder="Search countries..."
              className="mt-1"
              classNamePrefix="react-select"
              filterOption={(option, inputValue) =>
                option.data.searchLabel.toLowerCase().includes(inputValue.toLowerCase())
              }
            />
            {errors.originCountry && <p className="text-sm text-red-600">Origin country is required</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">To (Destination Country) *</label>
            <Select
              options={countryOptions}
              value={countryOptions.find(opt => opt.value.code === watch("destinationCountry")?.code)}
              onChange={(selected) => setValue("destinationCountry", selected?.value!)}
              isSearchable
              placeholder="Search countries..."
              className="mt-1"
              classNamePrefix="react-select"
              filterOption={(option, inputValue) =>
                option.data.searchLabel.toLowerCase().includes(inputValue.toLowerCase())
              }
            />
            {errors.destinationCountry && <p className="text-sm text-red-600">Destination country is required</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">Transport Method</label>
            <select className="mt-1 w-full border rounded-md p-2" {...register("transportMethod")}>
              <option value="air">Air Transport</option>
              <option value="sea">Sea Transport</option>
              <option value="land">Land Transport</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Planned Travel Date</label>
            <input type="date" className="mt-1 w-full border rounded-md p-2" {...register("travelDate")} />
          </div>
          <div className="flex items-center pt-6">
            <input type="checkbox" className="mr-2" {...register("isUrgent")} />
            <label className="text-sm">Urgent (within 30 days)</label>
          </div>
        </div>
      </section>

      {/* Pets Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b pb-2">
          <h2 className="text-lg font-semibold">Your Pets</h2>
          <button
            type="button"
            onClick={addPet}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add Another Pet
          </button>
        </div>

        {petFields.map((field, index) => (
          <div key={field.id} className="border rounded-lg p-4 space-y-4 bg-gray-50">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Pet {index + 1}</h3>
              {petFields.length > 1 && (
                <button
                  type="button"
                  onClick={() => removePet(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium">Pet Name *</label>
                <input className="mt-1 w-full border rounded-md p-2"
                       {...register(`pets.${index}.name` as const)} />
                {errors.pets?.[index]?.name && <p className="text-sm text-red-600">{errors.pets[index]?.name?.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium">Type *</label>
                <input className="mt-1 w-full border rounded-md p-2"
                       placeholder="Dog, Cat, Bird, etc."
                       {...register(`pets.${index}.type` as const)} />
                {errors.pets?.[index]?.type && <p className="text-sm text-red-600">{errors.pets[index]?.type?.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium">Breed</label>
                <input className="mt-1 w-full border rounded-md p-2"
                       {...register(`pets.${index}.breed` as const)} />
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium">Age (Years)</label>
                <input type="number" min="0" max="40" className="mt-1 w-full border rounded-md p-2"
                       {...register(`pets.${index}.ageYears` as const)} />
              </div>
              <div>
                <label className="block text-sm font-medium">Age (Months)</label>
                <input type="number" min="0" max="11" className="mt-1 w-full border rounded-md p-2"
                       {...register(`pets.${index}.ageMonths` as const)} />
              </div>
              <div>
                <label className="block text-sm font-medium">Weight</label>
                <input type="number" step="0.1" min="0.1" className="mt-1 w-full border rounded-md p-2"
                       {...register(`pets.${index}.weight` as const)} />
              </div>
              <div>
                <label className="block text-sm font-medium">Unit</label>
                <select className="mt-1 w-full border rounded-md p-2" {...register(`pets.${index}.weightUnit` as const)}>
                  <option value="kg">Kilograms</option>
                  <option value="lbs">Pounds</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Size Category</label>
                <select className="mt-1 w-full border rounded-md p-2" {...register(`pets.${index}.size` as const)}>
                  {petSizeOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Previous Travel Experience</label>
                <select className="mt-1 w-full border rounded-md p-2" {...register(`pets.${index}.previousTravelExperience` as const)}>
                  <option value="none">No previous travel</option>
                  <option value="domestic">Domestic travel only</option>
                  <option value="international">International travel experience</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Microchipped</label>
                <select className="mt-1 w-full border rounded-md p-2" {...register(`pets.${index}.microchipped` as const)}>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Microchip Number</label>
                <input className="mt-1 w-full border rounded-md p-2"
                       {...register(`pets.${index}.microchipNumber` as const)} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Vaccinations Up to Date</label>
              <select className="mt-1 w-full border rounded-md p-2" {...register(`pets.${index}.vaccinationsUpToDate` as const)}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Medical Conditions</label>
                <textarea className="mt-1 w-full border rounded-md p-2" rows={2}
                          placeholder="Any health issues, medications, or special needs..."
                          {...register(`pets.${index}.medicalConditions` as const)} />
              </div>
              <div>
                <label className="block text-sm font-medium">Behavioral Notes</label>
                <textarea className="mt-1 w-full border rounded-md p-2" rows={2}
                          placeholder="Anxiety, aggression, special handling needs..."
                          {...register(`pets.${index}.behavioralNotes` as const)} />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Additional Services */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold border-b pb-2">Additional Services (Optional)</h2>
        <div className="grid md:grid-cols-2 gap-2">
          {additionalServicesOptions.map((service) => (
            <label key={service.value} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={service.value}
                checked={watchedServices.includes(service.value)}
                onChange={(e) => {
                  const current = watchedServices;
                  if (e.target.checked) {
                    setValue("additionalServices", [...current, service.value]);
                  } else {
                    setValue("additionalServices", current.filter(s => s !== service.value));
                  }
                }}
              />
              <span className="text-sm">{service.label}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Budget and Notes */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold border-b pb-2">Additional Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Budget Range (Optional)</label>
            <select className="mt-1 w-full border rounded-md p-2" {...register("budgetRange")}>
              <option value="">Prefer not to say</option>
              <option value="under-500">Under $500</option>
              <option value="500-1000">$500 - $1,000</option>
              <option value="1000-2000">$1,000 - $2,000</option>
              <option value="2000-5000">$2,000 - $5,000</option>
              <option value="over-5000">Over $5,000</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium">Additional Notes</label>
          <textarea className="mt-1 w-full border rounded-md p-2" rows={4}
                    placeholder="Any special circumstances, concerns, or questions..."
                    {...register("notes")} />
        </div>
      </section>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-8 py-3 rounded-md bg-black text-white hover:opacity-90 disabled:opacity-50"
        >
          {isSubmitting ? "Saving..." : "Next Step - View Pricing"}
        </button>
        <p className="mt-2 text-sm text-neutral-600">
          Your information will be saved securely. No payment required yet.
        </p>
      </div>
    </form>
  );
}