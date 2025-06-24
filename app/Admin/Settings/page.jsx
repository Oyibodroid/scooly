import Button from "@components/Button";

export default function SettingsPage() {
  return (
    <div className="flex flex-col lg:flex-row lg:pl-6 gap-4">
      <div className="card-2">
        <p className="heading">School Basic Details</p>
        <hr />
        <form action="" className="flex flex-col gap-6 py-4">
          <div className="relative">
            <p className="label">
              School Name <span className="text-red-500">*</span>
            </p>
            <input type="text" className="input py-2" />
          </div>

          <div className="relative">
            <p className="label">
              School Motto <span className="text-red-500">*</span>
            </p>
            <input type="text" className="input py-2" />
          </div>

          <div className="relative">
            <p className="label">
              School Address <span className="text-red-500">*</span>
            </p>
            <input type="text" className="input py-2" />
          </div>

          <div className="relative">
            <p className="label">
              About School <span className="text-red-500">*</span>
            </p>
            <input type="text" className="input py-2" />
          </div>

          <div className="flex justify-end">
            <Button variant="blue" className="px-4 rounded-md">Update</Button>
          </div>
        </form>
      </div>
      <div className="card-2">
        <p className="heading text-gray-800">Change section and School fees</p>
        <form action="">

        </form>
      </div>
    </div>
  );
}
