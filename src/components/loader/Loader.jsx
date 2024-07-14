import { Spinner } from "flowbite-react";

export function Loader() {
  return (
    <div className="h-screen m-auto">
        <div className="flex flex-wrap gap-2">
            <div className="text-left">
                <Spinner aria-label="Left-aligned spinner example" />
            </div>
            <div>Loading...</div>
        </div>
    </div>
  );
}

