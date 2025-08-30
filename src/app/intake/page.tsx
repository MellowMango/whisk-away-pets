import EnhancedIntakeForm from "@/components/EnhancedIntakeForm";

export default function IntakePage() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Plan Your Pet's Journey</h1>
        <p className="text-lg text-neutral-700">
          Tell us about your pets and travel plans to get personalized guidance
        </p>
        <p className="text-sm text-neutral-500">
          ✓ Secure form ✓ No payment required ✓ Instant pricing
        </p>
      </div>
      <EnhancedIntakeForm />
    </div>
  );
}