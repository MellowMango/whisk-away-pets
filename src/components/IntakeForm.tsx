"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const schema = z.object({
  originCountry: z.string().min(2),
  destinationCountry: z.string().min(2),
  transportMethod: z.enum(["air","sea","land"]),
  petType: z.string().min(2),
  breed: z.string().optional(),
  ageYears: z.coerce.number().min(0).max(40),
  microchipped: z.enum(["yes","no"]),
  vaccinationsUpToDate: z.enum(["yes","no"]),
  travelDate: z.string().optional(),
  notes: z.string().max(1000).optional(),
});

type FormData = z.infer<typeof schema>;

export default function IntakeForm() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    localStorage.setItem("whiskaway:intake", JSON.stringify(data));
    router.push("/pricing");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-2xl">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Origin country</label>
          <input className="mt-1 w-full border rounded-md p-2"
                 placeholder="United States"
                 {...register("originCountry")} />
          {errors.originCountry && <p className="text-sm text-red-600">Required</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Destination country</label>
          <input className="mt-1 w-full border rounded-md p-2"
                 placeholder="Japan"
                 {...register("destinationCountry")} />
          {errors.destinationCountry && <p className="text-sm text-red-600">Required</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium">Transport</label>
          <select className="mt-1 w-full border rounded-md p-2" {...register("transportMethod")}>
            <option value="air">Air</option>
            <option value="sea">Sea</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Pet type</label>
          <input className="mt-1 w-full border rounded-md p-2"
                 placeholder="Dog / Cat / Other"
                 {...register("petType")} />
        </div>
        <div>
          <label className="block text-sm font-medium">Breed (optional)</label>
          <input className="mt-1 w-full border rounded-md p-2" {...register("breed")} />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium">Age (years)</label>
          <input type="number" className="mt-1 w-full border rounded-md p-2" {...register("ageYears")} />
        </div>
        <div>
          <label className="block text-sm font-medium">Microchipped</label>
          <select className="mt-1 w-full border rounded-md p-2" {...register("microchipped")}>
            <option value="yes">Yes</option><option value="no">No</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Vaccinations up to date</label>
          <select className="mt-1 w-full border rounded-md p-2" {...register("vaccinationsUpToDate")}>
            <option value="yes">Yes</option><option value="no">No</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Target travel date</label>
          <input type="date" className="mt-1 w-full border rounded-md p-2" {...register("travelDate")} />
        </div>
        <div>
          <label className="block text-sm font-medium">Notes</label>
          <textarea className="mt-1 w-full border rounded-md p-2" rows={3}
                    placeholder="Medical, airline, breed restrictions, etc."
                    {...register("notes")} />
        </div>
      </div>

      <div className="pt-2">
        <button disabled={isSubmitting}
                className="px-5 py-3 rounded-md bg-black text-white hover:opacity-90 disabled:opacity-50">
          Continue to pricing
        </button>
      </div>
    </form>
  );
}